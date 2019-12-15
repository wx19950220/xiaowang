var sf1 = localStorage.getItem("sf");
var sf = JSON.parse(sf1);
var btn = document.getElementsByClassName("sr")
var show = document.getElementsByClassName("show-id")
var which = document.getElementsByClassName("whichid")
var smsf = document.getElementsByClassName("whichsf")
var everyday = JSON.parse(localStorage.getItem('ztsz'))
var dropdown = document.getElementsByClassName("m-eveday")
var dropcontent=document.getElementsByClassName("day-content")
var whichday=document.getElementsByClassName("day-style")
for (let i = 0; i < 9; i++) {
    dropdown[i].getElementsByClassName("sr")[1].onclick = function () {
        alert('不能这样玩游戏')
    }
    dropdown[i].getElementsByClassName("sr")[2].onclick = function () {
        alert('不能这样玩游戏')
    }
    dropdown[i].getElementsByClassName("sr")[3].onclick = function () {
        alert('不能这样玩游戏')
    }
}

//显示我们的死亡状态 循环状态已完成
for (let i = 1; i < 18; i++) {
    if (everyday.length == i) {
        for (a = 0; a < i; a++) {
            show[a].style = "display:block"
            which[a].innerHTML = everyday[a]
            smsf[a].innerHTML = sf[everyday[a] - 1]
        }
    }
}
//点击顺序判断第一天循环9天的这个顺序  需要循环9个状态
 for(let a=0;a<9;a++){
dropdown[a].getElementsByClassName("sr")[0].onclick=function(){
        localStorage.setItem("tschoose", 1)
        //    给前一页显示投票按钮的量
        localStorage.removeItem("bj")
        // 移除后显示投票按钮
        localStorage.removeItem("rrr")
        //移除后我们点击能出现小刀下标
        localStorage.setItem("djsx", a)
        window.location.href = "task7b.html"
    }   
if (localStorage.getItem("djsx") == a) {
    dropdown[a].getElementsByClassName("sr")[1].onclick = function () {
        alert("亡灵发言")
        dropdown[a].getElementsByClassName("sr")[1].style.backgroundColor = "gray"
        if (dropdown[a].getElementsByClassName("sr")[1].style.backgroundColor =="gray") {
            dropdown[a].getElementsByClassName("sr")[1].onclick = function () {
                alert("不能这样玩游戏")
            }
        }
        localStorage.setItem("djsx", a+0.5)
        if (localStorage.getItem("djsx") == a+0.5) {
            dropdown[a].getElementsByClassName("sr")[2].onclick = function () {
                alert("玩家发言")
                dropdown[a].getElementsByClassName("sr")[2].style.backgroundColor = "gray"
                if (dropdown[a].getElementsByClassName("sr")[2].style.backgroundColor == "gray") {
                   dropdown[a].getElementsByClassName("sr")[2].onclick = function () {
                        alert("不能这样玩游戏")
                    }
                }
                dropdown[a].getElementsByClassName("sr")[3].onclick = function () {
                    window.location.href = "task7b.html"
                    
                }
            }
        }
    }
    dropdown[a].getElementsByClassName("sr")[2].onclick = function () {
        alert('不能这样玩游戏')
    }
    dropdown[a].getElementsByClassName("sr")[3].onclick = function () {
        alert("不能这样玩游戏")
    }
}
}
//颜色变换 能循环状态
for(let i=0;i<35;i++){
    if(btn[i].style.backgroundColor=="gray")
    {
        btn[i].onclick=function(){
            alert("不能这样玩游戏")
        } 
    }
}
//跳转之后的颜色变化
if (everyday.length == 0) {
    dropdown[0].getElementsByClassName("day-content")[0].style.display="block"
    for(i=0;i<32;i++){
        btn[i].style.backgroundColor="#24a7c6"
    }
   
 }
 if(everyday.length==1){
  btn[0].style.backgroundColor="gray"
  dropdown[0].getElementsByClassName("day-content")[0].style.display="block"
 }

//数组长度为基数偶数时变红出现
for (let i = 0; i < 18; i++) {
    if (everyday.length == i + 1) {
        if(everyday.length % 2 == 0){
            for (a = 0; a < (i+1)/2; a++) {
                dropdown[a].getElementsByClassName("sr")[0].style.backgroundColor = "gray"
                dropdown[a].getElementsByClassName("sr")[1].style.backgroundColor = "gray"
                dropdown[a].getElementsByClassName("sr")[2].style.backgroundColor = "gray"
                dropdown[a].getElementsByClassName("sr")[3].style.backgroundColor = "gray"
            }
        }
        else{
            for(b = 0; b < (i+1)/2-1; b++){
                dropdown[b].getElementsByClassName("sr")[0].style.backgroundColor = "gray"
                dropdown[b].getElementsByClassName("sr")[1].style.backgroundColor = "gray"
                dropdown[b].getElementsByClassName("sr")[2].style.backgroundColor = "gray"
                dropdown[b].getElementsByClassName("sr")[3].style.backgroundColor = "gray"
                dropdown[b+1].getElementsByClassName("sr")[0].style.backgroundColor = "gray"

            }
           
        }
    }
}
//数组长度为偶数显示它的下一天 循环状态
var po=everyday.length/2;
if(everyday.length%2==0&&everyday.length!=0){
    for(let a=0;a<po+1;a++){
       dropdown[a].style="display:block"
    }
     dropcontent[po].style="display:block"
     dropdown[po].getElementsByClassName("day-content")[0].style.display="block"
}
else{
    for(let a=1;a<po;a++){
    dropdown[a].style="display:block"
    dropdown[a].getElementsByClassName("day-content")[0].style.display="block"
    dropdown[a-1].getElementsByClassName("day-content")[0].style.display="none"
 }
}
 //变红就显示
 for(let i=0;i<35;i++){
 if(btn[i].style.backgroundColor=="gray"){
btn[i].onclick=function(){
    alert("不能这样玩游戏")
   
}
}
}
for(let i=0;i<9;i++){
        whichday[i].onclick=function(){
            if( dropdown[i].getElementsByClassName("day-content")[0].style.display=="none")
            {dropdown[i].getElementsByClassName("day-content")[0].style.display="block"}
            else{dropdown[i].getElementsByClassName("day-content")[0].style.display="none"}
        }   
}
//结束按钮与法官按钮
var btn_footer=document.getElementsByClassName("click-jump")
var btn_header_bac=document.getElementsByClassName("m-header-bac")
btn_footer[0].onclick=function(){
var con;
con=confirm("是否结束游戏？"); //在页面上弹出对话框
if(con==true){window.location.href=("玩家配比.html")}
}
btn_footer[1].onclick=function(){
    window.location.href=("task7b.html")
    localStorage.setItem("bac-btn",1)
}
btn_header_bac[0].onclick=function(){
    window.location.href=("task7b.html")
    localStorage.setItem("bac-btn",1)
}
var o=0;
var syrs=localStorage.getItem("ckrs")
var pmsw=localStorage.getItem("pmrs")
//杀死的杀手人数
for(let i=0;i<everyday.length;i++)
{
    if(sf[everyday[i]-1]=="杀手"){
    o++;
    syrs=syrs-1
    }
    if(sf[everyday[i]-1]=="平民"){
    pmsw=pmsw-1
    }
}
//平民胜利
if(o==localStorage.getItem("ckrs")){
    localStorage.setItem("pmsl",1)
    window.location.href=("task7c.html")
}
console.log(o)
console.log(syrs)
console.log(pmsw)
//杀手胜利
if(syrs==pmsw){
    localStorage.setItem("sssl",1)
    window.location.href=("task7c.html")
}