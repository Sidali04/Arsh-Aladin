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
    '../Arch Aladin/Alaa/pub/1.png',
    '../Arch Aladin/Alaa/pub/2.png',
    '../Arch Aladin/Alaa/pub/3.png',
    '../Arch Aladin/Alaa/pub/4.png',
    '../Arch Aladin/Alaa/pub/5.png',
    '../Arch Aladin/Alaa/pub/6.png',
];
let index_img_article = 0;
setInterval(() => {
    index_img_article = (index_img_article + 1) % img_article.length;
    getId('home_img').src = img_article[index_img_article];
}, 5000);

let index_img_container1 = 0;
const img_container1 = [
    '../Arch Aladin/Alaa/pub/1.png',
    '../Arch Aladin/Alaa/pub/2.png',
    '../Arch Aladin/Alaa/pub/3.png',
    '../Arch Aladin/Alaa/pub/4.png',
    '../Arch Aladin/Alaa/pub/5.png',
];
setInterval(() => {
    index_img_container1 = (index_img_container1 + 1) % img_container1.length;
    getId('img_container1').src = img_container1[index_img_container1];
}, 3000);

let index_img_container2 = 0;
const img_container2 = [
    '../Arch Aladin/Alaa/pub/6.png',
    '../Arch Aladin/Alaa/pub/7.png',
    '../Arch Aladin/Alaa/pub/8.png',
    '../Arch Aladin/Alaa/pub/9.png',
    '../Arch Aladin/Alaa/pub/10.png',
];
setInterval(() => {
    index_img_container2 = (index_img_container2 + 1) % img_container2.length;
    getId('img_container2').src = img_container2[index_img_container2];
}, 3000);

let index_img_container3 = 0;
const img_container3 = [
    '../Arch Aladin/Alaa/pub/11.png',
    '../Arch Aladin/Alaa/pub/12.png',
    '../Arch Aladin/Alaa/pub/13.png',
    '../Arch Aladin/Alaa/pub/14.png',
    '../Arch Aladin/Alaa/pub/15.png',
];
setInterval(() => {
    index_img_container3 = (index_img_container3 + 1) % img_container3.length;
    getId('img_container3').src = img_container3[index_img_container3];
}, 3000);

let index_img_container4 = 0;
const img_container4 = [
    '../Arch Aladin/Alaa/pub/16.png',
    '../Arch Aladin/Alaa/pub/17.png',
    '../Arch Aladin/Alaa/pub/18.png',
    '../Arch Aladin/Alaa/pub/19.png',
    '../Arch Aladin/Alaa/pub/20.png',
];
setInterval(() => {
    index_img_container4 = (index_img_container4 + 1) % img_container4.length;
    getId('img_container4').src = img_container4[index_img_container4];
}, 3000);

let index_img_container5 = 0;
const img_container5 = [
    '../Arch Aladin/Alaa/pub/21.png',
    '../Arch Aladin/Alaa/pub/22.png',
    '../Arch Aladin/Alaa/pub/23.png',
    '../Arch Aladin/Alaa/pub/24.png',
    '../Arch Aladin/Alaa/pub/25.png',
];
setInterval(() => {
    index_img_container5 = (index_img_container5 + 1) % img_container5.length;
    getId('img_container5').src = img_container5[index_img_container5];
}, 3000);

let index_img_container6 = 0;
const img_container6 = [
    '../Arch Aladin/Alaa/pub/26.png',
    '../Arch Aladin/Alaa/pub/27.png',
    '../Arch Aladin/Alaa/pub/28.png',
];
setInterval(() => {
    index_img_container6 = (index_img_container6 + 1) % img_container6.length;
    getId('img_container6').src = img_container6[index_img_container6];
}, 3000);
