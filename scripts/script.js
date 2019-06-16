var request = new XMLHttpRequest();

request.open("GET", "https://spaceflightnewsapi.net/api/v1/articles?search=spacex");

request.onload = function() {

	var articles = JSON.parse(request.response);

		for (var i = 0; i < 6; i++) {

			var doc = articles.docs[i];

			var docs = document.getElementById("article");

			var outerDiv = document.createElement("div");
			outerDiv.setAttribute("class", "col1");
			docs.appendChild(outerDiv);

			var innerDiv = document.createElement("div");
			innerDiv.setAttribute("class", "article-container");
			outerDiv.appendChild(innerDiv);

			var img = document.createElement('img');
			img.setAttribute("src", doc.featured_image);
			innerDiv.appendChild(img);

			var textbox = document.createElement("div");
			textbox.setAttribute("class", "textbox");
			innerDiv.appendChild(textbox);

			var a = document.createElement("a");
			a.setAttribute("href", doc.url);
			a.setAttribute("target", "_blank")
			textbox.appendChild(a);
			a.innerHTML = doc.title;
		}

	function myFact() {
		var facts = [
			{"fact": "Mercury and Venus are the only 2 planets in our solar system that have no moons.<br>In total, there are 176 confirmed moons that orbit the planets in our solar system, with some of them being bigger than Mercury itself!"},
			{"fact": "Enceladus, one of Saturn’s smaller moons, reflects 90% of the Sun’s light. Because Enceladus’ icy surface reflects sunlight rather than absorbing it, temperatures reach as low as -394° Fahrenheit (-201° Celsius)."},
			{"fact": "The highest mountain discovered is the Olympus Mons, which is located on Mars. Its peak is 16 miles (25 km) high, making it nearly 3 times higher than Mount Everest."},
			{"fact": "The Sun weighs about 330,000 times more than Earth. In fact, the sun is so gigantic that it contains 99.85% of all mass in our solar system."},
			{"fact": "The Martian day is 24 hours 39 minutes and 35 seconds long. But because Mars orbits the sun slower than the Earth, there are actually 687 Martian days in a Martian year!"},
			{"fact": "According to mathematics, white holes are possible. A white hole is a hypothetical region of space-time which can’t be entered from the outside, although matter and light can escape from within. Basically, it’s the reverse of a black hole."},
			{"fact": "There are more stars in space than there are grains of sand in the world. There are 10 times more stars in the night sky than grains of sand on the Earth, with 70 sextillion stars being visible from Earth through a telescope."},
		];

		var today = new Date();
		var day = today.getDay();
		var i = day;

		var dailyFact = document.getElementById("daily-fact");
		dailyFact.innerHTML = facts[i].fact;
	}

	myFact();

}

request.send();