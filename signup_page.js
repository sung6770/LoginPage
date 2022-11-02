function checkEmail() {
    let email = document.getElementById('input-email');
    let regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let informWrongEmail = document.getElementById('wrong-email');

    if ((email.value).match(regExp) == null) {
        informWrongEmail.textContent = '잘못된 이메일 형식입니다!';
        email.value = null;
        return true;
    }
    else informWrongEmail.textContent = '';
}

function checkPassword() {
    let inputPassword = document.getElementById('input-password').value;
    let checkPassword = document.getElementById('check-password');
    let informWrongPassword = document.getElementById('wrong-password')
    if (inputPassword != checkPassword.value) {
        informWrongPassword.textContent = '비밀번호가 일치하지 않습니다!';
        checkPassword.value = null;
    }
    else informWrongPassword.textContent = '비밀번호가 일치합니다!';
}

let studentNumber = document.getElementById('student-number');

function checkNumber() {
    let number = studentNumber.value;
    let informWrongStudentNumber = document.getElementById('wrong-studentnumber');
    if (number.length != 10) {
        informWrongStudentNumber.textContent = '학번이 잘못되었습니다!';
        studentNumber.value = null;
    }
    else informWrongStudentNumber.textContent = '';
}

studentNumber.addEventListener('change', checkMajor);

function checkMajor() {
    let number = studentNumber.value;
    let major = document.getElementById('major');
    if (number.slice(4, 7) == 136) major.value = '컴퓨터공학부'
    else if (number.slice(4, 7) == 120) major.value = '기계공학부'
    else if (number.slice(4, 7) == 140) major.value = '메카트로닉스공학부'
    else if (number.slice(4, 7) == 161) major.value = '전자정보통신공학부'
    else if (number.slice(4, 7) == 151) major.value = '디자인공학부'
    else if (number.slice(4, 7) == 172) major.value = '건축공학부'
    else if (number.slice(4, 7) == 174) major.value = '에너지신소재공학부'
    else if (number.slice(4, 7) == 180) major.value = '산업경영학부'
    else if (number.slice(4, 7) == 185) major.value = '고용서비스정책학부'
    else {
        major.value = '학번을 다시 입력하십시오';
    }
}

function insertHyphen() {
    let phoneNumber = document.getElementById('phone-number');
    let informWrongphonenumber = document.getElementById('wrong-phonenumber');
    if (phoneNumber.value.length != 11) informWrongphonenumber.textContent = '잘못된 전화번호입니다!';
    else {
        phoneNumber.value = phoneNumber.value.slice(0, 3) + '-' + phoneNumber.value.slice(3, 7) + '-' + phoneNumber.value.slice(7, 11);
        informWrongphonenumber.textContent = '';
    }
}

let closebtn = document.getElementById('btn-close');
closebtn.addEventListener('click', gotoLoginPage);

function gotoLoginPage() {
    window.location.href = 'login_page.html';
}
