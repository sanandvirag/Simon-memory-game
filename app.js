let para = document.querySelector("p");
let color_btn = document.querySelectorAll(".box");
let high = document.querySelector("#high");

let game_seq = [];
let user_seq = [];
let level = 0;
let started = false;
let highest_score = 0;

document.addEventListener("keypress" , function(){
  if(started == false){
    started = true;
    levelUP();
  }
});

function blink(btn){
  btn.classList.add("blink");
  setTimeout(function(){
    btn.classList.remove("blink");
  },200);
}

function levelUP(){
  user_seq = [];
  level++;
  para.innerText = `LEVEL - ${level}`;
  let n = Math.floor(Math.random() * 3);
  blink(color_btn[n]);
  game_seq.push(color_btn[n].id);
}

function glow(btn){
  btn.classList.add("glow");
  setTimeout(function(){
    btn.classList.remove("glow")
  },100);
}

function check_seq(idx){
  if(user_seq[idx] === game_seq[idx]){
    if(game_seq.length == user_seq.length){
      setTimeout(levelUP , 1000);
    }
  }
  else{
    para.innerText = `GAME OVER!! Your Score is: ${level-1} Press any key to restart..`;
    document.querySelector("body").style.backgroundColor = "red";
    setInterval(function(){
      document.querySelector("body").style.backgroundColor = "#0d1117";
    },200);
    restart();
  }
}
function btn_pressed(){
  if(game_seq.length >= 1){
    let btn = this;
    glow(btn);
    user_seq.push(btn.id);
    check_seq(user_seq.length - 1);
  }
}
for(btn of color_btn){
  btn.addEventListener("click" , btn_pressed);
}

function restart(){
  if(level-1 > highest_score){
    high.innerHTML = `Highest Score: ${level-1}`;
  }
  game_seq = [];
  user_seq = [];
  level = 0;
  started = false;
}






