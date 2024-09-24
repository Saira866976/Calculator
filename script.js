let input = document.querySelector("input");
let All_Btn = document.querySelectorAll("button");


let str = "";
let arr = Array.from(All_Btn);

// input.style.fontSize="32px";
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML=='='){
            str=eval(str);
            input.value=str;
        }
        else if(e.target.innerHTML=="AC"){
            str="";
            input.value="";
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(0,str.length-1);
            input.value=str;
        }
        else{
            str+=e.target.innerHTML;
            input.value=str;
        }

    })
})