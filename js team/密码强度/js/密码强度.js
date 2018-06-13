/**
 * Created by Administrator on 2016/10/30.
 */
window.onload= function () {
    var p=document.querySelector('p');
    var element={width:'400',height:'54'};
    t.center(p,element);
    var pwd=document.querySelector('input');
    var span=document.querySelectorAll('span');
    pwd.addEventListener('keyup',function(){
       var num=t.Pwd_test(pwd.value);
       if(num==undefined){
           span[0].style.backgroundColor='grey';
           span[0].innerHTML='&nbsp;';
           span[1].style.backgroundColor='grey';
           span[1].innerHTML='&nbsp;';
           span[2].style.backgroundColor='grey';
           span[2].innerHTML='&nbsp;';
       }
       if(num==2){
           span[0].style.backgroundColor='#f53301';
           span[0].innerHTML='弱';
           span[1].style.backgroundColor='grey';
           span[1].innerHTML='&nbsp;';
           span[2].style.backgroundColor='grey';
           span[2].innerHTML='&nbsp;';
       }
       if(num==1){
           span[1].style.backgroundColor='#f97e08';
           span[1].innerHTML='中';
           span[2].style.backgroundColor='grey';
           span[2].innerHTML='&nbsp;';
       }
       if(num==0){
           span[2].style.backgroundColor='#6a9e07';
           span[2].innerHTML='强';
       }
   });
    var input=document.querySelectorAll('input');
    input[1].addEventListener('click', function () {
        var val=input[0].value;
        if((val.length>0&&val.length<6)||val.length>16){
           alert('密码6到16个字符');
            return false;
        }else if(val.length==0){
            alert('密码不为空');
            return false;
        }else {
            alert('密码正确');
        }
        alert('提交成功');
    });

};