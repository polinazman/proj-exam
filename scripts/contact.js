document.getElementById("submitContact").onclick = validateForm;

function validateForm() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
	var message = document.getElementById("message").value

	if (firstName === "" || firstName === null) {
		document.getElementById("firstNameError").style.display = "inline";
		document.getElementById("firstName").focus();
		return false;
	} else {
		document.getElementById("firstNameError").style.display = "none";
	}

	if (lastName === "" || lastName === null) {
		document.getElementById("lastNameError").style.display = "inline";
		document.getElementById("lastName").focus();
		return false;
	} else {
		document.getElementById("lastNameError").style.display = "none";
	}

	if (emailRegexp.test(email) === false) {
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("email").focus();
		return false;
	} else {
		document.getElementById("emailError").style.display = "none";
	}

	if (message === "" || message === null) {
		document.getElementById("messageError").style.display = "inline";
		document.getElementById("message").focus();
		return false;
	} else {
		document.getElementById("messageError").style.display = "none";
	}
}