let getId = (id)=>{
    return document.getElementById(id);
}
let hide_show_nav = true;
document.querySelector('nav').style.transition = '.4vh';
getId('btn_list').addEventListener('click',()=>{
    if (hide_show_nav) {
        document.querySelector('nav').style.height = '54vh'; 
        hide_show_nav = false;
    }else{
        document.querySelector('nav').style.height = '0vh';
        hide_show_nav = true;
    }
});
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
