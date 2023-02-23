let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let tossBtn = document.querySelector("#toss-button");
let resetBtn = document.querySelector("#reset-button");


tossBtn.addEventListener("click", () => {
    let f = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(f){
        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }else{
        setTimeout(function() {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateCount, 3000);
    disableButton();
});

function updateCount(){
    document.querySelector("heads-counts").textContent = 'Heads ${heads}';
    document.querySelector("tails-counts").textContent = 'Tails ${tails}';
}

function disableButton(){
    tossBtn.disabled = true;
    setTimeout(function(){
        tossBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateCount();
})