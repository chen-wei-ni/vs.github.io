var eventBtn = document.querySelector('.eventBtn button');
var bnArea = document.querySelector('.event')
var grid = document.querySelector('.grid');
var btns = document.querySelectorAll('.button');
eventBtn.addEventListener('click',showBn,false);
function showBn(){
    var content ='';
    this.classList.add("is-selectBn");
    grid.style.display="none";
    bnArea.style.display="block";
    for (i = 0; i < btns.length; i +=1) {
        btns[i].classList.remove("is-checked");
    }    
    content=`
    <div class="banner">
        <a  class="pc_bn" href="https://servicebooongo.com/bngevent/event?event=202209BH&lang=th&currency=MMK" target="_blank">
            <img  src="images/events/pc/bn_demo.jpg" alt="banner">
        </a>
        <a class="mb_bn" href="https://servicebooongo.com/bngevent/event?event=202209BH&lang=th&currency=MMK" target="_blank">
            <img src="images/events/mb/bn_demo_mb.jpg" alt="banner">
        </a>
    </div>
    <div class="banner">
        <a href="#" target="_blank" class="pc_bn">
            <img src="images/events/pc/bn_demo.jpg" alt="banner">
        </a>
        <a href="#" target="_blank" class="mb_bn">
            <img src="images/events/mb/bn_demo_mb.jpg" alt="banner">
        </a>
    </div>
    `
    bnArea.innerHTML=content;
}
for (i = 0; i < btns.length; i +=1) {
    btns[i].addEventListener('click', (e) => {
        grid.style.display="block";
        bnArea.style.display="none";
        eventBtn.classList.remove("is-selectBn");
    })
  }