
//function to generate a random number
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


let horse_count = getRndInteger(12, 1500000);

let horse_count_commas = numberWithCommas(horse_count)

let item = document.createElement('div');
item.classList.add('item');
item.innerHTML = `<div class="textStyle"><p>${horse_count_commas}. <br> There are ${horse_count_commas} horses.</p></div>`;
document.body.appendChild(item);
