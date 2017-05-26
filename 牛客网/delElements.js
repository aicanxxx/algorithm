/**
 * Created by Administrator on 2017/5/25 0025.
 */
/*
小易有一个长度为n序列，小易想移除掉里面的重复元素，但是小易想是对于每种元素保留最后出现的那个。小易遇到了困难,希望你来帮助他。
输入描述:
 输入包括两行：
 第一行为序列长度n(1 ≤ n ≤ 50)
 第二行为n个数sequence[i](1 ≤ sequence[i] ≤ 1000)，以空格分隔
输出描述:
 输出消除重复元素之后的序列，以空格分隔，行末无空格
输入例子:
 9
 100 100 100 99 99 99 100 100 100
输出例子:
 99 100
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
    var n=readLine();
    var seq=readLine().split(' ').reverse();
    var obj={};
    var data=[];
    for(var i=0;i<n;i++){
        if(!obj[seq[i]]){
            obj[seq[i]]=true;
            data.push(seq[i])
        }
    }
    var str=data.reverse().join(' ');
    console.log(str);
}