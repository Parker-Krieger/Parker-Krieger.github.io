let tableData = [];

// Add table and header
document.write("<table>");
document.write("<tr><th>X</th><th>Operator</th><th>Y</th><th>Result</th>");

// Calculator loop
while(true) {
  let x = prompt("Value of x");
  // Break loop if user clicks cancel
  if(x == null || x === '') {
    break;
  }
  let operator = prompt("operator");
  // Break loop if user clicks cancel
  if(operator == null || operator === '') {
    break;
  }
  let y = prompt("Value of y");
  // Break loop if user clicks cancel
  if(y == null || y === '') {
    break;
  }
  let element = {
    x: x,
    operator: operator,
    y: y
  };
  let result = calculateResult(element);
  addRow(element, result);
  if(!isNaN(result)) {
    tableData.push(result);


  }
}

// Close table
document.write("</table>");

// Data analysis table
let min = Math.min(...tableData);
let max = Math.max(...tableData);
let sum = tableData.reduce((a, b) => a + b);
let average = sum / tableData.length;

document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
document.write(`<tr><td>${min}</td><td>${max}</td><td>${average}</td><td>${sum}</td></tr>`);
document.write("</table>");

function addRow(data, result) {
  document.write(`<tr><td>${data.x}</td><td>${data.operator}</td><td>${data.y}</td><td>${result}</td>`);
}

function calculateResult(data) {
  const varRegex = /^[0-9]+$/;
  const opRegex = /^[-+*\/%]$/;
  if(!varRegex.test(String(data.x)) || !varRegex.test(String(data.y))) {
    return 'Invalid number';
  }
  if(!opRegex.test(String(data.operator))) {
    return 'Invalid operator'
  }
  switch(String(data.operator))
  {
    case '-':
      return Number(data.x) - Number(data.y);
    case '+':
      return Number(data.x) + Number(data.y);
    case '*':
      return Number(data.x) * Number(data.y);
    case '/':
      return Number(data.x) / Number(data.y);
    case '%':
      return Number(data.x) % Number(data.y);
  }
}