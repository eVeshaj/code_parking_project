const nextButton=document.getElementById("nextButton");
const gameButton=document.getElementById("gameButton");

let makine=document.getElementById("makina");
let gradeRight=270;
let gradeLeft=90;
let winSound=new sound("assets/sounds/win.mp3");
let shootingStar=new sound("assets/sounds/shootingstar.mp3");



function returnVector(){
    let vektori=document.getElementById("teksti").value; 
    let vektor=[]; 
    let j=0;
    for(let i=0;i<vektori.length;i++){
        if(vektori[i]==='\n'){
            vektor.push(vektori.slice(j,i));
            j=i+1;
        }
    }
    return vektor;
}

function lexo(){

    let vektorr=[];
    vektorr=returnVector();
    for(let x of vektorr)
    {
        let gjatesia=x.length;
        let numer=parseInt(x.substr(gjatesia-3,3));
        if(isNaN(numer))
        {
            if(x=="TURN RIGHT")
            {
                turnRight();
            }
            else if(x=="TURN LEFT")
            {
                turnLeft();
            }
            
        }
        else
        {
            if(x=="MOVE RIGHT "+numer)
            {
                moveRight(numer);
            }
            else if(x=="MOVE LEFT "+numer)
            {
                moveLeft(numer);
            }
            else if(x=="MOVE UP "+numer)
            {
                moveUp(numer);
            }
            else if(x=="MOVE DOWN "+numer)
            {
                moveDown(numer);
            }
        }
    }
    shtoPiket();
}


function convertToUpper(){
    let a=document.getElementById("teksti");
    a.value=a.value.toUpperCase();
}

function turnRight()
{
    makine.style = 'transform: rotate(' +gradeRight+ 'deg)';
    gradeRight+=90;
    makine.style.transition="1.05s ease-in-out";
}

function turnLeft()
{
    makine.style = 'transform: rotate(' +gradeLeft+ 'deg)';
    gradeLeft-=90;
    makine.style.transition="1.05s ease-in-out";
}

function moveRight(vlera){
    let left=parseInt(window.getComputedStyle(makina).getPropertyValue("left"));
    if(left+vlera<900){
        $(document).ready(function(){
            $("#makina").animate({
                left: "+="+vlera+"px",
            },1000,function() { winning();} );
        });
    }
}

function moveLeft(vlera)
{
    let left=parseInt(window.getComputedStyle(makina).getPropertyValue("left"));
    if(left+vlera>=200)
    {
        $(document).ready(function(){
            $("#makina").animate({
                left: "-="+vlera+"px",
            },1000,function() { winning();});
        });
    }
}

function moveUp(vlera){
    let top=parseInt(window.getComputedStyle(makina).getPropertyValue("top"));
    if(top+vlera>=50){
        $(document).ready(function(){
            $("#makina").animate({
                top: "-="+vlera+"px",
            },1000,function() { winning();});
        });
    }
}

function moveDown(vlera){
    let top=parseInt(window.getComputedStyle(makina).getPropertyValue("top"));
    if(top+vlera<305){
        $(document).ready(function(){
            $("#makina").animate({
                top: "+="+vlera+"px",
            },1000,function() { winning();});
        });
    }    
}

function winning(){
    let vektorr=[];
    vektorr=returnVector();
    let leftCar=parseInt(window.getComputedStyle(makina).getPropertyValue("left"));
    let leftParking=parseInt(window.getComputedStyle(parking).getPropertyValue("left"));
    let topCar=parseInt(window.getComputedStyle(makina).getPropertyValue("top"));
    let topParking=parseInt(window.getComputedStyle(parking).getPropertyValue("top"));
    console.log("Makina left:  "+leftCar);
    console.log("Parking left:  "+leftParking);
    console.log("Makina top:  "+topCar);
    console.log("Parking top:  "+topParking);
    if(leftParking==leftCar && topParking==topCar+100){
        winSound.play();
        returnBackSound().stop();
        $(document).ready(function(){
            $("#fitore").show(700);
            console.log(vektorr.length);
            if(vektorr.length===1){
                showFirstStar();
                showSecondStar();
                showThirdStar();      
            }
            else if(vektorr.length===2){
                showFirstStar();
                showSecondStar();                
            }
            else if(vektorr.length===3){
                showFirstStar();  
            }
            $("#nextButton").show(2200);
        });
    }
}

function nexti(){
    returnBackSound().stop();
    sfidatt();
}

function showFirstStar(){
    $("#ylli1").show(1300);
    setTimeout(shootingStar.play(),1350);
}

function showSecondStar(){
    $("#ylli2").show(1500);
    setTimeout(shootingStar.play(),3500);
}

function showThirdStar(){
    $("#ylli3").show(2000);
    setTimeout(shootingStar.play(),5500);    
}

gameButton.addEventListener('click',lexo);
nextButton.addEventListener('click',nexti);

/*$("#gameButton").click(function(){
    lexo();
});*/


/*function moveRight(vlera){
    let left=parseInt(window.getComputedStyle(makina).getPropertyValue("left"));
    left+=vlera;
    makina.style.left=left+"px";
}

function moveLeft(vlera){
    let left=parseInt(window.getComputedStyle(makina).getPropertyValue("left"));
    left-=vlera;
    makina.style.left=left+"px";
}

function moveUp(vlera){
    let lart=parseInt(window.getComputedStyle(makina).getPropertyValue("top"));
    lart-=vlera;
    makina.style.top=lart+"px";
}

function moveDown(vlera)
{
    let lart=parseInt(window.getComputedStyle(makina).getPropertyValue("top"));
    lart+=vlera;
    makina.style.top=lart+"px";
}*/










