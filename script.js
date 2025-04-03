let display=document.getElementById('display');
let btns=document.querySelectorAll('#keys button');
function append(input){
    if(input==='='){
        try{
            display.textContent=eval(display.textContent)
        }
        catch(error){
            display.textContent='error'
        }
        

    }
    else if(input==='c'){
        display.textContent='';
    }
    else{
        display.textContent+=input;
    }
   
}
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>append(btn.value))
})


