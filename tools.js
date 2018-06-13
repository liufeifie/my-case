/**
 * Created by OracleOAEC on 2016/10/25.
 * prototype 属性使您有能力向对象添加属性和方法
 */
//对象名字  Tools
function Tools() {

}


//居中
Tools.prototype.center = function (_element, _elementSize) {
    _element.style.left = (this.getWindowSize().width - _elementSize.width) / 2 + 'px';
    _element.style.top = (this.getWindowSize().height - _elementSize.height) / 2 + 'px';
};
//var elementSize = {'width': '300', 'height': '100'};
Tools.prototype.getWindowSize = function () {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientWidth
    }
};
//小于10 加0 例如01 02
Tools.prototype.addZero = function (_num) {
    if (_num < 10) {
        _num = "0" + _num;
    } else {
        _num = _num;
    }
    return _num;
};
//滚动条距离
Tools.prototype.getScrollSize = function () {
    return {
        top: document.body.scrollTop || document.documentElement.scrollTop,
        left: document.body.scrollLeft || document.documentElement.scrollLeft
    }
};
//通过任何元素
Tools.prototype.$ = function (_element) {
    var obj = document.querySelectorAll(_element);
    if (obj.length == 0) {
        return obj[0];
    }
    return obj;//document.querySelector()
};

//去掉前后空格
Tools.prototype.trim = function (_content) {
    var pattern = /^\s*(.+?)\s*$/;
    _content = _content.replace(pattern, "$1");
    return _content;
};
//邮箱验证
Tools.prototype.valid_email = function (_email) {
    var pattern = /^[0-9a-z]+([\._-][a-z0-9]+)?@([0-9a-z]+([_-]+[0-9a-z]+)?\.[a-z]{2,9}(\.[a-z0-9]+)?)$/i;
    var result = null;
    if (pattern.test(_email)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};
//手机验证
Tools.prototype.valid_tel = function (_tel) {
    var pattern = /^1(3|5|7)[0-9]{9}$/i;
    var result = null;
    if (pattern.test(_tel)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};
//验证密码强度
Tools.prototype.pwd_test = function (_pass) {
    if (t.trim(_pass).length != 0) {
        var num = 0;
        if (/[\d]/.test(_pass)) {
            num += 1;
        }
        if (/[a-z]/.test(_pass)) {
            num += 1;
        }
        if (/[A-Z]/.test(_pass)) {
            num += 1;
        }
        if (/[\W]/.test(_pass)) {
            num += 1;
        }
    }
    return num;// 0 1 2 3
};
//cookie 的运用
//设置cookie                                           //有效期
Tools.prototype.setCookie = function (_name, _value, _expires, _path, _domain, _secure) {
    var cookieTxt = encodeURI(_name) + '=' + encodeURI(_value);
    if (_expires instanceof Date) {
        cookieTxt += ';expires=' + _expires;
    }
    if (_path) {
        cookieTxt += ';path=' + _path;
    }
    if (_domain) {
        cookieTxt += ';domain=' + _domain;
    }
    if (_secure) {
        cookieTxt += ';secure=';
    }
    document.cookie = cookieTxt;
    /*console.log(document.cookie);*/
};
//获取cookie信息
Tools.prototype.getCookie = function (_name) {
    //解码
    _name = decodeURI(_name);
    _name = _name + '=';
    //获取文档cookie
    str = document.cookie;
    //获取以_name开始截取的索引值
    var strStart = str.indexOf(_name);
    //获取以_name开始的以‘;’结束的索引值
    var strEnd = str.indexOf(';', strStart);
    if (strEnd == -1) {
        strEnd = str.length;
    }
    return decodeURI(str.substring(strStart + _name.length, strEnd));
};
//清除cookie
Tools.prototype.unsetCookie = function (_name) {
    document.cookie = _name + "=;expires=" + new Date(0);
};
//获取键盘代码   '键盘号'+e.key+'的编码是:'+ e.keyCode
Tools.prototype.getKeyCode = function () {
    window.onkeyup = function (e) {
        var body = document.querySelector('body');
        var body0 = body.innerHTML;
        body.innerHTML = body0 + "&nbsp;键盘号&ensp;<b>" + e.key + "&ensp;</b>的编码是:" + e.keyCode + ";";
    };
};
//数组
//判断元素是否在数组里
Tools.prototype.in_array = function (val, arr) {
    for (var i in arr) {
        if (val == arr[i]) {
            return true;
        }
    }
    return false;
}
//删除数组里面的重复值
Tools.prototype.array_unique = function (arr) {
    var tmp = [];
    for (var i = 1; i < arr.length; i++) {
        //给定一个变量
        var a = 1;
        for (var j = 0; j < tmp.length; j++) {
            //如果原数组内当前元素与临时数组内任一个元素相等，则a=0;
            if (arr[i] == tmp[j]) {
                a = 0;
                break;
            }
        }
        //如果a!=0,代表当前元素不在数组里，可以留下来
        if (a == 1) {
            tmp.push(arr[i]);
        }
    }
    /*
     var o={};
     arr.forEach(function (val,key,arr) {
     /!*  var v=val;
     if(!isNaN(v)){
     v=v+' ';
     }
     tmp[v]=key;*!/
     o[val]=key;
     });
     var i=0;
     for(var j in o){
     tmp[i]=j;
     i++;
     }*/
    /*
     // 遍历arr，把元素分别放入tmp数组(不存在才放)
     for (var i in arr) {
     //该元素在tmp内部不存在才允许追加
     if (tmp.indexOf(arr[i]) == -1) {
     tmp.push(arr[i]);
     }
     }
     */
    return tmp;

};
//数组排序  从大到小  数值
Tools.prototype.desc_array = function (arr) {
    /* var max, arrs = [];

     function asc(_arr) {
     //比较
     max = _arr[0];
     for (var i = 1; i < _arr.length; i++) {
     if (max < arr[i]) {
     max = arr[i];
     }
     }
     //删除最小
     for (var j = 0; j < _arr.length; j++) {
     if (_arr[j] == max) {
     _arr.splice(j, 1);
     }
     }
     //存入
     arrs.push(max);
     //元素数目大于1 继续比较  递归
     if (_arr.length > 0) {
     asc(_arr);
     }
     }

     asc(arr);
     return arrs;*/
    arr.sort(function (x, y) {
        return x < y ? 1 : 0;
    });
};
//数组排序  从小到大  数值
Tools.prototype.asc_array = function (arr) {
    /* var min, arrs = [];

     function asc(_arr) {
     //比较
     min = _arr[0];
     for (var i = 1; i < _arr.length; i++) {
     if (min > arr[i]) {
     min = arr[i];
     }
     }
     //删除最小
     for (var j = 0; j < _arr.length; j++) {
     if (_arr[j] == min) {
     _arr.splice(j, 1);
     }
     }
     //存入
     arrs.push(min);
     //元素数目大于1 继续比较
     if (_arr.length > 0) {
     asc(_arr);
     }
     }

     asc(arr);
     return arrs;*/
    arr.sort(function (x, y) {
        return x > y ? 1 : 0;
    });

};
//数组最小值和对应索引
Tools.prototype.min_array = function (arr) {
    var index = 0;
    var min = arr[index];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    var json = {index: index, min: min};
    return json;
};
//数组最大值和对应索引
Tools.prototype.max_array = function (arr) {
    var index = 0;
    var max = arr[index];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    var json = {index: index, max: max};
    return json;
};
//随机数
Tools.prototype.rand = function (a, b) {
    return Math.round(Math.random() * Math.abs(b - a) + Math.min(a, b));
};
// 首字母大写
Tools.prototype.ucfirst = function (str) {
    var pattern = /\b(\w)(\w*)/g;
    return str.replace(pattern, function ($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
};
//首字母小写
Tools.prototype.lcfirst = function (str) {
    var pattern = /\b(\w)(\w*)/g;
    return str.replace(pattern, function ($0, $1, $2) {
        return $1.toLowerCase() + $2.toUpperCase();
    });
}

//ajax的封装

Tools.prototype.ajax = function (opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.anysc = opt.anysc || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function () {
        };
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    var params = [];
    for (var k in opt.data) {
        params.push(k + '=' + opt.data[k]);
    }
    datas = params.join('&');
    if (opt.method == 'GET') {
        xhr.open(opt.method, opt.url + '?' + datas, opt.anysc);
        xhr.send(null);
    } else if (opt.method == 'POST') {
        xhr.open(opt.method, opt.url, opt.anysc);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xhr.send(datas);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                opt.success(xhr.responseText);
            } else {
                alert('出错了,Err：' + xhr.status);
            }
        }
    }
}












