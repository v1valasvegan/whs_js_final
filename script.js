const buttonMenu = document.querySelector('.button_menu');
const buttonTable = document.querySelector('.button_table');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const hardGame = document.querySelector('.section_hard');
const mediumGame = document.querySelector('.section_medium');
const easyGame = document.querySelector('.section_easy');
const cards = document.querySelectorAll('.card');
const easyCards = document.querySelectorAll('.easy')
const mediumCards = document.querySelectorAll('.medium');
const hardCards = document.querySelectorAll('.hard');
const menu = document.querySelector('.menu');
const table = document.querySelector('.table');
const tableSection = document.querySelectorAll('.table_section')
let bugNumber;
function showCards() {
    if(easy.checked) {
        easyGame.classList.toggle('hidden');
    } else if(medium.checked) {
        mediumGame.classList.toggle('hidden');
    } else if(hard.checked) {
        hardGame.classList.toggle('hidden');
    }
};
function loadTable() {
    menu.classList.toggle('hidden', true);
    table.classList.toggle('hidden', false);
};
function loadMenu() {
    menu.classList.toggle('hidden', false);
    table.classList.toggle('hidden', true);
}
function setBugCard() {
    if(easy.checked) {
        bugNumber = Math.floor(Math.random() * 3);
        easyCards[bugNumber].classList.add('bug');
    } else if(medium.checked) {
        bugNumber = Math.floor(Math.random() * 6);
        mediumCards[bugNumber].classList.add('bug');
    } else if(hard.checked) {
        bugNumber = Math.floor(Math.random() * 10);
        hardCards[bugNumber].classList.add('bug');
    }
};
function turnCard() {
    this.classList.toggle('card_reverse');
    cards.forEach(function(item) {
        item.addEventListener('click', loadNewGame);
        item.removeEventListener('click', turnCard);

    })
};
function reset() {
    cards.forEach(function(item) {
    item.classList.add('hidden');
    item.classList.remove('bug');
    item.classList.remove('card_reverse');
    item.removeEventListener('click', turnCard);
    item.removeEventListener('click', loadNewGame);
    setTimeout(() =>item.classList.remove('hidden'), 200);
    });
    tableSection.forEach(item => item.classList.add('hidden'));

}
function loadNewGame() {
    reset();
    loadTable();
    showCards();
    setBugCard();
    cards.forEach(function(item) {
        item.addEventListener('click', turnCard);
        item.removeEventListener('click', loadMenu);
    })
};
buttonMenu.addEventListener('click', loadNewGame);
buttonMenu.addEventListener('click', loadTable)
buttonTable.addEventListener('click', loadMenu);
