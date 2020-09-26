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
let backSound=new sound("assets/sounds/backmusic2.mp3");

checkCookie();

function logini(){
    $(document).ready(function(){
        $(".container1").hide();
        $('#login').hide();
        $('.container2').show();
        $('#sign-up').show();
        $('.container3').hide();
        $('.container4').hide();
        $('.container5').hide();
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
    checkCookie();
}

function returnHome(){
    $(document).ready(function(){
        $(".container1").show();
        $('#login').show();
        $('.container2').hide();
        $('.container3').hide();
        $('#sign-up').show();
        $('.container4').hide();
        $('.container5').hide();
        $("#sfida1").hide();
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
    checkCookie();
}

function sign_up(){
    $(document).ready(function(){
        $(".container1").hide();
        $('#login').show();
        $('#sign-up').hide();
        $('.container2').hide();
        $('.container3').show();
        $('.container4').hide();
        $('.container5').hide();
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

    checkCookie();
}

function aboutUs(){
    $(document).ready(function(){
        $(".container1").hide();
        $('#login').show();
        $('#sign-up').show();
        $('.container2').hide();
        $('.container3').hide();
        $('.container4').show();
        $('.container5').hide();
        $("#sfida1").hide();
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
    checkCookie();    
}

function lojaa(){
    $(document).ready(function(){
        $(".container1").hide();
        $('#login').hide();
        $('.container2').hide();
        $('.container3').hide();
        $('#sign-up').hide();
        $('.container4').hide();
        $('.container5').show();
        $("#sfida1").hide();
        $("loading").fadeIn(3000);
        
    });

    $(document).ready(function(){
        $("#part1").fadeOut("fast");
        $("#part2").fadeOut("fast");
        $("#part3").fadeOut("fast");
    });

    $(document).ready(function(){
        $("#surrender").fadeIn(3000);
        $("#starto").fadeIn(9000);
    });
}

function startTheGame(){
    backSound.play();
    $(document).ready(function(){
        $("#loading").hide();
        $("#sfida1").fadeIn(3000);
    });
}

//funksion qe te kthen vleren e cookie-t, emrin e te cilti merr si argument
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie(){
    let activeUser=getCookie("username");
    console.log(activeUser);
    if(activeUser!=""){
        $(document).ready(function(){
            $('#login').hide();
            $('#sign-up').hide();
            $('#logout').show();
            $('#playGame').show();
        });
        startForFree.addEventListener('click',lojaa);
        startToday.addEventListener('click',lojaa);
    }
    else{
        $(document).ready(function(){
            $('#login').show();
            $('#sign-up').show();
            $('#logout').hide();
            $('#playGame').hide();
        });  
        startForFree.addEventListener('click',logini);
        startToday.addEventListener('click',logini);
    }
}

function logout(){
    document.cookie = "username=;";
    backSound.stop();
    startForFree.removeEventListener('click',lojaa);
    startForFree.addEventListener('click',logini);
    startToday.removeEventListener('click',lojaa);
    startToday.addEventListener('click',logini);
    returnHome();
}

/*function check(){
    let activeUser=getCookie("username");
    console.log(activeUser);
    if(activeUser!=""){
        startForFree.addEventListener('click',lojaa);
        startToday.addEventListener('click',lojaa);
    }
    else{
        startForFree.addEventListener('click',logini);
        startToday.addEventListener('click',logini);
    }
}*/

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


function returnBackSound(){
    return backSound;
}


login.addEventListener('click',logini);
home.addEventListener('click',returnHome);
homee.addEventListener('click',returnHome);
signUp.addEventListener('click',sign_up);
sign_Up.addEventListener('click',sign_up);
about_us.addEventListener('click',aboutUs);
starto.addEventListener('click',startTheGame);
playGame.addEventListener('click',lojaa);
logouT.addEventListener('click',logout);



