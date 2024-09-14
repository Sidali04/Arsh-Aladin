/*this function will be return element get it by id selector */
let getId = (id)=>{
    return document.getElementById(id);
}
getId('Alaa_logo').addEventListener('click',()=>{
    scrollTo({
        top:0,
        behavior:"smooth",
    });
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true
    getId('home').style.display = 'block';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
/*this function will be do when i click at button display the special div of this button*/
getId('HOME_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true
    getId('home').style.display = 'block';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
getId('ARCHITECTURE_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'block';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
getId('INTERIOR_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'block';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
getId('PRODUCTS_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'block';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
getId('TEAM_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'block';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'none';
});
getId('GALLERY_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'block';
    getId('contact').style.display = 'none';
});
getId('CONTACT_btn').addEventListener('click',()=>{
    document.querySelector('nav').style.height = '0vh';
    hide_show_nav = true;
    getId('home').style.display = 'none';
    getId('architecture').style.display = 'none';
    getId('interior').style.display = 'none';
    getId('product').style.display = 'none';
    getId('team').style.display = 'none';
    getId('gallery').style.display = 'none';
    getId('contact').style.display = 'block';
});
let hide_show_nav = true;
document.querySelector('nav').style.transition = '.4vh';
/*this function do when you click at dirst time this button wil be show options div
and in the second time will be hide the options div */
getId('btn_list').addEventListener('click',()=>{
    if (hide_show_nav) {
        document.querySelector('nav').style.height = '54vh'; 
        hide_show_nav = false;
    }else{
        document.querySelector('nav').style.height = '0vh';
        hide_show_nav = true;
    }
});
/*this function change the main home img */
let change_main_img = true;
setInterval(()=>{
    if (change_main_img) {
        getId('main_img').style.backgroundImage = 'url(main_img2.jpg)';
        change_main_img = false;
    }else{
        getId('main_img').style.backgroundImage = 'url(main_img1.jpg)';
        change_main_img = true;
    }
},5000);
/*this function change the main interior img */
let change_main_interior_img = true;
setInterval(()=>{
    if (change_main_interior_img) {
        getId('div_main_img_interior').style.backgroundImage = 'url(main_img_interior2.png)';
        change_main_interior_img = false;
    }else{
        getId('div_main_img_interior').style.backgroundImage = 'url(main_img_interior1.png)';
        change_main_interior_img = true;
    }
},5000);
/* this function do when you click in ine of this button will be show a message*/
getId('WE_CREATE_NEW').addEventListener('click',()=>{
    getId('add_paragraph_to_pre').innerHTML = 
    `New We don’t draw designs and sketches.
    we create buildings with a soul inspired
    by the details of your lifestyle and day
    to day habits. In Hatch Architect we 
    bring your dreams and vision into life.
    Every project gets through many stages
    of profiling and understanding it’s function
    before we ever lay down a single line 
    toward your destination
    `;
});
getId('WE_ELEVATE_NEW').addEventListener('click',()=>{
    getId('add_paragraph_to_pre').innerHTML = 
    `Two We shape our space then our space shapes us.
    In hatch interior we don’t believe in compromise
    when it comes to your personal space... we aim for
    the stars and shoot higher. With a set of talented
    designers, we tailor your space taking into consideration
    every detail of your life to create a perfect fit.
    `;
});
getId('WE_INSPIRE').addEventListener('click',()=>{
    getId('add_paragraph_to_pre').innerHTML = 
    `Hatch Products came into existence to 
    fill in the gap in the Saudi market to 
    join the global league. We believe in 
    the material truth and functional convenience.
    From an interior architecture perspective, 
    we create unique pieces with high attention 
    to details and user experience to accommodate 
    to your lifestyle.
    `;
});
getId('WE_DELIVER').addEventListener('click',()=>{
    getId('add_paragraph_to_pre').innerHTML = 
    `Owning a Hatch stamped Item is a status symbol,
    a mark of recognition and quality. Hatch selections 
    offers you the confidence, comprehensive support, 
    and complete peace of mind that only an expert can 
    provide. Hatch Selections products are reserved 
    exclusively for products that fulfills the highest 
    standards. Moreover, all these items have to pass 
    our rigorous checks. they have been thoroughly and 
    expertly examined. You can be certain that if a product 
    qualifies for Hatch Selection, it meets the most uncompromising 
    standards for your pleasure.
    `;
});
/*if the scroll is greatest then 1500px the website will be show the up button*/
window.addEventListener('scroll',()=>{
    if(scrollY > 1500){
        getId('up').style.display = 'block';
    }else{
        getId('up').style.display = 'none';
    }
});
/* when you click at up button the site web will be scroll to header div*/
getId('up').addEventListener('click',()=>{
    scrollTo({
        top:0,
        behavior:'smooth',
    })
});
