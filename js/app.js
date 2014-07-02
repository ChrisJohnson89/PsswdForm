//Problem: Hints are shown even when form is valid

//Solution: Hide and Show them at appropriate times

//Hide Hints

$("form span").hide();

//When event happens on password input 

$("#password").focus(function(){
	$(this).val().length > 8
	//Find out if password is valid
	
		//Hide hint if valid
		
		//else show hint

});
	
//When event happens on confirmation input

	//Find out if password and confimation match

		//Hide hint if match 

		//else show the hint 