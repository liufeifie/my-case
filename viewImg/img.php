<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="jquery-1.8.3.min.js"></script>
    <script src="lrz.js"></script>
    <script type="text/javascript" src="exif.js"></script>
</head>
<body>
<input type="file" id="upload">
<img src="" id="preview" alt="预览原图">
<img src="" id="preview1" alt="压缩">
<script>
    $('#upload').change(function () {
        var file=$(this)[0].files[0];
        console.log(file);
        var _URL = window.URL || window.webkitURL;
        var img=new Image();
        img.src=_URL.createObjectURL(file);//createObjectURL
        img.onload=function () {
            // 图片宽高
            console.log(img.width);
            console.log(img.height);
        };
        // 预览图片
        $('#preview').attr('src',_URL.createObjectURL(file));

        //  压缩图片
        lrz(file, {width: 100}, function(res){
            // 预览
            $('#preview1').attr('src',res.base64);
            $.ajax({
                url:'./file.php',
                type:'post',
                data:{
                    'a':res.base64
                },
                success:function (data) {
                    console.log('ajax',data);
                },
                error:function () {
                    console.log('failed');
                }
            });
        });

    });
</script>
</body>
</html>


