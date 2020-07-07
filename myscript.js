function myFunction() {
    var str = document.getElementById("js").innerHTML; 
    var txt = str.replace("lucky","Success");
    document.getElementById("js").innerHTML = txt;
  }