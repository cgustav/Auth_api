 
 /*----------  Regular Expressions  ----------*/
 
 /*Email standard */
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/* Any char, between 6 and 40 characters */
const regexPassword = /^.{6,40}$/;




/*----------  Export Functions  ----------*/


export const isEmail = input => {
    if (!regexEmail.test(input)) {
        return false;
    }
    return true;
}

export const isPassword = input => {
    if (regexPassword.test(input)) {
        return true;
    }
    return false;
}


/*----------  Inner Functions  ----------*/


const isEmpty = input => {
    input =  $.trim(input);

    if (input === "") {
        return true
    } 
    return false;
}


