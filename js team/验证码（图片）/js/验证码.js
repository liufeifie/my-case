/**
 * Created by Administrator on 2016/10/30.
 */
window.onload = function () {
    var p = document.querySelector('p');
    //居中
    var t = new Tools();
    var $pSize = {'width': '380', 'height': '68'};
    t.center(p, $pSize);
    var input = document.querySelectorAll('input');
    var img = document.querySelector('img');
    input[1].addEventListener('click', function () {
        var index = img.getAttribute('name');
        var arr = ['mwel', 'zjty', 'y74p', 'lvyy', 'ba9a', 'brq9', 'rmyd', 'dztk',
            'twmy', 'hkta', 'gms5', 'agqg', 'gdt7', 'msrf', 'vfve', 'mlgt',
            'heh6', '2qvp', 'htfw', 'dda5', '8wkg', 'zjhr', 'v7fr', '8ari'];
        var content = input[0].value.toLowerCase();
        arr[index] == content ? alert('验证码正确') : alert('验证码错误');
    });
    Countdown();//秒数变化
    codeChange();//页面加载验证码变化

};
var time=setInterval('Countdown()', 1000); //10秒倒计时
//验证码变化
function codeChange() {
    var arr = ['../images/vcode1.jpg', '../images/vcode2.jpg', '../images/vcode3.jpg', '../images/vcode4.jpg',
        '../images/vcode5.jpg', '../images/vcode6.jpg', '../images/vcode7.jpg', '../images/vcode8.jpg',
        '../images/vcode9.jpg', '../images/vcode10.jpg', '../images/vcode11.jpg', '../images/vcode12.jpg',
        '../images/vcode13.jpg', '../images/vcode14.jpg', '../images/vcode15.jpg', '../images/vcode16.jpg',
        '../images/vcode17.jpg', '../images/vcode18.jpg', '../images/vcode19.jpg', '../images/vcode20.jpg',
        '../images/vcode21.jpg', '../images/vcode22.jpg', '../images/vcode23.jpg', '../images/vcode24.jpg',
    ];
    var img = document.querySelector('img');
    var img0=img.getAttribute('src');
    //随机数
    var index = Math.floor(Math.random() * (arr.length));
    img.setAttribute('src', arr[index]);
    img.setAttribute('name', index);
    Countdown(true);
    var img1=img.getAttribute('src');
    if(img0!=img1){//图片变化清楚定时器的影响
        clearInterval(time);//清除
        time=setInterval('Countdown()', 1000);//重新启动
    }

}
//10秒倒计时
var i = 30;
function Countdown(_i) {
    var span2 = document.querySelector('.span2');
    if (_i) {
        i = 30;
    }
    if (i == 0) {
        codeChange();
        i = 10;
    }
    span2.innerHTML = i;
    i--;
}