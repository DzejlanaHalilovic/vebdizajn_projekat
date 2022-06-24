function validnoIme(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[a-z]{2,8}$/) === null) {
        obj.style.color = 'red';
        document.getElementById("nameerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("nameerror").innerHTML = "";
    return true;
  }
  

  

  function validanMejl(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i) === null) {
        obj.style.color = 'red';
        document.getElementById("mailerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("mailerror").innerHTML = "";
    return true;
  }
  
  
  function validnaPoruka(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-zA-Z0-9.!*(){}&^#@$/_?|><%+-,;:\s]{1,490}$/) === null){
        obj.style.color = 'red';
        document.getElementById("porerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("porerror").innerHTML = "";
    return true;
  }

  


let nav = document.getElementById("nav");
let navButton = document.getElementById("navButton");

function navResposnive(){
    if(nav.style["max-height"] == "80px") 
        nav.style["max-height"] = "100vh"
    else
        nav.style["max-height"] = "80px";
}

navButton.addEventListener("click", navResposnive);
