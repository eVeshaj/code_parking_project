const regjistro=document.getElementById("regjistro");
const tabela=document.getElementById("tabela");
const logohuu=document.getElementById('logohuu');

var db=openDatabase("databaza","1.0","databaza",65535);

function krijoTabele(){
$(document).ready(function(){

    db.transaction(function(transaction){
        var sql="CREATE TABLE users "+
        "(ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
        "Name VARCHAR(100) NOT NULL,"+
        "Surname VARCHAR(100) NOT NULL,"+
        "Email EMAIL NOT NULL,"+
        "Password VARCHAR(100) NOT NULL)";
        transaction.executeSql(sql,undefined,function(){
            //alert("Table is created successfully");
        });/*,function(){
            alert("Table is already being created");
        }*/
    });
});
}

function shtoUser(){
$(document).ready(function(){
    var name=$("#name").val();
    var surname=$("#surname").val();
    var emaili=$("#emaili").val();
    var pass=$("#pass").val();
    var re_pass=$("#re_pass").val();
    if(pass===re_pass && (emaili.search('@'))!=-1)
    {
        db.transaction(function(transaction){
            var sql="INSERT INTO users(Name,Surname,Email,Password) VALUES(?,?,?,?)";
            transaction.executeSql(sql,[name,surname,emaili,pass],function(){
                alert("Your registration is complete. Welcome on board buddy!");
                logini();
            },function(transaction,err){
                alert(err.message);
            });
        });
    }
    else if(pass!==re_pass && (emaili.search('@'))!=-1){
        alert("Please enter the same password in both fields.");
    }
    else if(pass===re_pass && (emaili.search('@'))===-1){
        alert("Please make sure you write your email correctly.");
    }
    });
}

function register(){
    krijoTabele();
    shtoUser();
}

function shfaqTabelen(){
    $("#itemlist").children().remove();
	db.transaction(function(transaction){
		var sql="SELECT * FROM users";
		transaction.executeSql(sql,undefined,function(transaction,result){
        if(result.rows.length){

        for(var i=0;i<result.rows.length;i++){
	        var row=result.rows.item(i);
	        var name=row.Name;
	        var id=row.ID;
            var surname=row.Surname;
            var emaili=row.Email;
            var pass=row.Password;
            $("#itemlist").append('<tr><td>'+id+'</td><td>'+name+'</td><td>'+surname+
            '</td><td>'+emaili+'</td></tr>');
        }
        }
        else{
	        $("#itemlist").append('<tr><td colspan="5" align="center">No user Found</td></tr>');
        }


		},function(transaction,err){
			alert('No table found. Click on "Create Table" to create table now');
		});
	});
}

/*function logimi(){
    $(document).ready(function(){
        var username=$("#username").val();
        var passwordi=$("#passwordi").val();
        console.log(username);
        console.log(passwordi);
        db.transaction(function(transaction){
            var sql="SELECT * FROM users WHERE Name=? AND Password=?;";
            transaction.executeSql(sql,[username,passwordi],function(){
                alert("You logged in successfully");
            },function(transaction,err){
                alert(err.message);
            });
        });
    });
}*/

function logimii(){
    let ugjet=false;
    $(document).ready(function(){
        var username=$("#username").val();
        var passwordi=$("#passwordi").val();
        
        db.transaction(function(transaction){
            var sql="SELECT * FROM users";
            transaction.executeSql(sql,undefined,function(transaction,result){
                if(result.rows.length){
                    for(var i=0;i<result.rows.length;i++){
                        var row=result.rows.item(i);
                        var name=row.Name;
                        var surname=row.Surname;
                        var pass=row.Password;
                        if(name===username)
                        {
                            ugjet=true;
                            if(pass===passwordi){
                                alert("You logged in successfully. Get ready to play!");
                                document.cookie="username="+name; 
                                document.cookie="surname="+surname;
                                logoutButton();
                                sfidatt();
                                break;
                            }
                            else
                            {
                                alert("Wrong password");
                                break;
                            }
                        }
                    }
                    if(ugjet===false){
                        alert("User doesn't exist");
                    }
                }
                else
                {
                    alert("Database is empty.");
                }
            },function(transaction,err){
                alert("Database is empty.");
            });
        });
    });
}



  function logoutButton(){
      $(document).ready(function(){
        $("#logout").show();
      });
  }

regjistro.addEventListener('click', register);
tabela.addEventListener('click',shfaqTabelen);
logohuu.addEventListener('click',logimii);