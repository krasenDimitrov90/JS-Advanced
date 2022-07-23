window.addEventListener('load', solution);

function solution() {
  let submitBtnEl = document.getElementById('submitBTN');
  let editBtnEl = document.getElementById('editBTN');
  let continueBtnEl = document.getElementById('continueBTN');
  let infoPrevieEl = document.getElementById('infoPreview');

  let personalInfo = [];

  submitBtnEl.addEventListener('click', (e) => {
    
    let fNameInputEl = document.getElementById('fname');
    let emailInputEl = document.getElementById('email');
    let phoneInputEl = document.getElementById('phone');
    let addressInputEl = document.getElementById('address');
    let codeInputEl = document.getElementById('code');

    fName = fNameInputEl.value;
    email = emailInputEl.value;
    phone = phoneInputEl.value;
    address = addressInputEl.value;
    code = codeInputEl.value;

    if (fName === '' || email === '') {
      return
    };

    let fNameLiEl = document.createElement('li');
    let emailLiEl = document.createElement('li');
    let phoneLiEl = document.createElement('li');
    let addressLiEl = document.createElement('li');
    let codeLiEl = document.createElement('li');

    fNameLiEl.textContent = 'Full Name: ' + fName;
    emailLiEl.textContent = 'Email: ' + email;
    phoneLiEl.textContent = 'Phone Number: ' + phone;
    addressLiEl.textContent = 'Address: ' + address;
    codeLiEl.textContent = 'Postal Code: ' + code;

    infoPrevieEl.appendChild(fNameLiEl);
    infoPrevieEl.appendChild(emailLiEl);
    infoPrevieEl.appendChild(phoneLiEl);
    infoPrevieEl.appendChild(addressLiEl);
    infoPrevieEl.appendChild(codeLiEl);
    console.log(infoPrevieEl);

    fNameInputEl.value = '';
    emailInputEl.value = '';
    phoneInputEl.value = '';
    addressInputEl.value = '';
    codeInputEl.value = '';

    submitBtnEl.disabled = true;
    editBtnEl.disabled = false;
    continueBtnEl.disabled = false;

    editBtnEl.addEventListener('click', (e) => {
      fNameInputEl.value = fName;
      emailInputEl.value = email;
      phoneInputEl.value = phone;
      addressInputEl.value = address;
      codeInputEl.value = code;

      infoPrevieEl.innerHTML = '';

      editBtnEl.disabled = true;
      continueBtnEl.disabled = true;
      submitBtnEl.disabled = false;
    })

    continueBtnEl.addEventListener('click' , () => {
      let divEl = document.getElementById('block');
      divEl.innerHTML = '';

      let h3El = document.createElement('h3');
      h3El.textContent = 'Thank you for your reservation!';
      divEl.appendChild(h3El);

    })
  });
}
