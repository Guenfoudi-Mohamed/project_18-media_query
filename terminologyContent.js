// Project_18-media_query


const circleTerminology = document.querySelectorAll('body #main #technology .container .content .contentLeft .circles .circle');
for(let i = 0;i<circleTerminology.length;i++){
    circleTerminology[i].addEventListener('click',function(){
        const terminology = document.querySelectorAll('body #main #technology .container .content .contentLeft .terminologyContent .terminology');
        const imgTerminology = document.querySelector('body #main #technology .container .content .contentRight img');
        const arrImgTerminology = ['/images/starter-code/assets/technology/image-launch-vehicle-portrait.jpg','/images/starter-code/assets/technology/image-spaceport-portrait.jpg','/images/starter-code/assets/technology/image-space-capsule-portrait.jpg'];
        for(let x = 0;x<terminology.length;x++){
            if(x == i){

                terminology[x].style.setProperty('display','block');
                circleTerminology[x].style.setProperty('background-color','rgba(255, 255, 255, 0.9)');
                circleTerminology[x].style.setProperty('border-color','#000');
                circleTerminology[x].children[0].style.setProperty('color','#000');
                imgTerminology.src = `${arrImgTerminology[x]}`;
                continue;
            }
            terminology[x].style.setProperty('display','none');
            circleTerminology[x].style.setProperty('background-color','rgba(255, 255, 255, .0)');
            circleTerminology[x].style.setProperty('border-color','#fff');
            circleTerminology[x].children[0].style.setProperty('color','#fff');
        };
    });
};
window.onload = function(){
    const numRandomCircleTerminology = Math.floor(Math.random() * 3);
    circleTerminology[numRandomCircleTerminology].click();
}