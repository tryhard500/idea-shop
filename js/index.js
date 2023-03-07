products = [
{
    title: 'Кактус',
    price: '200',
    img: 'assets/goods/1.jpg'
},
{
    title: 'Настенные часы',
    price: '1500',
    img: 'assets/goods/2.jpg'
},
{
    title: 'Телевизор',
    price: '25000',
    img: 'assets/goods/3.jpg'
},
{
    title: 'Блендер',
    price: '1200',
    img: 'assets/goods/4.jpg'
},
{
    title: 'Шторы',
    price: '3000',
    img: 'assets/goods/5.jpg'
},
{
    title: 'Комплект посуды',
    price: '5000',
    img: 'assets/goods/6.jpg'
},

];
//Вызовы функций
toggleCardButton();
renderCards();
search();
addToCart();


function addToCart(){
    let cards = document.querySelectorAll(`.card`);
    let sidebarListItems = [];
    for (let i = 0; i < cards.length; i++){
        cards[i].addEventListener('click',()=>{
        if (!cards[i].classList.contains('card-active')) {
            cards[i].classList.add('card-active');
            sidebarListItems.push(products[i]);
        } else {
            cards[i].classList.remove('card-active');
            for (let j = 0; j < sidebarListItems.length; j++){
                if (sidebarListItems[j] === products[i]) {
                    sidebarListItems.splice(j,1);
                }
            }
        }
        renderItemsInCard(sidebarListItems);
        });
    }
}

function renderItemsInCard(sidebarListItems){
    let sidebarList = document.querySelector(`.sidebar-list`);
    let sidebarTotal = document.querySelector(`.sidebar-total`);
    let price = 0;
    sidebarList.innerHTML = '';
    for (let i = 0; i < sidebarListItems.length; i++){
        sidebarList.innerHTML += `
            <li>${sidebarListItems[i].title} - ${sidebarListItems[i].price}</li>
        `;
        price += Number(sidebarListItems[i].price);
    }
    if (price == 0) {
        sidebarTotal.innerHTML = '';
    } else {
        sidebarTotal.innerHTML = price;
    }
}

//Функции
function toggleCardButton(){
    document
    .querySelector(`.cart-button`)
    .addEventListener('click',function(){
        document.querySelector(`.sidebar`).classList.toggle('hidden')
    });
}

function renderItem(i){
    document.querySelector(`.food-container`).innerHTML += `
        <div class="card">
        <img src="${products[i].img}">
        <div class="card-body">
            <span class="food-title">${products[i].title}</span>
            <span class="food-price">${products[i].price}</span>
        </div>
        </div>
    `;
}

function renderCards(){
    for (let i = 0; i < products.length; i++){
        renderItem(i);
    }
}

function searchByTitle(){
    let search = document.querySelector(`.search-input`).value.toLowerCase();
    document.querySelector(`.food-container`).innerHTML = ``;
    for (let i = 0; i < products.length; i++){
        if (products[i].title.toLowerCase().includes(search)) {
            renderItem(i);
        } 
}
}

function search(){
    document
    .querySelector(`.search-input`)
    .addEventListener(`input`,searchByTitle);
}