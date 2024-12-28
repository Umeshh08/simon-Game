let userseq =[];
let gameseq = [];
let buttons = ["red","purple","green","yellow"];

let started = false;
let level = 0;
h6 = document.querySelector("h6");
let highscore = 0;

let h = document.querySelector("h5");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelup();
    }
});

function levelup(){
    userseq = []
    level++;

    h.innerText = `level ${level}`;

    let randinx = Math.floor(Math.random()*3);
    let randcolor = buttons[randinx];
    let randbtn  = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    gameflash(randbtn);
    


}

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250)
}

function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250)


 }

 function checkseq(idx){
    // let idx = level-1;
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length ){
            setTimeout(levelup,1000);
        }     
    }else{
        h.innerHTML = `<span>GAME OVER</span> press any key start! <br> Your score is <span style="color:green";>${level}</span> !`;
        let body = document.querySelector("body");
         
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        },400)
        resetgame();


    }
    
 }

function btnpress(){
    let btn = this;
    userbtnflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkseq(userseq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click", btnpress);
}

function resetgame(){
    started = false;
    if(level>highscore){
        highscore = level;
    }
 h6.innerText = `Highscore: ${highscore}`
    level = 0;

    userseq = [];
    gameseq = [];

}
document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });

