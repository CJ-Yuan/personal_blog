
// 该文件用于读取，修改，判断cookie


// 用于添加一个Cookie 参数：名字，值，时间
export function addCookei(name,value,time){
    document.cookie = `${name} = ${value}; max-age=${time}`
}


// 用于查找一个Cookie并将值返回,如果没有返回null
export function seekCookei(name){
    // 拆分 cookie 字符串
    var cookieArr = document.cookie.split(";");
    // 循环遍历数组元素
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
        if(name === cookiePair[0].trim()) {
            // cookie值并返回
            return cookiePair[1];
        }
    }
    // 如果未找到，则返回null
    return null;
}