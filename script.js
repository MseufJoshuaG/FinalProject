function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    
    for(i = 0; i < ele.length; i++) {
        
        if(ele[i].type="radio") {
        
            if(ele[i].checked)
                document.getElementById("result").innerHTML
                        += ele[i].name + "<h1> "
                        + ele[i].value + " ";
   
        }
    }
}