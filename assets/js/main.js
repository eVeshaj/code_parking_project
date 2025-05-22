const login=document.getElementById("login");
const home=document.getElementById('home');
const homee=document.getElementById('Home');
const signUp=document.getElementById("sign-up");
const sign_Up=document.getElementById("sign-Up");
const about_us=document.getElementById("about_us");
const loja=document.getElementById("loja");
const starto=document.getElementById("starto");
const startForFree=document.getElementById("startForFree");
const startToday=document.getElementById("startToday");
const playGame=document.getElementById("playGame");
const logouT=document.getElementById("logout");
const scores=document.getElementById("scores");
const toTop = document.querySelector(".to-top");

document.getElementById("videoHome").volume=0.2;

let backSound=new sound("assets/sounds/backmusic2.mp3");

checkCookie();

function logini(){
    $(document).ready(function(){
        backSound.stop();
        $(".container1").hide();
        $('#login').hide();
        document.getElementById("username").value='';
        document.getElementById("passwordi").value='';
        $('.container2').show();
        $('#sign-up').show();
        $('.container3').hide();
        $('.container4').hide();
        $('.container5').hide();
        $('.container6').hide();
        $(".container7").hide();
    });

    $(document).ready(function(){
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#surrender").fadeOut("fast");
        $("#starto").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#header1").fadeOut("fast");
        $("#header2").fadeOut("fast");
        $("#piket").fadeIn("fast");
    });
    
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();

    checkCookie();
}

function returnHome(){
    $(document).ready(function(){
        backSound.stop();
        $(".container1").show();
        $('#login').show();
        $('.container2').hide();
        $('.container3').hide();
        $('#sign-up').show();
        $('.container4').hide();
        $('.container5').hide();
        $('.container6').hide();
        $("#sfida1").hide();
        $(".container7").hide();
    });

    $(document).ready(function(){
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#surrender").fadeOut("fast");
        $("#starto").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#header1").fadeOut("fast");
        $("#header2").fadeOut("fast");
        $("#piket").fadeIn("fast");
    });
    
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();

    checkCookie();
}

function sign_up(){
    $(document).ready(function(){
        backSound.stop();
        $(".container1").hide();
        $('#login').show();
        $('#sign-up').hide();
        $('.container2').hide();
        document.getElementById("name").value='';
        document.getElementById("surname").value='';
        document.getElementById("emaili").value='';
        document.getElementById("pass").value='';
        document.getElementById("re_pass").value='';
        $('.container3').show();
        $('.container4').hide();
        $('.container5').hide();
        $('.container6').hide();
        $(".container7").hide();
    });

    $(document).ready(function(){
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#surrender").fadeOut("fast");
        $("#starto").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#header1").fadeOut("fast");
        $("#header2").fadeOut("fast");
        $("#piket").fadeIn("fast");
    });

    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();

    checkCookie();
}

function aboutUs(){
    $(document).ready(function(){
        backSound.stop();
        $(".container1").hide();
        $('#login').show();
        $('#sign-up').show();
        $('.container2').hide();
        $('.container3').hide();
        $('.container4').show();
        $('.container5').hide();
        $('.container6').hide();
        $("#sfida1").hide();
        $(".container7").hide();
    });

    $(document).ready(function(){
        $("#part1").fadeIn();
        $("#part2").fadeIn("slow");
        $("#part3").fadeIn(3000);
    });

    $(document).ready(function(){
        $("#surrender").fadeOut("fast");
        $("#starto").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#header1").fadeOut("fast");
        $("#header2").fadeOut("fast");
        $("#piket").fadeIn("fast");
    });
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();

    checkCookie();    
}

function lojaa(){
        backSound.stop();
        $(".container1").hide();
        $('#login').hide();
        $('.container2').hide();
        $('.container3').hide();
        $('#sign-up').hide();
        $('.container4').hide();
        $('.container6').hide();
        $('.container5').show();
        $("#scores").show();
        $("#sfida1").hide();
        document.getElementById("teksti").value = "";
        $("#loading").fadeIn(3000);
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
        $("#surrender").fadeIn(3000);
        $("#starto").fadeIn(9000);
        $("#header1").fadeOut("fast");
        $("#header2").fadeOut("fast");
        $("#piket").fadeIn("fast");
        $("#fitore").hide();
        $("#ylli1").hide();
        $("#ylli2").hide();
        $("#ylli3").hide();
        $(".container7").hide();
}

function sfidatt(){
    backSound.stop();
    $(".container1").hide();
    $('#login').hide();
    $('.container2').hide();
    $('.container3').hide();
    $('#sign-up').hide();
    $('.container4').hide();
    $('.container6').hide();
    $('.container5').hide();
    $("#scores").show();
    $("#sfida1").hide();
    $("loading").fadeOut("fast");
    $("loading").hide();
    $("#part1").fadeOut("fast");
    $("#part2").fadeOut("fast");
    $("#part3").fadeOut("fast");
    $("#surrender").fadeOut("fast");
    $("#starto").fadeOut("fast");
    $("#header1").fadeOut("fast");
    $("#header2").fadeOut("fast");
    $("#piket").fadeOut("fast");
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();
    $(".container7").show();
}

function startTheGame(){
    backSound.play();
    $(document).ready(function(){
        $("#loading").hide();
        $("#sfida1").fadeIn(3000);
        $("#makina").css({"margin-top": "0%", "left": "0px"});
    });
}

//funksion qe te kthen vleren e cookie-t, emrin e te cilii merr si argument
function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie()
{
    let activeUser=getCookie("username");
    console.log(activeUser);
    if(activeUser!=""){
        $(document).ready(function(){
            $('#login').hide();
            $('#sign-up').hide();
            $('#logout').show();
            $('#playGame').show();
            $('#scores').show();
        });
        startForFree.removeEventListener('click',logini);
        startForFree.addEventListener('click',lojaa);
        startToday.removeEventListener('click',logini);
        startToday.addEventListener('click',lojaa);
    }
    else{
        $(document).ready(function(){
            $('#login').show();
            $('#sign-up').show();
            $('#logout').hide();
            $('#playGame').hide();
            $('#scores').hide();
        });  
        startForFree.addEventListener('click',logini);
        startToday.addEventListener('click',logini);
    }
}

function logout()
{
    document.cookie = "username=;";
    backSound.stop();
    startForFree.removeEventListener('click',lojaa);
    startForFree.addEventListener('click',logini);
    startToday.removeEventListener('click',lojaa);
    startToday.addEventListener('click',logini);
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();
    returnHome();
}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.volume=0.3;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


function returnBackSound()
{
    return backSound;
}

function viewScores()
{
    showTABLE();
    backSound.stop();
    $(document).ready(function(){
        $(".container1").hide();
        $('.container2').hide();
        $('.container3').hide();
        $('.container4').hide();
        $('.container5').hide();
        $("#sfida1").hide();
        $(".container6").show();
        $(".container7").hide();
    });

    $(document).ready(function(){
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#surrender").fadeOut("fast");
        $("#starto").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#header1").fadeIn(1000);
        $("#header2").fadeIn(3000);
        $("#piket").fadeIn(4000);
    });
    $("#ylli1").hide();
    $("#ylli2").hide();
    $("#ylli3").hide();

    checkCookie();
}


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) { //pageYOffset eshte nje atribut i objektit window qe kthen numrin e pikselave
    toTop.classList.add("active");  //me te cilet jemi zhvendosur vertikalisht nga kufiri i siperm i dokumentit HTML
  } else {
    toTop.classList.remove("active");
  }
})

$(".playy").click(function(){
    lojaa();
});

login.addEventListener('click',logini);
home.addEventListener('click',returnHome);
homee.addEventListener('click',returnHome);
signUp.addEventListener('click',sign_up);
sign_Up.addEventListener('click',sign_up);
about_us.addEventListener('click',aboutUs);
starto.addEventListener('click',startTheGame);
playGame.addEventListener('click',lojaa);
logouT.addEventListener('click',logout);
scores.addEventListener('click',viewScores);



