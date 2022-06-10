// Project_18-media_query



window.onscroll = function(){
    const header_top  = document.querySelector('body #header_top');
    const navBar  = document.querySelector('body  #header_top .navbar');
    const svg  = document.querySelector('body  #header_top .navbar .logo svg');
    const line  = document.querySelector('body  #header_top .navbar .line');
    const a  = document.querySelectorAll('body #header_top .navbar .nav_main ul li a');
    const humbrger = document.querySelector('body  #header_top .navbar .humbrger_menu');

    if(this.scrollY > 0){
        header_top.style.setProperty('background-color','rgb(255,255,255,.8)');
        header_top.style.setProperty('color','#000');
        navBar.style.setProperty('margin-top','0px');
        svg.children[0].children[0].style.setProperty('fill','#000');
        svg.children[0].children[1].style.setProperty('fill','#fff');
        line.style.setProperty('background-color','#000');
        for(let i = 0;i<a.length;i++){
            a[i].style.setProperty('color','#000');
            a[i].children[0].style.setProperty('color','#303030');
        };
        for(let i = 0;i<humbrger.children.length;i++){
            humbrger.children[i].style.setProperty('background-color','#000');
        };
    }
    else if(this.scrollY == 0){
        header_top.removeAttribute('style');
        navBar.removeAttribute('style');
        svg.children[0].children[0].removeAttribute('style');
        svg.children[0].children[1].removeAttribute('style');
        line.removeAttribute('style');
        for(let i = 0;i<a.length;i++){
            a[i].removeAttribute('style');
            a[i].children[0].removeAttribute('style');
        }
        for(let i = 0;i<humbrger.children.length;i++){
            humbrger.children[i].removeAttribute('style');
        };
    }
};

// event for item 'li' 'a' List navBar
const itemListNavBar  = document.querySelectorAll('body #header_top .navbar .nav_main ul li a');
for(let i = 0; i < itemListNavBar.length;i++){
    // mouseOver
    itemListNavBar[i].addEventListener('mouseover',function(){
        if(window.scrollY > 0){
            for(let x = 0 ; x<itemListNavBar.length;x++){
                if(i == x){
                    itemListNavBar[x].style.setProperty('border-color','#000');
                    continue;
                }
                itemListNavBar[x].style.setProperty('border-color','transparent');
            };
        };
    });
    // mouseClick
    itemListNavBar[i].addEventListener('click',function(){
        for(let x = 0 ; x<itemListNavBar.length;x++){
            if(i == x /*&& x!=0*/){
                if(x == 0){
                    itemListNavBar[x].style.setProperty('border-color','#fff');
                    continue;
                }
                itemListNavBar[x].style.setProperty('border-color','#000');
                continue;
            };
            itemListNavBar[x].style.setProperty('border-color','transparent');
        };
    });
}
