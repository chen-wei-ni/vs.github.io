function startCountdown(duration) {
    let timer = duration;
    const countdownElement = document.getElementById("countdown");
    console.log(timer);

    const interval = setInterval(() => {
        days = Math.floor(timer / (24 * 3600));
        hours = Math.floor((timer % (24 * 3600)) / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        countdownElement.innerHTML = `
      ${days.toString().padStart(2, "0")}<span>d</span>
      ${hours.toString().padStart(2, "0")}:
      ${minutes.toString().padStart(2, "0")}: 
      ${Math.floor(seconds).toString().padStart(2, "0")}`;
        //"abc".padStart(10, "foo"); => "foofoofabc"

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "活動已結束";
            // document.querySelector(".timer").style.top = "-15px"
        }
    }, 1000);
}
var nowTime = Date.now() / 1000;
var oneDate = +new Date(2024, 7, 31, 16, 14, 15) / 1000; //8月31日
console.log(oneDate, nowTime)
// 設定倒數計時器時間（例如：1小時 = 3600秒）
const countdownTime = oneDate - nowTime; //間隔時間  // 30天 30 * 24 * 3600
startCountdown(countdownTime);