/**
 * Created by Administrator on 2017/5/27 0027.
 */
/*
 * 魔力手环
 小易拥有一个拥有魔力的手环上面有n个数字(构成一个环),当这个魔力手环每次使用魔力的时候就会发生一种奇特的变化：每个数字会变成自己跟后面一个数字的和(最后一个数字的后面一个数字是第一个),一旦某个位置的数字大于等于100就马上对100取模(比如某个位置变为103,就会自动变为3).现在给出这个魔力手环的构成，请你计算出使用k次魔力之后魔力手环的状态。
 输入描述:
 输入数据包括两行：
 第一行为两个整数n(2 ≤ n ≤ 50)和k(1 ≤ k ≤ 2000000000),以空格分隔
 第二行为魔力手环初始的n个数，以空格分隔。范围都在0至99.
 输出描述:
 输出魔力手环使用k次之后的状态，以空格分隔，行末无空格。
 输入例子:
 3 2
 1 2 3
 输出例子:
 8 9 7
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
function mulOrder(x,y,n,c){//n阶矩阵的乘法与取余，x:nxn,y:nxn
    var mul=[];//mul为全0矩阵,mul:n*n
    for(var i=0;i<n;i++){
        mul[i]=[];
        for(var j=0;j<n;j++){
            mul[i][j]=0;
            for(var k=0;k<n;k++){
                mul[i][j] +=parseInt(x[i][k])*parseInt(y[k][j]);
            }
            mul[i][j]%=c;
        }
    }
    return mul;
}
function oneOrder(x,y,n,c){//一阶矩阵的乘法与取余x:1xn,y:nxn
    var mul=[];//mul为全0矩阵,mul:1xn
    for(var i=0;i<n;i++){
        mul[i]=0;
        for(var j=0;j<n;j++){
            mul[i] +=parseInt(x[j])*parseInt(y[j][i]);
        }
        mul[i]%=c;
    }
    return mul;
}
function main(){
    var num=readLine().split(' ');
    var arr=readLine().split(' ');
    var n=parseInt(num[0]);
    var k=parseInt(num[1]);
    var matrix=[];
    //创建矩阵B
    for(var i=0;i<n;i++){//对矩阵B赋值
        matrix[i]=[];
        for(var j=0;j<n;j++){
            matrix[i][j]=0;
        }
    }
    for(var i=0;i<n;i++){
        matrix[i][i]=1;
        if(i==n-1){
            matrix[0][i]=1;
        }else{
            matrix[i+1][i]=1;
        }
    }
    while(k){
        if(k&1){
            arr=oneOrder(arr,matrix,n,100);
        }
        k>>=1;
        matrix=mulOrder(matrix,matrix,n,100);
    }
    console.log(arr.join(' '));
}