let getId = (id) => {
    return document.getElementById(id);
};
getId('ul_header').style.transition = '.6s';
let hide_show_ul_header = true;
getId('list').addEventListener('click', () => {
    if (hide_show_ul_header) {
        getId('ul_header').style.width = '60%';
        getId('btn1_ul_header').style.transition = '1.5s';
        getId('btn2_ul_header').style.transition = '1.5s';
        getId('btn3_ul_header').style.transition = '1.5s';
        getId('btn1_ul_header').style.display = 'block';
        getId('btn2_ul_header').style.display = 'block';
        getId('btn3_ul_header').style.display = 'block';
        hide_show_ul_header = false;
    } else {
        getId('ul_header').style.width = '0%';
        getId('btn1_ul_header').style.transition = '1.5s';
        getId('btn2_ul_header').style.transition = '.5s';
        getId('btn3_ul_header').style.transition = '.5s';
        getId('btn1_ul_header').style.display = 'none';
        getId('btn2_ul_header').style.display = 'none';
        getId('btn3_ul_header').style.display = 'none';
        hide_show_ul_header = true;
    }
});

let nav = document.querySelector('nav');
let article = document.querySelector('article');
let aside = document.querySelector('aside');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

getId('About_me').addEventListener('click', () => {
    nav.style.display = 'none';
    article.style.display = 'none';
    aside.style.display = 'block';
    main.style.display = 'none';
    footer.style.display = 'none';
});

getId('return_menu').addEventListener('click', () => {
    nav.style.display = 'block';
    article.style.display = 'block';
    aside.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'block';
});

getId('View_project').addEventListener('click', () => {
    nav.style.display = 'none';
    article.style.display = 'none';
    aside.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'none';
});

const img_article = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
];
let index_img_article = 0;
setInterval(() => {
    index_img_article = (index_img_article + 1) % img_article.length;
    getId('home_img').src = img_article[index_img_article];
}, 5000);

let index_img_container1 = 0;
const img_container1 = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
];
setInterval(() => {
    index_img_container1 = (index_img_container1 + 1) % img_container1.length;
    getId('img_container1').src = img_container1[index_img_container1];
}, 3000);

let index_img_container2 = 0;
const img_container2 = [
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
];
setInterval(() => {
    index_img_container2 = (index_img_container2 + 1) % img_container2.length;
    getId('img_container2').src = img_container2[index_img_container2];
}, 3000);

let index_img_container3 = 0;
const img_container3 = [
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
];
setInterval(() => {
    index_img_container3 = (index_img_container3 + 1) % img_container3.length;
    getId('img_container3').src = img_container3[index_img_container3];
}, 3000);

let index_img_container4 = 0;
const img_container4 = [
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
];
setInterval(() => {
    index_img_container4 = (index_img_container4 + 1) % img_container4.length;
    getId('img_container4').src = img_container4[index_img_container4];
}, 3000);

let index_img_container5 = 0;
const img_container5 = [
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
];
setInterval(() => {
    index_img_container5 = (index_img_container5 + 1) % img_container5.length;
    getId('img_container5').src = img_container5[index_img_container5];
}, 3000);

let index_img_container6 = 0;
const img_container6 = [
    '26.png',
    '27.png',
    '28.png',
];
setInterval(() => {
    index_img_container6 = (index_img_container6 + 1) % img_container6.length;
    getId('img_container6').src = img_container6[index_img_container6];
}, 3000);
