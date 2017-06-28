/**
 * Created by Administrator on 2017/6/28 0028.
 */
/*
 * 栈：后进先出
 * function Stack(){}
 * 创建空栈：var stack=new Stack();*/
function Stack(){//创建一个Stack的对象
    var items=[];
    this.push= function(element){//添加一个或几个元素到栈顶
        items.push(element);
    };
    this.pop=function(){//移除并返回栈顶的元素
        return items.pop();
    };
    this.peek= function(){//返回栈顶的元素
        return items[items.length-1];
    };
    this.isEmpty=function(){//是否为空，若为空为true
        return items.length==0;
    };
    this.clear=function(){//移除所有元素
        items=[];
    };
    this.size=function(){//返回栈里元素个数
        return items.length;
    };
    this.print=function(){//将元素输出在控制台
        console.log(items.toString());
    }
}

/*
 * 十进制转换成其他任意进制
 * function baseConverter(decNumber,base){}
 * decNumber:需要转换的十进制数
 * base:转换的进制*/
function baseConverter(decNumber,base){
    var remStack=new Stack();
    var rem,baseString='';
    var digits='0123456789ABCDEF';
    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }
    while(!remStack.isEmpty()){
        baseString +=digits[remStack.pop()];
    }
    return baseString;
}
    /*
    * 括号匹配
    * function checkBracket(st)
    * st:括号字符串*/
    function checkBracket(st){
        var bracket=st.split('');//将字符串转化为数组
        var stack=new Stack();
        var i=0;
        while(i<bracket.length){
            //如果是( [ { 则放入栈中，是) ] }则与栈顶元素进行比较，如果都不是则不用管，i++
            if(bracket[i]=='('||bracket[i]=='['||bracket[i]=='{'){
                stack.push(bracket[i]);
            }else{
                if(bracket[i]==')'){
                    //如果栈顶的括号是与之对应的，则删除并判断是否为空
                    if(stack.pop()=='('){
                        if(stack.isEmpty()){
                            return true;
                        }
                    }else{
                        return false;
                    }
                }
                if(bracket[i]==']'){
                    //如果栈顶的括号是与之对应的，则删除并判断是否为空
                    if(stack.pop()=='['){
                        if(stack.isEmpty()){
                            return true;
                        }
                    }else{
                        return false;
                    }
                }
                if(bracket[i]=='}'){
                    //如果栈顶的括号是与之对应的，则删除并判断是否为空
                    if(stack.pop()=='{'){
                        if(stack.isEmpty()){
                            return true;
                        }
                    }else{
                        return false;
                    }
                }
            }
            i++;
        }
    }
st="({(}){9088}()";
console.log(checkBracket(st));