
/*
关于：
函数定义方式；
函数解析顺序；
函数声明提升
 */

/*
定义函数的三种方式有：function函数、Function()构造函数、对象字面量。
从解析顺序来分析，它们的不同在于：
      function函数：优先解析；
      Function()构造函数、函数字面量定义:顺序解析。
*/

//函数顺序：1 2 3 4 5 6
//测试结果：4 2 3 3 5 6
//可以发现：发生改变的主要在 1→4 和 4→3


// 函数1：以 function函数 方式定义，优先解析
function f(){
    return 1;
}
alert(f());//返回值为4 说明第1个函数被第4个函数覆盖
    


// 函数2：Function()构造函数，顺序解析
var f = new Function("return 2;");        
alert(f());//返回值为2 说明第4个函数被第2个函数覆盖        



// 函数3：函数字面量定义，顺序解析
var f = function(){
    return 3;
}            
alert(f());//返回值为3 说明第2个函数被第3个函数覆盖




// 函数4：以 function函数 方式定义，优先解析，覆盖函数1，发生了函数声明提升
function f(){
    return 4;}                 
alert(f());//返回值为3 说明第4个函数被第3个函数覆盖



// 函数5：Function()构造函数，顺序解析
var f = new Function("return 5");         
alert(f());//返回值为5 说明第3个函数被第5个函数覆盖   



// 函数6：函数字面量定义，顺序解析
var f = function(){
    return 6 ;
}           
alert(f());//返回值为6 说明第5个函数被第6个函数覆盖