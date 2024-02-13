


function fact(){
    var b = parseInt(document.getElementById("id").value);
  
    if (isNaN(b) || b == 0) {
      alert("Please Enter Valid value");
    }
  
    var a = 1;
    for (let i = 1; i <= b; i++) {
     a = a * i;
    }
  
    document.getElementById("num").innerHTML = `The Factorial of ${b} is : ${a}`;
  };