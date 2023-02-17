function verify_password() {
    const password_warn = document.getElementById('password_warn')
    const password = document.getElementById('password')
    const confirm_password = document.getElementById('confirm_password')
    const birthday = document.getElementById('birthday').value.split('-')
    const dob_warn = document.getElementById('dob_warn')
    const elegible_warn = document.getElementById('elegible_warn')

    let flag1 = false, flag2 = false, flag3 = false;

    if (password.value.length < 8) {
        password_warn.innerHTML = 'Password too short!'
    } else {
        password_warn.innerHTML = ''
        flag1 = true
    }

    if (password.value !== confirm_password.value) {
        confirm_warn.innerHTML = 'Password not similar!'
    } else {
        confirm_warn.innerHTML = ''
        flag2 = true
    }

    if (birthday[0] >= 2001) {
        dob_warn.innerHTML = "You are not elligible!"
    } else {
        dob_warn.innerHTML = ''
        flag3 = true
    }

    if (flag1 === true && flag2 === true && flag3 === true) {
        elegible_warn.innerHTML = 'Congrats! Accepted!'
    }
}

function reset_form() {
    const confirm_warn = document.getElementById('confirm_warn')
    const password_warn = document.getElementById('password_warn')
    const dob_warn = document.getElementById('dob_warn')

    confirm_warn.innerHTML = ''
    password_warn.innerHTML = ''
    dob_warn.innerHTML = ''

}