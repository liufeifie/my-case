/**
 * Created by OracleOAEC on 2016/10/25.
 */
function Tools() {

}
//居中
//_elementSize={width:'X',height:'Y'};
Tools.prototype.center= function (_element,_elementSize) {
    _element.style.left=(this.getWindowSize().width-_elementSize.width)/2+'px';
    _element.style.top=(this.getWindowSize().height-_elementSize.height)/2+'px';
};
Tools.prototype.getWindowSize=function(){
    return {
        width:window.innerWidth||document.documentElement.clientWidth,
        height:window.innerHeight||document.documentElement.clientWidth
    }
};
Tools.prototype.addZero=function(_num){
    if(_num<10){
        _num="0"+_num;
    }else{
        _num=_num;
    }
    return _num;
};

Tools.prototype.getScrollSize=function(){
    return{
        top:document.body.scrollTop||document.documentElement.scrollTop,
        left:document.body.scrollLeft||document.documentElement.scrollLeft
    }
};
//通过任何元素
Tools.prototype.GetAny= function (_element) {
    return document.querySelector(_element);//document.querySelectorAll()
};
//通过id
Tools.prototype.GetId = function (_id) {
    return document.getElementById(_id);
};
//通过class 数组
Tools.prototype.GetClass = function (_class) {
    return document.getElementsByClassName(_class);
};
//通过标签  数组
Tools.prototype.GetTag = function (_tag) {
    return document.getElementsByTagName(_tag)
};
//通过属性 数组
Tools.prototype.GetAttr = function (_name) {
    return document.getElementsByName(_name)
};
//去掉前后空格
Tools.prototype.trim = function (_content) {
    var pattern = /^\s*(.+?)\s*$/;
    _content = _content.replace(pattern, "$1");
    return _content;
};
//邮箱验证
Tools.prototype.Valid_email=function(_email){
    var pattern=/^[0-9a-z]+([\._-][a-z0-9]+)?@([0-9a-z]+([_-]+[0-9a-z]+)?\.[a-z]{2,9}(\.[a-z0-9]+)?)$/i;
    var result=null;
    if(pattern.test(_email)){
        result=true;
    }else {
        result=false;
    }
    return result;
};
//手机验证
Tools.prototype.Valid_tel= function (_tel) {
    var pattern=/^1(3|5|7)[0-9]{9}$/i;
    var result=null;
    if(pattern.test(_tel)){
        result=true;
    }else {
        result=false;
    }
    return result;
};
//验证密码强度
Tools.prototype.Pwd_test=function(_pass){
    if(t.trim(_pass).length!=0){
        var num=0;
        if(!/[\d]/.test(_pass)){
            num+=1;
        }
        if(!/[a-z]/.test(_pass)){
            num+=1;
        }
        if(!/[A-Z]/.test(_pass)){
            num+=1;
        }
        if(!/[\W]/.test(_pass)){
            num+=1;
        }
    }
    return num;// 0 1 2 3
};


