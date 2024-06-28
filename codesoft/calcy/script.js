let display=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button'); //all buttons are select to enter

let buttonsarray=Array.from(buttons);
let string ='';
buttonsarray.forEach(function(btn)//loop foreach
{
    // console.log(btn);// call
btn.addEventListener('click',function(event){
    if(event.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1);
        display.value=string;
    }
    else if(event.target.innerHTML=='AC'){
             string='';
             display.value= string;
        }else if(event.target.innerHTML=='='){
             string=eval(string);
             display.value=string;
        }else{
             string +=event.target.innerHTML;
             display.value=string;
    } 
});

})



