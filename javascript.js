var block = 0;

	function inloggen(){
		var gb = myForm.elements["gb"].value;
		var ww = myForm.elements["ww"].value;
		var valid = false;
		//document.getElementById("demo2").innerHTML = block;
		var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Stefan"];

		for(var index=0; index < gbArray.length; index++){

			if(gb == gbArray[index] && ww == "qwerty"){
			valid = true;
			break;
			}
		}

		if(valid == true){
			location.href="timeline.html"
		}
		else{
			if(block > 2){
			block = 0;
			document.getElementById("demo").innerHTML = "3x fout, website wordt geblokkeerd";
			$(".container1").effect("explode");
			}
			
			else{
				//bericht dat 	veld leeg is en niet goed ingevuld
				if(gb == "" || ww == ""){
				block++;
				document.getElementById("demo").innerHTML = "U heeft geen gebruikersnaam of wachtwoord ingevuld!";
				$(".container1").effect("shake");
				}

				else{
				block++;
				document.getElementById("demo").innerHTML = "De inloggegevens zijn onjuist!";
				$(".container1").effect("shake");
				}
			}
		}

	};

	
$(document).ready(function(){

	$(document).on('click', '#add', function(){
		var message = document.getElementById('message').value;
		$("#timeline").append("<article><p>"+message+"</p><button class='verwijder'>Verwijderen</button></article>");
	});

	$(document).on('click', '.verwijder', function(){
		$(this).parent().slideUp()
			$(this).remove()
	});




	function readURL(input) {
     	if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#imgInp").change(function(){
        readURL(this);
    });
