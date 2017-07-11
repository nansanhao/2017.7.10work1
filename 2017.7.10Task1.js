/**
 * Created by chj on 17-7-10.
 */

function calAve(inputArray) {
    var aveArray=new Array();
    var sum=0;
    for(var i in inputArray){
        sum=0;
        for(var j=1;j<inputArray[i].length;j++){
            sum+=Number(inputArray[i][j]);
        }
        aveArray[i]=sum/(inputArray[i].length-1);
    }
    return aveArray;
}
function calSum(inputArray) {
    var sumArray=new Array();
    var sum=0;
    for(var i in inputArray){
        sum=0;
        for(var j=1;j<inputArray[i].length;j++){
            sum+=Number(inputArray[i][j]);
        }
        sumArray[i]=sum;
    }
    return sumArray;
}
function calSumAve(sumArray) {
    var sum=0;
    var sumAve=0;
    for(var i in sumArray){
        sum+=sumArray[i];
    }
    sumAve=sum/sumArray.length;
    return sumAve;
}
function sortSumArray(sumArray) {
    var orderdSumArray=sumArray.sort();
    return orderdSumArray;
}
function calSumMid(orderdSumArray) {
    var sumMid=0;
    if(orderdSumArray.length%2==0){
        sumMid=(orderdSumArray[orderdSumArray.length/2]+orderdSumArray[(orderdSumArray.length/2)-1])/2
    }
    else{
        sumMid=orderdSumArray[(orderdSumArray.length-1)/2];
    }
    return sumMid;
}
function printScoresheet(inputArray,aveArray,sumArray,sumAve,sumMid) {
    console.log("成绩单");
    console.log("姓名|数学|语文|英语|编程|平均分|总分");
    console.log("=================================");
    for(var i=0;i<inputArray.length;i++){
        console.log(inputArray[i][0]+"|"+inputArray[i][1]+"|"+inputArray[i][2]+"|"+inputArray[i][3]+"|"+inputArray[i][4]+"|"+aveArray[i]+"|"+sumArray[i]);
    }
    console.log("=================================");
    console.log("全班总平均分： "+sumAve);
    console.log("全班总分中位数： "+sumMid);

}
var array=[["zhangsan","85","81","74","84"],["lisi",81,76,62,65],["wanger",82,92,67,99]];
var avearray=calAve(array);
var sumarray=calSum(array);
var sumarray2=calSum(array);
var sumave=calSumAve(sumarray);
var orderdsumaray=sortSumArray(sumarray);
var summid=calSumMid(orderdsumaray);
printScoresheet(array,avearray,sumarray2,sumave,summid);
