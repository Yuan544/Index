const paragraph = document.getElementById('paragraph');
const imgUzaoji = document.getElementById('imgUzaoji');
const imgGu = document.getElementById('imgGu');
const imgChoki = document.getElementById('imgChoki');
const imgPa = document.getElementById('imgPa');
const reStartButton = document.getElementById('reStart');
const scoreButton = document.getElementById('score');
const resultText = document.getElementById('result');
const gameArea = document.getElementById('gameArea');

let endFlag = false;
let win = 0;
let lose = 0;
let draw = 0;
let player = [];
let Uzaoji = [];
let result = [];
let handArray = ['グー', 'チョキ', 'パー'];
let winOrLose = ['勝ち', '負け', 'あいこ'];

function game(num){

    if(endFlag){
        return;
      }
      endFlag=true;
    
    paragraph.innerText = 'ポォぉぉん';

    player.push(num);

    if(num===0){
        imgChoki.classList.add('hide');
        imgPa.classList.add('hide');
    }else if(num===1){
        imgGu.classList.add('hide');
        imgPa.classList.add('hide'); 
    }else{
        imgChoki.classList.add('hide');
        imgGu.classList.add('hide');   
    }

    const randomNum = Math.floor(Math.random()*3);
    Uzaoji.push(randomNum);
    
    if(randomNum === 0){
        imgUzaoji.src = 'img/グーおじ２.png';
    }else if(randomNum === 1){
        imgUzaoji.src = 'img/バツおじ２.png';
    }else if(randomNum === 2){
        imgUzaoji.src = 'img/パーおじ２.png';
    }

    if(num === randomNum){
        resultText.innerText = 'きみぃ、0.1秒遅かったよね？それ不正だからな？次したら警察沙汰になるからな？まぁ僕ちんは優しいから今回は見逃すよ、次から気をつけろよ、この敗北者が！';
        draw++;
        result.push(2);
    }else if(num === 0 && randomNum === 1){
        resultText.innerText = 'チッ勝つのかよ、でも指の数ではグーよりチョキの方が多いからチョキの勝ち';
        win++;
        result.push(0);
    }else if(num === 1 && randomNum === 2){
        resultText.innerText = 'でもこっちが固い鉄の板だったらこっちの勝ちやから実質パーの勝ち';
        win++;
        result.push(0);
    }else if(num === 2 && randomNum === 0){
        resultText.innerText = '紙と石じゃ石の方が強いからグーの勝ち〜';
        win++;
        result.push(0);
    }else{
        resultText.innerText = '僕ちんに負けるとかダサすぎぃぃぃぃぃぃぃ⤴︎（ビブラート）、10年修行してから出直してきな笑🤗';
        lose++;
        result.push(1);
    }
    
    reStartButton.classList.remove('hide');
    scoreButton.classList.remove('hide');
}

reStartButton.onclick = () => {
    paragraph.innerText = '最初はグー！って思うじゃん、けどそれってあなたの思いこみですよね？はい、じゃんけん・・・';

    gameArea.classList.remove('hide');

    imgUzaoji.src = 'img/Uzaoji.png';
    imgGu.classList.remove('hide');
    imgChoki.classList.remove('hide');
    imgPa.classList.remove('hide');

    resultText.innerText = '';

    reStartButton.classList.add('hide');
    scoreButton.classList.add('hide');

    endFlag=false;
}

scoreButton.onclick = () => {
    let text = (win + lose + draw) + '戦: ';
    text += win + '勝 ' + lose + '敗 ' + draw + '分\n\n';
    for(let i=0;i<result.length;i++){
        text += i+1+ '戦目 ' + winOrLose[result[i]];
        text += ' [あなたの手：' + handArray[player[i]];
        text += ', 相手の手：' + handArray[Uzaoji[i]] + ']\n';
    }
    paragraph.innerText = text;

    gameArea.classList.add('hide');
    scoreButton.classList.add('hide');
}
