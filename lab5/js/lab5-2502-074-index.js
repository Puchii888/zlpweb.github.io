// 打开/关闭登录弹窗
document.getElementById('openLogin').onclick = function(){
    document.getElementById('loginMask').classList.add('show');
}

document.getElementById('closeLogin').onclick = function(){
    document.getElementById('loginMask').classList.remove('show');
}

// 登录/注册切换
document.getElementById('toRegister').onclick = function(){
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

document.getElementById('toLogin').onclick = function(){
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// 注册功能
document.getElementById('registerFormEle').onsubmit = function(e){
    e.preventDefault();
    let username = this.username.value.trim();
    let pwd = this.pwd.value;
    let repwd = this.repwd.value;

    if(pwd !== repwd){
        alert('两次密码输入不一致！');
        return;
    }
    if(localStorage.getItem(username)){
        alert('该账号已被注册！');
        return;
    }

    localStorage.setItem(username, pwd);
    alert('注册成功！请登录');
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    this.reset();
}

// 登录功能
document.getElementById('loginFormEle').onsubmit = function(e){
    e.preventDefault();
    let username = this.username.value.trim();
    let pwd = this.pwd.value;

    let savedPwd = localStorage.getItem(username);
    if(savedPwd && savedPwd === pwd){
        alert('登录成功！欢迎回来，' + username);
        document.getElementById('loginMask').classList.remove('show');
        this.reset();
    }else{
        alert('账号或密码错误！');
    }
}

// 第三方登录
document.querySelectorAll('.third-icon').forEach(icon => {
    icon.onclick = function() {
        let type = this.title;
        alert(`正在调用${type}...`);
        document.getElementById('loginMask').classList.remove('show');
        alert(`${type}登录成功！`);
    }
});

// 回到顶部
document.getElementById('backTop').onclick = function(e){
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}