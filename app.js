//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//logic for accessing each button
btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const btnEvent = e.currentTarget.classList;
        //specify how each button behaves according the class found in the classlist when a button is clicked
        if(btnEvent.contains('decrease')){
           count--;
        }
        else if(btnEvent.contains('increase')){
           count++;
        }
        else{
           count = 0;
        }
        value.textContent = count;
        //change the color to denote the different counter changes
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
    });
});