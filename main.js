const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const fullname = $('#fullname');
const email = $('#email');
const password = $('#password');
const passConfirm = $('#password_confirmation');
const message = fullname.parentElement.querySelector('span')

//tạo đối tượng validation
var validation = new Validation();

//validation Tên không được rỗng.
fullname.onblur = function(e){
    validation.kiemTraRong(fullname.value, fullname);

    // xử lý khi nhấp vào gõ kỹ tứ
    fullname.oninput= function(){
        validation.getMessage(fullname).innerHTML = ''
    }
}

//validation email 
email.onblur = function(e){
    validation.kiemTraEmail(email, email)
   // xử lý khi nhấp vào gõ ký tự
    email.oninput= function(){
        validation.getMessage(email).innerHTML = ''
    }
}

// validation password 
password.onblur = function(e){
    validation.kiemTraPass(password, 6);
    // xử lý khi nhấp vào gõ ký tự
    password.oninput= function(){
        validation.getMessage(password).innerHTML = ''
    }
}

passConfirm.onblur =function(e){
     if(validation.kiemTraRong(passConfirm.value,passConfirm)){
        validation.kiemTraPassConfirm(passConfirm, password.value);

     }
    passConfirm.oninput= function(){
        validation.getMessage(passConfirm).innerHTML = ''
    }
}
// console.log(validation.kiemTraRong(fullname.value,fullname))

