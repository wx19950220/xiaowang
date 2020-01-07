function getColor() {
    for (i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].style.backgroundColor = "#FFCC00";
    }
    var threeran = [];
    for (l = 1; l < 4; l++) {
      var str = "#";
      // 定义一个十六进制的值的数组
      var lzp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      // 遍历循环产生 6 个数
      for (var i = 0; i < 6; i++) {
        // 随机产生 0~15 的个索引数,然后根据该索引找到数组中对应的值,拼接到一起
        var lut = parseInt(Math.random() * 14);
        str = str + lzp[lut];
      }
      // 循环三次把三个"#xxxxxx"加到数组中
      threeran.push(str);
    }
    console.log(threeran)
    // 定一个长度位任何位数的顺序自然数数组
    let f = length => Array.from({
      length
    }).map((v, k) => k);
    var ninesz = f(9)
    var newbox = [];
    // 取三个0-8不同的随机数
    for (k = 0; k < 3; k++) {
      var ran = Math.round(Math.random() * (ninesz.length - 1));
      console.log(ran)
      newbox.push(ninesz[ran]);
      ninesz.splice(ran, 1);
    };
    console.log(newbox);
    // 确定随机的三个方格随机的三种颜色
    document.getElementsByTagName("div")[newbox[1]].style.backgroundColor = threeran[0];
    document.getElementsByTagName("div")[newbox[2]].style.backgroundColor = threeran[1];
    document.getElementsByTagName("div")[newbox[0]].style.backgroundColor = threeran[2];
  }
  // 定义按钮
  var btn = document.getElementsByTagName("button")[0];
  // 延时器的全局变量
  var time1;
  btn.onclick = function () {
    clearInterval(time1)
    time1 = setInterval(getColor, 1000)
  }
  var btn2 = document.getElementsByTagName("button")[1];
  btn2.onclick = function () {
    clearInterval(time1)
    for (i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].style.backgroundColor = "#FFCC00";
    }
  }