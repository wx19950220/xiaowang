var sf1 = localStorage.getItem("sf");
var sf = JSON.parse(sf1);
console.log(sf)
var tol = localStorage.getItem("firstname");
console.log(tol)
var tolsz = []
var fgsz = document.getElementsByClassName('content')
var sffg=document.getElementsByClassName('content1')
var b = Array.from(fgsz);
var c = b.slice(-(18 - tol))
var killzt = JSON.parse(localStorage.getItem('ztsz'))
var choose1 = document.getElementsByClassName("content1")
console.log(b.slice(-(18 - tol)))
//for循环为每位编号
for (i = 0; i < tol; i++) {
    tolsz[i] = i + 1
}
console.log(tolsz)
//for循环每个方格赋予身份
for (i = 0; i < tol; i++) {
    document.getElementById(tolsz[i]).innerHTML = sf[i]
}

//18个格子多出的清除
for (i = 0; i < (18 - tol); i++) {
    c[i].style = "display:none"
}
//开始游戏按钮
var btn4 = document.getElementById("ksyx")
btn4.onclick = function () {
    var xw = 1;
    localStorage.setItem("bj", xw)
    console.log(localStorage.getItem("bj"))
    window.location.href = "task4kssr.html";
}
//报幕页面第一夜限制哪个按钮出现
var p = localStorage.getItem("tschoose")
if (p == 1) {
    document.getElementById("ksyx").style = "display:none"
    document.getElementById("ts").style = "display:block"
}
//点击哪个方格哪个方格出现小刀
for (var i = 0; i < 18; i++) {
    (function (i) {
        
        choose1[i].onclick = function () {
            document.getElementsByClassName("srbj")[i].style = "display:block";
            var quchu = []
            for (var a = 0; a < 18; a++) {
                quchu[a] = a;
            }
            quchu.splice(i, 1)
            for (var a = 0; a < 17; a++) {
                document.getElementsByClassName("srbj")[quchu[a]].style = "display:none";
            }
            localStorage.setItem("jihao", i + 1)
            console.log(localStorage.getItem("jihao"))
            if (localStorage.getItem("rrr") == 1) {
                for (i = 0; i < tol; i++) {
                    document.getElementsByClassName("srbj")[i].style = "display:none";
                }
            }
        }
    })(i)
}
//杀人投票的跳转
var btn5 = document.getElementById("ts");
btn5.onclick = function () {
  // 夜间不能选择杀手自己
    var clicjh = localStorage.getItem("jihao")
    if (killzt.length % 2 == 0 && sf[clicjh - 1] == "杀手") {
        alert("不能选择自己")
    } else {
        killzt.push(localStorage.getItem("jihao"))
        localStorage.setItem('ztsz', JSON.stringify(killzt))
        window.location.href = "task4kssr.html"
    }
}
//遍历一遍死亡状态
for(let i=0;i<killzt.length;i++){
sffg[killzt[i]-1].style.backgroundColor="#83b09a"
choose1[killzt[i]-1].onclick=function() {}
}
//法官日志返回按钮
if(localStorage.getItem("bac-btn")==1){
    document.getElementsByClassName("choose1")[0].style.display="none"
    document.getElementsByClassName("choose2")[0].style.display="block"
    document.getElementsByClassName("choose")[0].style.display="none"
    document.getElementsByClassName("choose2")[0].onclick=function(){
        window.location.href=("task4kssr.html")
        localStorage.removeItem("bac-btn")
    }
}
//判断什么时候结束游戏