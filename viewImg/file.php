<?php
$base64_image_content=$_POST['a'];
//匹配出图片的格式
if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){ //	可选，存储匹配结果的数组， $matches[0] 将包含与整个模式匹配的文本，$matches[1] 将包含与第一个捕获的括号中的子模式所匹配的文本，以此类推
    $type = $result[2];
    $new_file = "./".date('Ymd',time())."/";
    if(!file_exists($new_file))
    {
//检查是否有该文件夹，如果没有就创建，并给予最高权限
        mkdir($new_file, 0700);
    }
    $new_file = $new_file.time().".{$type}";
    if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $base64_image_content)))){
        echo '新文件保存成功：', $new_file;
    }else{
        echo '新文件保存失败';
    }
}




?>