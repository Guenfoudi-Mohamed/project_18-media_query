// Project_18-media_query

const circles = document.querySelectorAll('body #main #crew .container .content .contentLeft .circles .circle');
for(let i = 0;i<circles.length;i++){
    circles[i].addEventListener('click',function(){
        const arrPerson = ['images/starter-code/assets/crew/image-douglas-hurley.png','images/starter-code/assets/crew/image-anousheh-ansari.png','images/starter-code/assets/crew/image-mark-shuttleworth.png','images/starter-code/assets/crew/image-victor-glover.png'];
        const persons = document.querySelectorAll('body #main #crew .container .content .contentLeft .crewPerson .person');
        const imgPerson = document.querySelector('body #main #crew .container .content .contentRight img'); 
        for(let x = 0;x<persons.length;x++){
            if(i == x){
                persons[x].style.setProperty('display','block');
                imgPerson.src=`${arrPerson[x]}`;
                this.style.setProperty('background-color','#fff');
                continue;
            }
            persons[x].style.setProperty('display','none');
            circles[x].style.setProperty('background-color','rgb(200, 200, 200)');
        }
    });
};

