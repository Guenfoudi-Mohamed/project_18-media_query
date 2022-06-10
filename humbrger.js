// Project_18-media_query

const humbrger = document.querySelector('body  #header_top .navbar .humbrger_menu');
humbrger.addEventListener('click',function(){
    const nav_main = document.querySelector('body  #header_top .navbar .nav_main');
    const svg  = document.querySelector('body  #header_top .navbar .logo svg');

    humbrger.classList.toggle('humbrgerActive');
    nav_main.classList.toggle('nav_mainActive');
    if(humbrger.classList.contains('humbrgerActive')){
        const header_top  = document.querySelector('body #header_top');
        header_top.style.setProperty('background-color','rgb(255,255,255,.0)');    
        svg.children[0].children[0].style.setProperty('fill','#fff');
        svg.children[0].children[1].style.setProperty('fill','#000');
    };
    const a  = document.querySelectorAll('body #header_top .navbar .nav_main ul li a');
    for(let i = 0;i<a.length;i++){
        a[i].addEventListener('click',function(){
            humbrger.click();
        });
    };
    if(humbrger.classList.contains('humbrgerActive') == false){
        window.onscroll();
    };
});

