'use strict';

const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const checkForm = input => {
    input.forEach(el => {
        if(el.value === '') {
            console.log('error');
        } else {
            console.log('ok');
        }
    })
}

//argument INPUT z funkcji "chechkForm" przechowuje tablicę z naszymi inputami
//argument El odnosi się do każdej zmiennej, którą umieściliśmy w tablicy

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    chechForm([usename, pass, pass2, email])
})



clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [usename, pass, pass2, email].forEach(el => {
        el.value = '';
    })

})

