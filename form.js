const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
const days = 31;
const startYear = 1970;
const endYear = 2010;

for (let month of months) {
  let el = document.createElement('option');
  el.setAttribute('value', month);
  el.innerHTML = month;
  document.form.month.appendChild(el);
}

for (let i = 0; i <= days ; i++) {
  let el = document.createElement('option');
  el.setAttribute('value', i === 0 ? '' : String(i));
  el.innerHTML = i === 0 ? '' : String(i);
  document.form.date.appendChild(el);
}

for (let i = startYear - 1; i <= endYear; i++) {
  let el = document.createElement('option');
  el.setAttribute('value', i === startYear - 1 ? '' : String(i));
  el.innerHTML = i === startYear - 1 ? '' : String(i);
  document.form.year.appendChild(el);
}

function submitForm() {
  document.getElementById('output').innerHTML='';
  let validUsername = verifyUsername();
  let validEmail = verifyEmail();
  let validPassword = verifyPassword();
  let validPhoneNumber = verifyPhoneNumber();
  let genderSelected = verifyGender();
  let birthdaySelected = verifyBirthDay();
  let musicSelected = verifyMusic();

  if (validUsername &&
      validEmail &&
      validPassword &&
      validPhoneNumber &&
      genderSelected &&
      birthdaySelected &&
      musicSelected) {
    if (passwordsMatch()) {
      window.location.replace("https://parker-krieger.github.io/");
    }
  }

}

function verifyUsername() {
  const usernameRegex = /^[a-z0-9]{4,12}$/;
  let username = document.form.username.value;
  if (username.length === 0) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: red">Username</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  if (!usernameRegex.test(username)) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: orange">a valid username</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function verifyEmail() {
  const emailRegex = /^.*@.*\.(net|com|org|edu)$/;
  let email = document.form.email.value;
  if (email.length === 0) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: red">Email</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  if (!emailRegex.test(email)) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: orange">a valid email</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function verifyPhoneNumber() {
  const phoneNumberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  let phoneNumber = document.form.phoneNumber.value;
  if (phoneNumber.length === 0) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: red">Phone Number</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: orange">a valid phone number</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function verifyPassword() {
  const passwordRegex = /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).*$/
  let password = document.form.password.value;
  if (password.length === 0) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: red">Password</span>';
    document.getElementById('output').appendChild(el);
    return false
  }

  if (!passwordRegex.test(password)) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Enter <span style="color: orange">a valid password</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function passwordsMatch() {
  let password = document.form.password.value;
  let confirmPassword = document.form.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return false;
  }

  return true;
}

function verifyGender() {
  let gender = document.form.gender.value;
  if (!gender) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Select <span style="color: red">Gender</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function verifyBirthDay() {
  let month = document.form.month.value;
  let day = document.form.date.value;
  let year = document.form.date.value;
  if (month.length === 0 || day.length === 0 || year.length === 0) {
    let el = document.createElement('p');
    el.innerHTML = 'Please Select <span style="color: red">Birth Day</span>';
    document.getElementById('output').appendChild(el);
    return false;
  }

  return true;
}

function verifyMusic() {
  let music = document.form.music;
  for (const genre of music) {
    if (genre.checked) {
      return true;
    }
  }

  let el = document.createElement('p');
  el.innerHTML = 'Please Select <span style="color: red">Favorite Music Genre</span>';
  document.getElementById('output').appendChild(el);
  return false;
}