const numberButtons=document.querySelectorAll('.button');
const current=document.getElementById('current');
const backspace=document.getElementById('backspase');
const allClear=document.getElementById('all-clear')

 

///random pin genetator function
function generatePinButton(){
    function random(){
        const random=Math.ceil(Math.random()*9999)
        if(random > 999){
        return random;
        }else{
        return random=4329;
        }
    }
    const result=random();
    document.getElementById('pinGenerateButton').addEventListener('click',()=>{
        document.getElementById('randomPin').value=random();
    })
}
///calculator pin generator function
function calculatorPinTyping(){
    for(let i=0; i<numberButtons.length; i++){
        numberButtons[i].addEventListener('click',(event)=>{
            current.innerHTML+=event.target.innerHTML;
        })
    }
     
}
///input value clear function
function inputClear(){
    allClear.addEventListener('click',()=>{
        current.innerHTML='';
    })
}
///input value backspase function
backspace.addEventListener('click',()=>{
      var currentValue=current.innerHTML;
      currentValueSlice=currentValue.slice(0,currentValue.length-1);
      current.innerHTML=currentValueSlice;
})
///Submit button 
const submitButton=document.getElementById('submit');
submitButton.addEventListener('click',()=>{
    var randomNumber=document.getElementById('randomPin').value;
    var typingNumber=document.getElementById('current').innerHTML;
    
    if(randomNumber==''&&typingNumber==''){
        alert('Your input is emty !')
    }else if(randomNumber===typingNumber){
        document.getElementById('success').style.display='inline'
        document.getElementById('fail').style.display='none'
    }else if(randomNumber !==typingNumber){
        document.getElementById('fail').style.display='inline'
        document.getElementById('success').style.display='none'
        var countNumber=document.getElementById('try');
        var count=document.getElementById('try').innerHTML;
        var result=count-1;
        if(result <= 0){
            countNumber.innerHTML=0;
            document.getElementById('left').innerHTML='Refresh this page and try again'
        }else{
            countNumber.innerHTML=result;
        }
    }
        
})

 


generatePinButton();
calculatorPinTyping();
inputClear();
backspace();
 