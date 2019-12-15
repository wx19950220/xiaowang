var p=document.getElementsByClassName("zhuijia")[0];
var lent=JSON.parse(localStorage.getItem("ztsz"))
var day=Math.ceil(lent.length/2)
var ksz=[]
var btn=document.getElementsByTagName("button")
var whichsf=JSON.parse(localStorage.getItem("sf"))
//平民胜利与杀手胜利的判断
if(localStorage.getItem("pmss")==1){
    document.getElementsByClassName("result1")[0].style.display="none"
    document.getElementsByClassName("result2")[0].style.display="block"
}
if(localStorage.getItem("sssl")==1){
    document.getElementsByClassName("result1")[0].style.display="block"
    document.getElementsByClassName("result2")[0].style.display="none"
}
//将每一天的字符串存入一个数组
for(i=1;i<day+1;i++){
    add="<div class='day'><div class='day1'>第"+ i+ "天<div class='time'>0小时07分</div></div><div class='content1'>晚上：<div class='nightkill-id'></div>号被杀手杀死，身份是<div class='nightkill-sf'></div><br><div class='baitian'>白天：<div class='daykill-id'></div>号被全民投票投死，身份是<div class='daykill-sf'></div></div></div></div>"
    ksz[i-1]=add
}
console.log(ksz)
//将数组中的每一项拼接起来
var tol="";
for(i=0;i<ksz.length;i++){
tol=tol+ksz[i]
}
 p.innerHTML=tol
 //重置按钮
btn[0].onclick=function () {
   window.location.href="玩家配比.html"
}
//每一天的显示内容 循环状态
for(let i=0;i<Math.ceil(lent.length/2);i++){
    document.getElementsByClassName("nightkill-id")[i].innerHTML=lent[2*i]
    document.getElementsByClassName("nightkill-sf")[i].innerHTML=whichsf[lent[2*i]-1]
    document.getElementsByClassName("daykill-id")[i].innerHTML=lent[2*i+1]
    document.getElementsByClassName("daykill-sf")[i].innerHTML=whichsf[lent[2*i+1]-1]
}
//夜晚结束游戏时需要把当天白天内容删除
if(lent.length%2==1){
    document.getElementsByClassName("baitian")[Math.ceil(lent.length/2)-1].style.display="none"
}