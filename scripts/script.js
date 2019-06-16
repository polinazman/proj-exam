var request = new XMLHttpRequest();

request.open("GET", "https://spaceflightnewsapi.net/api/v1/articles?search=spacex");

request.onload = function() {

	var articles = JSON.parse(request.response);

		for (var i = 0; i < 6; i++) {

			console.log(articles.docs[i].title);

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

}

request.send();