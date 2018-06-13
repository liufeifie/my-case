function countDown(id,sec,fun1,fun2){
    var s=sec;
    tick();
    s--;

    var tim=setInterval(function(){
        tick()
        s--;
    },1000)
    function tick(){
        var d=parseInt(s/(3600*24));
        var d1 = 0;
        var d2 = 0;
        if(d>=10){
            d1 = parseInt(d/10);
            d2 = parseInt(d%10);
        }else{
            d1 = 0;
            d2 = d;
        }
        var h=parseInt((s%(3600*24))/3600);
        var h_double = h;
        if(h_double<10){
            h_double = "0"+h_double;
        }
        var h1 = 0;
        var h2 = 0;
        if(h>=10){
            h1 = parseInt(h/10);
            h2 = parseInt(h%10);
        }else{
            h1 = 0;
            h2 = h;
        }
        mins=s%3600;
        var min=parseInt(mins/60);
        var min_double = min;
        if(min_double<10){
            min_double = '0'+min_double;
        }
        var min_do
        var min1=0;
        var min2=0;
        if(min>=10){
            min1 = parseInt(min/10);
            min2 = parseInt(min%10);
        }else{
            min1 = 0;
            min2 = min;
        }
        var sec=mins%60;
        var sec_double = sec;
        if(sec_double<10){
            sec_double = '0'+sec_double;
        }
        var sec1=0;
        var sec2=0;
        if(sec>=10){
            sec1 = parseInt(sec/10);
            sec2 = parseInt(sec%10);
        }else{
            sec1 = 0;
            sec2 = +sec;
        }

        if(s<=0){
            if(fun2) fun2();
            clearInterval(tim);
            return false;
        }else{
           fun1(d,d1,d2,h,h1,h2,min,min1,min2,sec,sec1,sec2,h_double,min_double,sec_double);
        }
    }
}