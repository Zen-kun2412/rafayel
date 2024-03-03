// let acc = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         username: "admin",
//         password: "admin",
//     },
//     {
//         id: 2,
//         email: "admin2@gmail.com",
//         username: "admin2",
//         password: "admin2",
//     }
// ];
// localStorage.setItem("account", JSON.stringify(acc));

let dataUser=JSON.parse(localStorage.getItem('account'));
function checkEmail(email, password, type){
    console.log("🚀 ~ file: index.js:39 ~ checkEmail ~ email:", email, password, type)
    let exists = false; // tạo biến để kiếm tra tài khoản có tồn tại hay không (true: là đã tồn tại, false: chưa tồn tại)
    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email) {
           if (type === `login`){
                  if (password === dataUser[i].password) {
            exists = true;
        }
    } else {
        console.log("🚀 ~ file: index.js:39 ~ type:", type)
        exists = true;
    }
    return exists;
}
}
}


function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('exampleInputEmail2').value;
    let valuePassword = document.getElementById('exampleInputPassword2').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            alert('Login successful')
        } else {
            alert('Account not found')
        }
    } else {
        alert('Please enter email and password')
    }
}


function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('exampleInputEmail1').value;
    let valuePassword = document.getElementById('exampleInputPassword1').value;
    let valueConfPassword = document.getElementById('exampleInputPassword2').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail)) {
            alert('Email already exists')
        } else {
            if (valuePassword === valueConfPassword) {
                dataUser.push({ id: dataUser.length + 1, email: valueEmail, password: valuePassword })
                localStorage.setItem('account', JSON.stringify(dataUser))
                alert('Register success') // ngược lại thông báo email hợp lệ
            } else {
                alert('Confirm Password fail') // ngược lại thông báo email hợp lệ
            }
        }
    } else {
        alert('Please enter your email and password')
    }
}

function updatePassword() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email) {
        // Lưu mật khẩu mới vào Local Storage
        localStorage.setItem(email, password);
        alert('Mật khẩu đã được cập nhật thành công!');
    } 
}
localStorage.getItem('data')