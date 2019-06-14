var request = new XMLHttpRequest()

request.open('GET', 'http://api.open-notify.org/astros.json', true)

request.onload = function() {
	var livestats = JSON.parse(request.response)

		var numberOfPeople = livestats.number

		document.getElementById("number").innerHTML = numberOfPeople;

		var i = numberOfPeople

		for ( i = 0; i < livestats.people.length; i++) {
			var names = livestats.people[i].name;

			var outputNames = names.toString();

			document.getElementById("people").innerHTML += outputNames + "<br>";

		}
}

request.send()