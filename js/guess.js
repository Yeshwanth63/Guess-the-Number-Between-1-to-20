let buttons = document.getElementsByClassName('btn');
let box = document.querySelector('.textArea');
let random = Math.floor(Math.random() * 20) + 1;

//console.log(random);
let count = 20;
let highscore=0;
function countings(){
    count--;
    document.querySelector('#scorecard').innerHTML = count;

}

let again = document.getElementById('retry');


//again btn logic

 again.addEventListener('click', function(){
    random = Math.floor(Math.random() * 20) + 1;
   // console.log(random);
    count=20;
    document.querySelector('#scorecard').innerHTML=count;
   document.querySelector('.textArea').value='';
   document.body.style.backgroundColor='black'
   document.getElementById('output').innerHTML='';
  //  document.querySelector('.scorecard').innerHTML=count++;
    document.querySelector('#question').innerHTML = '<i class="fa-regular fa-question fa-5x"></i>';
    document.querySelector('#question').style.fontSize='20px';   
})

//game logic

buttons[0].addEventListener('click', function () {
    //console.log(random);
    let userInput = parseInt(box.value);

    if (random === userInput) {
        document.getElementById('output').innerHTML = 'Correct Number'
        document.querySelector('#question').innerHTML = random;
        if(count>highscore){
            highscore=count;
            document.querySelector('#twenty').innerHTML= highscore-1;
        }
        document.querySelector('#question').style.fontSize = '90px';
        document.body.style.backgroundColor = 'green'

    } else if (random > userInput) {
        document.getElementById('output').innerHTML = 'Too Low';
        document.body.style.backgroundColor = 'grey';


    } else {
        document.getElementById('output').innerHTML = 'Too High';
        document.body.style.backgroundColor = 'red';
    }
    countings();
})