const quiz = [
{
    question:'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers:[
        'スーパーファミコン',
        'プレイステーション',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
},{
    question:'マラドーナ監督が神の手と呼んだ人の手は誰でしょう？',
    answers:[
      'メッシ',
      'スアレス',
      'ルイスファビアーノ',
      'ビジャ'
    ],
    correct:'ルイスファビアーノ'
},{
    question:'日本代表で最も長く背番号1番をキープしたのは誰でしょう？',
    answers:[
      '川口',
      '楢崎',
      '川島',
      '松永'
    ],
    correct:'楢崎'
  }
  ];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択枠を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
         } else {
        window.alert('不正解！');
         }

quizIndex++;

if(quizIndex < quizLength){
 //問題数がまだあればこちらを実行
 setupQuiz();
} else{
//問題数がもうなければこちらを実行
window.alert('終了あなたの正解数は' + score + '/' + quizLength + 'です！');
  }

};

//ボタンをクリックしたら製誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
        });
    handlerIndex++;
}
