var tol = localStorage.getItem("firstname");
var shengfen2 = localStorage.getItem("sfname")
var shengfen = JSON.parse(shengfen2);
console.log(shengfen)

var bh1 = []
for (i = 0; i < tol; i++) {
   bh1[i] = i + 1
}
console.log(bh1)
document.getElementById("bianhao").innerHTML = bh1[0]
document.getElementById("bq1").innerHTML = bh1[0]
document.getElementById("bq2").innerHTML = bh1[0]
document.getElementById("bq3").innerHTML = bh1[1]


   var a = 0;
   var btn1 = document.getElementById("abc")
   var sfxh=[];
   btn1.onclick = function dj() {
      a++;
      console.log(a)
      if (a < tol * 2) {
         if (a % 2 == 0) {
            document.getElementById("anniu1").style = "display:block"
            document.getElementById("anniu2").style = "display:none"
            document.getElementById("fp1").style = "display:block"
            document.getElementById("fp2").style = "display:none"
            document.getElementById("faguan").style = "display:none"
            document.getElementById("bianhao").innerHTML = a / 2 + 1;
            document.getElementById("bq1").innerHTML = a / 2 + 1;
            document.getElementById("bq2").innerHTML = a / 2 + 1;
            document.getElementById("bq3").innerHTML = a / 2 + 2;
         } else {
            document.getElementById("anniu1").style = "display:none"
            document.getElementById("anniu2").style = "display:block"
            document.getElementById("fp1").style = "display:none"
            document.getElementById("fp2").style = "display:block"
            document.getElementById("faguan").style = "display:none"
            l = Math.round(Math.random() * (tol-(a+1)/2))
            document.getElementById("sfvar").innerHTML = shengfen[l]
            console.log(shengfen[l])
           sfxh.push(shengfen[l]);
            console.log(sfxh)
            shengfen.splice(l, 1)
            console.log(shengfen)
            let idsx=JSON.stringify(sfxh)
            console.log(idsx)
            localStorage.setItem("sf",idsx);
            if(a==tol*2-1){
               document.getElementById("anniu2").style = "display:none"
               document.getElementById("faguan").style = "display:block"
               btn1.onclick= function(){
                  localStorage.setItem("rrr",1)
                  var killstate=[]
                  localStorage.setItem('ztsz',JSON.stringify(killstate))
                  localStorage.setItem("swss",0)
                  window.location.href = "task7b.html";
               } 
            }
         }
         
      }

   }


