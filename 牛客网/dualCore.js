/**
 * Created by Administrator on 2017/5/22 0022.
 * 牛客网不支持es6,若要在牛客网上运行需将let换成var
 */
/*
*双核问题
一种双核CPU的两个核能够同时的处理任务，现在有n个已知数据量的任务需要交给CPU处理，假设已知CPU的每个核1秒可以处理1kb，每个核同时只能处理一项任务。n个任务可以按照任意顺序放入CPU进行处理，现在需要设计一个方案让CPU处理完这批任务所需的时间最少，求这个最小的时间。
输入描述：
 输入包括两行：
 第一行为整数n(1 ≤ n ≤ 50)
 第二行为n个整数length[i](1024 ≤ length[i] ≤ 4194304)，表示每个任务的长度为length[i]kb，每个数均为1024的倍数。
输出描述：
 输出一个整数，表示最少需要处理的时间
输入例子:
 5
 3072 3072 7168 3072 1024
输出例子:
 9216*/
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
        var arr=readLine().split(' ');
        var sum=0,dp=[],t=0;
        //arr=arr.map(function(item){
            //return +item;
        //});//从字符串变为数字
        for(let i=0;i<n;i++){
            arr[i] /= 1024;
            sum +=arr[i];
        }
        for(let i=0;i<sum;i++){
            dp[i]=0;
        }
        for(let i=0;i<n;i++){
            for(let j=parseInt(sum/2);j>=arr[i];j--){
                dp[j]=Math.max(dp[j],dp[j-arr[i]]+arr[i]);
            }
        }
        t=Math.max(dp[parseInt(sum/2)]*1024,(sum-dp[parseInt(sum/2)])*1024);
        console.log(t);
    }