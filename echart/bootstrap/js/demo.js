/**
 * Created by OracleOAEC on 2016/11/11.
 */
//声明一个模块demo
define(function () {
    return {
        Msg: function () {
            setInterval(function () {
                var d=new Date();
                var s= d.getSeconds();
                var s0=t.addZero(s);
                document.querySelector('.time').innerHTML=s0;
            },1000);
        }
    }
});