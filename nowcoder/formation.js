/**
 * Created by Administrator on 2017/5/25 0025.
 */
/*
* 调整队形
 在幼儿园有n个小朋友排列为一个队伍，从左到右一个挨着一个编号为(0~n-1)。其中有一些是男生，有一些是女生，男生用'B'表示，女生用'G'表示。小朋友们都很顽皮，当一个男生挨着的是女生的时候就会发生矛盾。作为幼儿园的老师，你需要让男生挨着女生或者女生挨着男生的情况最少。你只能在原队形上进行调整，每次调整只能让相邻的两个小朋友交换位置，现在需要尽快完成队伍调整，你需要计算出最少需要调整多少次可以让上述情况最少。例如：
 GGBBG -> GGBGB -> GGGBB
 这样就使之前的两处男女相邻变为一处相邻，需要调整队形2次
输入描述:
 输入数据包括一个长度为n且只包含G和B的字符串.n不超过50.
输出描述:
 输出一个整数，表示最少需要的调整队伍的次数
输入例子:
 GGBBG
输出例子:
 2
 */
process.stdin.resume();//回复输入流
process.stdin.setEncoding('utf8');

var input_stdin = "";//输入的全部数据
var input_stdin_array = "";//输入的每行数据以数组形式存在
var input_currentline = 0;//输入的行数

process.stdin.on('data', function (data) {//接收输入的数据
    input_stdin += data;
    if(data.slice(0,-1)==''){
        process.stdin.emit('end');//输入空的回车结束输入
    }
});

process.stdin.on('end', function () {//end触发
    input_stdin_array = input_stdin.split("\n");
    main();//对输入进行操作
});

function readLine() {
    return input_stdin_array[input_currentline++];//读取每一行的数据
}

function main(){
    var str=readLine().split('');
    var min=0;
    var numG=0,numB=0,sumG=0,sumB=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='G'){
            sumG +=i;
            numG++;
        }else {
            sumB +=i;
            numB++;
        }
    }
    min=Math.min(sumG-(numG-1)*numG/2,sumB-(numB-1)*numB/2);
    console.log(min);
}