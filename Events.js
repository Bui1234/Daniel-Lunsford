x=document.querySelector('.bar');
x.addEventListener('click',function(){
    console.log("HELLO WORD");
    document.querySelector('.container').classList.toggle('clickcontainer');
})