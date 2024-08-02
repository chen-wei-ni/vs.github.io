// -- 獎金跳動 -- //
// let ar0 = 1023183.2; //原本金額
// let ar = 1033200.55; //新金額
// anime({
//     targets: ".bonus",
//     innerHTML: [ar0, ar],
//     easing: 'steps(35)',
//     duration: 2500,
//     round: 20,
// });

// let pz0 = 1622300; //原本金額
// let pz1 = 2660001.66; //新金額
// anime({
//     targets: ".teamA h1",
//     innerHTML: [pz0, pz1],
//     easing: "steps(35)",
//     duration: 2000,
//     round: 20,
// });
// let aw0 = 1102250.22; //原本金額
// let aw1 = 1200008.66; //新金額
// anime({
//     targets: ".teamB h1",
//     innerHTML: [aw0, aw1],
//     easing: "steps(35)",
//     duration: 2000,
//     round: 20,
// });
const bonusContainer = document.querySelector(".bonus");
const numberContainer = document.querySelectorAll('.box h1');

const bonus = { startNum: 21000, currentNum: 21000, endNum: 21005.57 };
const numbers = [
    { startNum: 100.00, currentNum: 100.00, endNum: 105.85 },
    { startNum: 100.00, currentNum: 100.00, endNum: 102.20 }
];

// 調整 duration，使動畫變慢
let startTime = Date.now(); // 開始時間
const duration = 4000; // 每個數字變化的時間

let animationStart = false;
let animationStartB = false;

// 使用更小的步長來使數字變化得更慢
const step = 0.001; // 每次增加的步長

function addUp() {
    let now = Date.now();
    let elapsed = now - startTime;

    // 檢查數字是否需要更新
    animationStart = numbers.some(num => num.currentNum < num.endNum);
    animationStartB = bonus.currentNum < bonus.endNum;

    numberContainer.forEach((item, i) => {
        if (numbers[i].currentNum < numbers[i].endNum) {
            let progress = (elapsed / duration) * step;
            numbers[i].currentNum = Math.min(numbers[i].endNum, numbers[i].currentNum + progress);
            item.textContent = numbers[i].currentNum.toFixed(2);
        }
    });

    if (bonus.currentNum < bonus.endNum) {
        let progress = (elapsed / duration) * step;
        bonus.currentNum = Math.min(bonus.endNum, bonus.currentNum + progress);
        bonusContainer.textContent = bonus.currentNum.toFixed(2);
    }

    if (animationStart || animationStartB) {
        requestAnimationFrame(addUp);
    }
}

addUp();

setInterval(() => {
    if (!animationStart && !animationStartB) {
        numbers.forEach(num => {
            num.currentNum = num.startNum;
        });
        bonus.currentNum = bonus.startNum;
        startTime = Date.now(); // 重置開始時間
        addUp();
    }
}, 6000);
