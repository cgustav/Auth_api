
/*----------  Required  ----------*/

import {isEmail, isPassword} from './validations.js';

/*----------  Capturing DOM components  ----------*/
const iForm = document.getElementById('login-form');
const iEmail = document.getElementById('inEmail');
const iPassword = document.getElementById('inPassword');
const sender = document.getElementById('btn-sender');


/*----------  Event Listeners  ----------*/


sender.onclick = e => {
    e.preventDefault();
    var email = iEmail.value;
    var password = iPassword.value;

    if (isEmail(email) && isPassword(password)) {
        alert('All OK.');
        //iForm.submit();
    } else {
        alert('Please verify your email or password');
    }
};


/*----------  Inner Functions  ----------*/

