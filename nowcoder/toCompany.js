/**
 * Created by Administrator on 2017/5/25 0025.
 */
/*
* 赶去公司
终于到周末啦！小易走在市区的街道上准备找朋友聚会，突然服务器发来警报,小易需要立即回公司修复这个紧急bug。假设市区是一个无限大的区域，每条街道假设坐标是(X，Y)，小易当前在(0，0)街道，办公室在(gx,gy)街道上。小易周围有多个出租车打车点，小易赶去办公室有两种选择，一种就是走路去公司，另外一种就是走到一个出租车打车点，然后从打车点的位置坐出租车去公司。每次移动到相邻的街道(横向或者纵向)走路将会花费walkTime时间，打车将花费taxiTime时间。小易需要尽快赶到公司去，现在小易想知道他最快需要花费多少时间去公司。
输入描述:
 输入数据包括五行:
 第一行为周围出租车打车点的个数n(1 ≤ n ≤ 50)
 第二行为每个出租车打车点的横坐标tX[i] (-10000 ≤ tX[i] ≤ 10000)
 第三行为每个出租车打车点的纵坐标tY[i] (-10000 ≤ tY[i] ≤ 10000)
 第四行为办公室坐标gx,gy(-10000 ≤ gx,gy ≤ 10000),以空格分隔
 第五行为走路时间walkTime(1 ≤ walkTime ≤ 1000)和taxiTime(1 ≤ taxiTime ≤ 1000),以空格分隔
输出描述:
 输出一个整数表示，小易最快能赶到办公室的时间
输入例子:
 2
 -2 -2
 0 -2
 -4 -2
 15 3
输出例子:
 42
* */
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
function main() {
    var taxiNum=readLine();
    var tX=readLine().split(' ');
    var tY=readLine().split(' ');
    var gXY=readLine().split(' ');
    var time=readLine().split(' ');

    var minTime=0;
    var wT=0;
    var tT=(Math.abs(tX[0])+Math.abs(tY[0]))*time[0]+(Math.abs(gXY[0]-tX[0])+Math.abs(gXY[1]-tY[0]))*time[1] ||0;
    wT=(Math.abs(gXY[0])+Math.abs(gXY[1]))*time[0];
    if(taxiNum>1){
        for(var i=1;i<taxiNum;i++){
            tT=(Math.abs(tX[i])+Math.abs(tY[i]))*time[0]+(Math.abs(gXY[0]-tX[i])+Math.abs(gXY[1]-tY[i]))*time[1]>tT?tT:(Math.abs(tX[i])+Math.abs(tY[i]))*time[0]+(Math.abs(gXY[0]-tX[i])+Math.abs(gXY[1]-tY[i]))*time[1];
        }
    }
    minTime=Math.min(wT,tT);
    console.log(minTime);
}