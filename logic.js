let inputbox = document.querySelector("#inputbox");
let buttons = document.querySelectorAll(".box");

buttons.forEach((button)=>{
button.addEventListener("click",()=>{
    let value=button.innerText;
    if(value==="AC"){
        inputbox.value="";
    }
    else if(value==="DEL"){
        inputbox.value=inputbox.value.slice(0,-1);
    }
    else if(value==="="){
        try{
            inputbox.value=eval(inputbox.value);
        }catch{
            inputbox.value="error";
        }
    }
    else{
        inputbox.value=inputbox.value+value;
    }
});
});