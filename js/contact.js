function validate() {
    var fn = document.getElementById("fname").value;
    
    if (fn != "David" && fn != "Hayes" && fn != "Jeff" && fn != "Leigh" )
    alert("Name not valid: " + fn);
    else // name was accepted
    {
       console.log("Hello");
        document.getElementById("welcome").textContent="Welcome " +fn;
         alert("Welcome : " + fn);
    }
  }