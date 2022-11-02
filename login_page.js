let loginbtn = document.getElementById('btn-login');

loginbtn.addEventListener('click', checkCondition);

function checkCondition(){
    let hasId = document.getElementById('input-email');
    let hasPw = document.getElementById('input-password');
    if(!hasId.value || !hasPw.value){
        alert("id, pw를 입력해주세요!");
    }
}