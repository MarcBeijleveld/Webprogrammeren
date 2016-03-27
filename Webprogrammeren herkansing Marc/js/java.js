var i = 0;

function inloggen() {

	var gb = myForm.elements["gb"].value;
	var ww = myForm.elements["ww"].value;

	var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Marc"];
		

	for(var j = 0; j < gbArray.length; j++) {
		if(gb == gbArray[j] && ww == "qwerty") {
			document.getElementById("demo").innerHTML
			location.href="../html/timeline.html";
		}
	}

	if(gb == "" && ww == ""){
		document.getElementById("demo").innerHTML = ("U heeft geen gebruikersnaam en/of wachtwoord ingevuld!")
		$( "#demo" ).effect( "shake" )

		i++;
		}
	
	else{
		document.getElementById("demo").innerHTML = ("U heeft een onjuiste gebruikersnaam en/of wachtwoord ingevuld!")
		$( "#demo" ).effect( "shake" )

		i++;
		}

		if(i>2){
			document.getElementById("demo").innerHTML = ("U heeft 3x onjuiste gegevens ingevuld en kunt niet meer inloggen!")
			$("button").hide();
			$("input").prop('disabled', true);
		}
}
	
	var filledInFields = 6

	function reg(){
		var gb2 = myForm.elements["gb2"].value;

		var gbArray = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "Marc"];
	
		for(var j = 0; j < gbArray.length; j++) {
			if(gb2 == gbArray[j]) {
				document.getElementById("demo").innerHTML = ("Deze gebruikersnaam is al in gebruik");
				$( "#demo" ).effect( "shake" )
				filledInFields--;
			}
		}

	$(".requiredAttr").each(function(){
		if ($(this).val().length < 1){
		   document.getElementById("demo").innerHTML = ("U heeft niet alle invoervelden ingevuld")
		   filledInFields--;
        }	

   	 })
	
		if(filledInFields == 6){
			location.href="../html/timeline.html";
		}
	}


	function checkPass(){

   	  	var pass1 = document.getElementById('pass1');
    	var pass2 = document.getElementById('pass2');

   		var message = document.getElementById('confirmMessage');

    	var goodColor = "#66cc66";
    	var badColor = "#ff6666";


    	if(pass1.value == pass2.value){

       		pass2.style.backgroundColor = goodColor;
        	message.style.color = goodColor;
        	message.innerHTML = "Wachtwoord komt overeen!"
    	}else{

       		pass2.style.backgroundColor = badColor;
        	message.style.color = badColor;
        	message.innerHTML = "Wachtwoord komt niet overeen!"
    	}
	}  

$(document).ready(function(){

// voeg Bericht toe
	$(".addBericht").click(function() {
		var input = $("#inputBericht").val();

		var inputIsEmpty = $.trim($('#inputBericht').val());

		if(inputIsEmpty.length !== 0) {
			var bericht = "<div class='bericht'><div class='omschrijving'>"+input+"</div><div class='waardering'><div class='likes'>1</div><div class=''><a href='#' class='removeBericht'>Verwijderen</a><a href='#' class='addLike'>Vind ik leuk</a></div></div><div class='addComments'><input type='text' class='inputComment' placeholder='Reageer op dit bericht ..'/><button class='addComment'>Reageer op dit bericht</button></div><div class='comments'></div>";
			$("#berichten").append(bericht);
	// input field leeg makende
		$("#inputBericht").val('');
		$("#error").text('');
	} else {
		$("#error").text('Het veld is niet ingevuld.');
		}
	});

// like het bericht
	$("body").on("click", ".addLike", function(){
		var likes = $(this).parent().siblings(".likes").text();
		likes++;
		$(this).parent().siblings(".likes").text(likes);
	});

// reageer op het bericht
	$("body").on("click", ".addComment", function(){
		var input = $(this).siblings(".inputComment").val();

		var inputCommentIsEmpty = $.trim($(this).siblings(".inputComment").val());

		if(inputCommentIsEmpty.length !== 0) {
			var comment = "<div class='comment'><div class='message'>"+input+"</div><div class='commentControl'><a href='#' class='removeComment'>Verwijder</a></div></div>";
			$(this).parent().siblings(".comments").append(comment);

			$(this).siblings(".inputComment").val('');
			$("#error").text('');
		} else {
			$("#error").text('Het veld is niet ingevuld.');
		}
	});				

// verwijder comment
	$("body").on("click", "a.removeComment", function(){
		$(this).closest('.comment').remove();
	});

// verwijder bericht

	$("body").on("click", "a.removeBericht", function(){
		$(this).closest('.bericht').remove();
	});





    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });

    	//registreren

	
//vriendlijst
    $(".adddate6").click(function(){
        $(".adddate6").hide();
    });

    $(".adddate7").click(function(){
        $(".adddate7").hide();
    });

    $(".adddate8").click(function(){
        $(".adddate8").hide();
    });

    $(".adddate9").click(function(){
        $(".adddate9").hide();
    });

    $(".adddate10").click(function(){
        $(".adddate10").hide();
    });

    $(".adddate11").click(function(){
        $(".adddate11").hide();
    });

    $(".adddate12").click(function(){
        $(".adddate12").hide();
    });

    $(".adddate13").click(function(){
        $(".adddate13").hide();
    });


    $(".adddate14").click(function(){
        $(".adddate14").hide();
    });

//chatten
$('.chat_head').click(function(){
		$('.chat_body').slideToggle('slow');
	});
	$('.msg_head').click(function(){
		$('.msg_wrap').slideToggle('slow');
	});
	
	$('.close').click(function(){
		$('.msg_box').hide();
	});
	
	$('.user').click(function(){

		$('.msg_wrap').show();
		$('.msg_box').show();
	});
	
	$('textarea').keypress(
    function(e){
        if (e.keyCode == 13) {
            var msg = $(this).val();
			$(this).val('');
			if(msg!='')
			$('<div class="msg_b">'+msg+'</div>').insertBefore('.msg_push');
			$('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
        }
    });
});