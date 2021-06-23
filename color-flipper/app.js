const colors = ['green', 'red', 'blue', 'greenyellow', 'tomato','gold','aqua','silver','violet','indigo','lightblue', 'pink'];
// function change(){
//     let btn = document.getElementById('click');
//     let bg = document.getElementById('background');
//     if(bg.style.display != 'none')
//     {
//         bg.style.display  = 'none';
//     }
//     else{
//         bg.style.display = 'block';
//     }
// }

const btn = document.getElementById('click');
const color = document.querySelector('#show-color');

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


function getRandomNumber(){
    let num = Math.floor(Math.random()*colors.length);
    return num;
}