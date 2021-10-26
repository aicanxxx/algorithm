/**
 * Created by Administrator on 2017/7/25 0025.
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
function getDNA(str){
    var num=0;
    var length=0;
    var patt=new RegExp("A|T|C|G","g");
    var result;
    var arr=[];
    while ((result = patt.exec(str)) != null)  {
        arr.push(patt.lastIndex);
    }
    patt.lastIndex=0;
    if(arr.length>0){
        num=1;
        length=1;
    }
    for(var i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]+1){
            num++;
        }else{
            //length=num>length?num:length;
            num=1;
        }
        length=num>length?num:length;
    }
    return length;
}
function main(){
    var str=readLine();
    var num=getDNA(str);
    console.log(num)

}