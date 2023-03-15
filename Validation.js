const Validation = function(){
    this.kiemTraRong = function(value,selector){
        if (value.trim() === '') {

            this.getMessage(selector).innerHTML = 'Trường này không được bỏ trống';
            this.getMessage(selector).style.color = 'red';
            return false;
        } else {
            this.getMessage(selector).innerHTML = '';
            return true;
        }
    },
    this.getMessage= function(selector){
        return selector.parentElement.querySelector('span');
    }

    this.kiemTraEmail = function(email,selector){
        var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(email.value) ) {
            this.getMessage(selector).innerHTML = ''
        }
        else {
            this.getMessage(selector).innerHTML = 'Email không hợp lệ';
            this.getMessage(selector).style.color = 'red';
        }
    }
    this.kiemTraPass = function(selector, min){
        var leng = selector.value.length;
        if (leng <= 6) {
            this.getMessage(selector).innerHTML = 'Mật khẩu không hợp lệ';
            this.getMessage(selector).style.color = 'red';
        }
        else {
            this.getMessage(selector).innerHTML = ''

        }
    }
    this.kiemTraPassConfirm = function(selector,value){
        if (value !== selector.value){
            this.getMessage(selector).innerHTML = 'Mật khẩu không khớp';
            this.getMessage(selector).style.color = 'red';
        }
        else {
            this.getMessage(selector).innerHTML = ''

        }
    }

}