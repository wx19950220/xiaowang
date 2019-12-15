var x;
var y;
var tol;
localStorage.clear();
document.getElementById("m-inputnum-inp").value=8

allPeople()
function allPeople() {
    var num = document.getElementsByTagName("input")[0];
    var btn=document.getElementsByClassName("jiahao")[0]
    var btn2=document.getElementsByClassName("jianhao")[0]
    btn.onclick=function bbb(){
    tol=parseInt(tol)+1;
    document.getElementById("m-inputnum-inp").value=tol
    allPeople()
    if(tol>17){btn.onclick=function(){}}
    document.getElementsByTagName("input")[0].value=tol
    show()
}
btn2.onclick=function aaa(){
    tol=parseInt(tol)-1;
    document.getElementById("m-inputnum-inp").value=tol
    allPeople()
    if(tol<5){btn2.onclick=function(){}}
    document.getElementsByTagName("input")[0].value=tol
    show()
}
    tol = document.getElementById("m-inputnum-inp").value;
    console.log(tol);
    if (tol <= 8) {
        x = 1;
        y = tol - 1;
      
    } else if (tol <= 11) {
        x = 2;
        y = tol - 2;
        
    } else if (tol <= 15) {
        x = 3;
        y = tol - 3;
       
    } else if (tol <= 18) {
          x = 4;
        y = tol - 4;
    }
    console.log(x)
    console.log(y)
    sz1 = [];
    for (i = 0; i <x; i++) {
        sz1[i] = "杀手"
    }
    console.log(sz1);
    sz2 = [];
    for (i = 0; i <y; i++) {
        sz2[i] = "平民"
    }
    console.log(sz2);
    if (tol >= 4) {
        if (tol <= 18) {
            document.getElementById('xsnum').innerHTML = x;
            document.getElementById('pmnum').innerHTML = y;
        }
    } else {
        document.getElementById('xsnum').innerHTML = "";
        document.getElementById('pmnum').innerHTML = "";
    }
    bh = []
    for (i = 0; i < tol; i++) {
        bh[i] = i + 1
    }
    console.log(bh)
   localStorage.setItem("ckrs",x)
   localStorage.setItem("pmrs",y)
    
    shengfen = sz1.concat(sz2);
    console.log(shengfen)
    shengfen1 =JSON.stringify(shengfen)
    console.log(shengfen1)
    localStorage.setItem("sfname",shengfen1);
    localStorage.setItem("lastname",bh);
    localStorage.setItem("firstname",tol);
    console.log(localStorage.sfname)
    document.getElementsByTagName("input")[0].value=tol
    r=(parseInt(num.value)-4)/14*100
    num.style.background='linear-gradient(to right, #059CFA, white ' + r + '%, white)'
}
var btn2 = document.getElementById("wjpbtz")
btn2.onclick = function () {
    if(tol<4||tol>18){
        alert("请输入正确的人数")
    }
    else{
        window.location.href = "task3.html";
    }
}
var num = document.getElementsByTagName("input")[0];
num.style.background='linear-gradient(to right, #059CFA, white 28.5%, white)'
function show(){
    tol = document.getElementById("m-inputnum-inp");
    tol.value = num.value;
    allPeople()
    r=(parseInt(num.value)-4)/14*100
    num.style.background='linear-gradient(to right, #059CFA, white ' + r + '%, white)'
}
