
let score;
let total = 0;
let win = document.getElementById("win")
let roll = document.getElementById("roll")
let tot = document.getElementById("total")
let sco =document.getElementById("scor");
let image1 =document.getElementById("image1") ;

  const element = document.getElementById("roll");
element.addEventListener("click", myFunction);
const start = document.getElementById("start");
start.addEventListener("click", myFunction1);

image1.src = "image/start.png";
sco.innerHTML =`YOUR SCORE: 0`;
    tot.innerHTML = `YOUR TOTAL: 0`;
function myFunction() {
    win.innerHTML = 'ROLL AGAIN';
    roll.style.marginTop="3px"
    roll.style.marginBottom="3px"
    score =  Math.floor(Math.random() * 6) + 1;
    image1.style.visibility ="visible";
    dice();
    sco.innerHTML =`YOUR SCORE: ${score}`;
    console.log(score);
   
    total += score;
    console.log(total);
   tot.innerHTML = `YOUR TOTAL: ${total}`;


   if(score < 2 && total < 2){
    score = 0;
    total = 0;
    win.innerHTML = 'YOU LOOSE';
    roll.style.visibility =" hidden";
    start.style.visibility ="visible";
   }
    else if ( total > 20){
        score = 0;
        total = 0;
        win.innerHTML = 'YOU WIN';
        roll.style.visibility =" hidden";
       start.style.visibility ="visible";
       //image1.style.visibility =" hidden";
       image1.src = "image/win.png";
    }
   
}
function myFunction1() {

    win.innerHTML = 'START AGAIN';
    sco.innerHTML =`YOUR SCORE IS 0`;
    tot.innerHTML = `YOUR TOTAL IS 0`;

    score = 0;
    total = 0;
    win.innerHTML = '';
    start.style.visibility ="hidden";
    roll.style.visibility ="visible";
    image1.src = "image/start.png";
    score = 0;
        total = 0;
}

function dice(){
    if(score== 1  ){
        image1.src = "image/one.png";
           }
        else  if(score== 2 ){
            image1.src = "image/two.png";
               }
               else    if(score== 3  ){
                image1.src = "image/three.png";
                   }
                   else    if(score == 4 ){
                    image1.src = "image/four.png";
                       }
                       else  if(score == 5 ){
                        image1.src = "image/five.png";
                           }
                           else   {
                            image1.src = "image/six.png";
                               }
}

