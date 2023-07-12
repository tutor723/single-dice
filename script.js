
let score;
let total = 0;
let win = document.getElementById("win")
let roll = document.getElementById("roll")
let tot = document.getElementById("total")

  const element = document.getElementById("roll");
element.addEventListener("click", myFunction);

function myFunction() {
   
    if(total >20)
    {
   
            win.innerHTML = 'CONGRATULATIONS! YOU WON';
            tot.innerHTML =0;
            //document.getElementById("score").innerHTML =score;
          
            roll.classList.add("display")
            //setTimeout( " roll.style.visibility = 'hidden'", 120000 );
score =0;
document.getElementById("score").innerHTML =score;
       // roll.style.visibility =" visible";
  
}
else{
    roll.classList.remove("display")
    score =  Math.floor(Math.random() * 6) + 1;
    document.getElementById("score").innerHTML =score;
    //roll.style.visibility =" visible";
    console.log(score);
    total += score;
    console.log(total);
   tot.innerHTML = total;
}


}


