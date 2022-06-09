// Project_18-media_query



window.onscroll = function(){
    const header_top  = document.querySelector('body #header_top');
    const navBar  = document.querySelector('body  #header_top .navbar');
    const svg  = document.querySelector('body  #header_top .navbar .logo svg');
    const line  = document.querySelector('body  #header_top .navbar .line');
    const a  = document.querySelectorAll('body #header_top .navbar .nav_main ul li a');
    
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
        }
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
    }
};

// hover elements with javascript list navBar IN another fill js 'onmousedown' <> a > list navBar