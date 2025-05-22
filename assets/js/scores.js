var db=openDatabase("databaza","1.0","databaza",65535);

function krijoTab(){
    $(document).ready(function(){
        db.transaction(function(transaction){
            var sql="CREATE TABLE scores "+
            "(Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
            "Emer VARCHAR(100) NOT NULL,"+
            "Mbiemer VARCHAR(100) NOT NULL,"+
            "Piket INTEGER NOT NULL)";
            transaction.executeSql(sql,undefined,function(){
                //alert("Table is created successfully");
            });
        });
    });
}

function shtoPiket(){
    
        let vektori=returnVector();
        var name=getCookie("username");
        var surname=getCookie("surname");
        var points;
        switch(vektori.length){
            case 1:
                points=30;
                break;
            case 2:
                points=20;
                break;
            case 3:
                points=10;
                break;
            default:
                points=0;
                break;
        }

    if(points!=0)
    {
        db.transaction(function(transaction){
            var sql="SELECT * FROM scores";
            let ugjet=false;
            transaction.executeSql(sql,undefined,function(transaction,result){
                if(result.rows.length){
        
                    for(var i=0;i<result.rows.length;i++){
                        var row=result.rows.item(i);
                        var emer=row.Emer;
                        var mbiemer=row.Mbiemer;
                        if(name==emer && surname==mbiemer)
                        {
                            var sql2="UPDATE scores SET Piket=Piket+"+points+" WHERE Emer="+"'"+emer+"'";
                            ugjet=true;
                            transaction.executeSql(sql2,undefined,function(){
                                //alert("Piket u shtuan me sukses per userin ekzistent.");
                            }); 
                            break;                          
                        }
                    }
                    if(ugjet==false)
                    {
                        var sql2="INSERT INTO scores(Emer,Mbiemer,Piket) VALUES(?,?,?)";
                        transaction.executeSql(sql2,[name,surname,points],function(){
                            //alert("Piket u shtuan me sukses per userin e ri nderkohe qe tabela ekziston.");
                        });
                    }
                }
                else
                {
                    var sql2="INSERT INTO scores(Emer,Mbiemer,Piket) VALUES(?,?,?)";
                        transaction.executeSql(sql2,[name,surname,points],function(){
                            //alert("Piket u shtuan me sukses per userin e ri te tabeles pa usera.");
                        });
                }
            });
        });
    }
    else{
        //sepse femijet mund te shkruajne emrin me shkronje te vogel ne vend te asaj kapitale 
        let emrii=getCookie("username");
        let firstletter=getCookie("username").slice(0,1);
        emrii=emrii.replace(firstletter,firstletter.toUpperCase());
        
        alert(emrii+", you overcame the challenge but due to the large number of instructions you didn't earn any points.");
    }
}    


function showTABLE(){
    $("#piket").children().remove();
    $("#piket").append('<tr> <th>ID</th> <th>Name</th> <th>Surname</th> <th>Points</th> </tr>');
	db.transaction(function(transaction){
		var sql="SELECT * FROM scores";
		transaction.executeSql(sql,undefined,function(transaction,result){
        if(result.rows.length){

            for(var i=0;i<result.rows.length;i++){
	            var row=result.rows.item(i);
	            var name=row.Emer;
	            var id=row.Id;
                var surname=row.Mbiemer;
                var piket=row.Piket;

            $("#piket").append('<tr><td>'+id+'</td><td>'+name+'</td><td>'+surname+
            '</td><td>'+piket+'</td></tr>');
            }
        }
        else{
	        $("#itemlist").append('<tr><td colspan="4" align="center">No user Found</td></tr>');
        }


		});
	});
}



















