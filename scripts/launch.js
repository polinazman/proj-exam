var request = new XMLHttpRequest();

request.open("GET", "https://api.spacexdata.com/v3/launches/upcoming");

request.onload = function() {

			var launch = JSON.parse(request.response);

					var nextLaunch = document.getElementById("launch-countdown");

					var utcDate = new Date(launch[0].launch_date_utc)

					var timer = setInterval(function() {
						var now = new Date().getTime();
						var t = utcDate - now;

						if (t >= 0) {
							var days = Math.floor(t / (1000 * 60 * 60 * 24));
							var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 *60));
							var secs = Math.floor((t % (1000 * 60 )) / 1000);
							
							var timer = document.getElementById("timer");

							document.getElementById("days").innerHTML = days + "d ";
							document.getElementById("hours").innerHTML = hours + "h ";
							document.getElementById("mins").innerHTML = mins + "m ";
							document.getElementById("secs").innerHTML = secs + "s ";

						} else {
							document.getElementById("timer").innerHTML = "The launch starts now!";
						}
					}, 1000);

					for ( i = 0; i < launch.length; i++) {

					var upcoming = launch[i];

					var upcomingDate = new Date(upcoming.launch_date_utc);
					var outputDay = upcomingDate.getDate();
					var outputMonth = upcomingDate.toLocaleString('en-us', { month: 'long' })
					var outputYear = upcomingDate.getFullYear();
					var outputDate = outputMonth + " " + outputDay + " " + outputYear;
					var upcomingSite = upcoming.launch_site.site_name_long;
					var upcomingRocket = upcoming.rocket.rocket_name + " " + upcoming.rocket.rocket_type;
					var upcomingMission = upcoming.mission_name;

					console.log(upcomingMission);

					var upcomingLaunch = document.getElementById("launch");

					var tableContainer = document.createElement("div");
					tableContainer.setAttribute("class", "table-container");
					upcomingLaunch.appendChild(tableContainer);

					var tableTop = document.createElement("div");
					tableTop.setAttribute("class", "table-top");
					tableContainer.appendChild(tableTop);

					var dateContainer = document.createElement("div");
					dateContainer.setAttribute("class", "date");
					tableTop.appendChild(dateContainer);
					dateContainer.innerHTML = outputDate;

					var info = document.createElement("div");
					info.setAttribute("class", "info-container");
					tableTop.appendChild(info);
					info.innerHTML = upcomingRocket + " - " + upcomingMission;

					var site = document.createElement("div");
					site.setAttribute("class", "site-container");
					tableContainer.appendChild(site);
					site.innerHTML = "Launch site: ";

					var siteInfo = document.createElement("div");
					siteInfo.setAttribute("class", "site-info");
					tableContainer.appendChild(siteInfo);
					siteInfo.innerHTML = upcomingSite;
					}
}
request.send();