'use strict';
const modal=document.querySelector('.modal');
const btnclose=document.querySelector('.close-btn');
const btnrule=document.querySelector('.rules-btn');
const btnsingle=document.querySelector('.btn');
const easy=document.querySelector('.btn1');
const hard=document.querySelector('.btn2');
modal.classList.add('hidden');
easy.classList.add('hidden');
hard.classList.add('hidden');


btnrule.addEventListener('click',function(){
    modal.classList.remove('hidden');
})

btnclose.addEventListener('click',function(){
    modal.classList.add('hidden');
})
btnsingle.addEventListener('click',function(){
    easy.classList.remove('hidden');
    hard.classList.remove('hidden');
})
