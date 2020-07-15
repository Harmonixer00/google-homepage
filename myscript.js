function myFunction() {
    var str = document.getElementById("js").innerHTML; 
    var txt = str.replace("lucky","well Done");
    document.getElementById("js").innerHTML = txt;
  }