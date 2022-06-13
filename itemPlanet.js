
// Project_18-media_query

const itemPlanet = document.querySelectorAll('body #main section .container .content .contentRight nav .list .item a');
for(let i = 0;i<itemPlanet.length;i++){
    itemPlanet[i].addEventListener('click',function(){
        const arrPlanet = ['images/starter-code/assets/destination/image-moon.png','images/starter-code/assets/destination/image-mars.png','images/starter-code/assets/destination/image-europa.png','images/starter-code/assets/destination/image-titan.png']
        const planet = document.querySelector('body #main section .container .content .contentRight .discriptionPlanet');
        for(let x = 0;x<itemPlanet.length;x++){
            if(x == i){
                itemPlanet[x].style.setProperty('color','#fff');
                itemPlanet[x].style.setProperty('font-weight','bold');
                itemPlanet[x].style.setProperty('border-bottom-color','#fff');
                planet.children[x].style.setProperty('display','block');
                document.querySelector('body #main section .container .content .contentLeft img').src = `${arrPlanet[x]}`
                continue;
            }   
            itemPlanet[x].style.setProperty('color','rgb(200,200,200)');
            itemPlanet[x].style.setProperty('font-weight','initial');
            itemPlanet[x].style.setProperty('border-bottom-color','transparent');
            planet.children[x].style.setProperty('display','none');
        }
    });
}

window.onload = function(){
    let arrRandomIndex = Math.floor(Math.random() * 4);
    itemPlanet[arrRandomIndex].click();    
}
