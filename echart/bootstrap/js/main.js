/**
 * Created by OracleOAEC on 2016/11/11.
 */
//  配置
require.config({
    paths: {//文件地址
        "jquery": "jquery-3.1.1.min",
        "bootstrap": "bootstrap",
        //   "tools":"tools",
        //  "angular":"angular"
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});
//        模块名          回调函数 参数任意
require(['demo', 'jquery', 'bootstrap','tools', 'angular'], function (d) {
    console.log('加载完毕');
    d.Msg();
});


