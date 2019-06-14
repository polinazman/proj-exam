var request = new XMLHttpRequest()

request.open('GET', 'https://api.spacexdata.com/v3/launches/next', true)

request.onload = function() {
	var launch = JSON.parse(request.response)
			console.log(launch.launch_date_utc)

			var nextLaunch = document.getElementById("launch-countdown");

			var utcDate = new Date(launch.launch_date_utc)

			var timer = setInterval(function() {
				var now = new Date().getTime();
				var t = utcDate - now;

				if (t >= 0) {
					var days = Math.floor(t / (1000 * 60 * 60 * 24));
					var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 *60));
					var secs = Math.floor((t % (1000 * 60 )) / 1000);
					
					var timer = document.getElementById("timer");

					/*var timerDays = document.createElement("timer-days");
					timerDays.setAttribute("class", "timer-days");
					timer.appendChild(timerDays);
					timerDays.innerHTML = days + "d ";

					var timerHours = document.createElement("timer-hours");
					timerHours.setAttribute("class", "timer-hours");
					timer.appendChild(timerHours);
					timerHours.innerHTML = hours + "h ";

					var timerMins = document.createElement("timer-mins");
					timerMins.setAttribute("class", "timer-mins");
					timer.appendChild(timerMins);
					timerMins.innerHTML = mins + "m ";

					var timerSecs = document.createElement("timer-secs");
					timerSecs.setAttribute("class", "timer-secs");
					timer.appendChild(timerSecs);
					timerSecs.innerHTML = secs + "s ";*/

					document.getElementById("days").innerHTML = days + "d ";
					document.getElementById("hours").innerHTML = hours + "h ";
					document.getElementById("mins").innerHTML = mins + "m ";
					document.getElementById("secs").innerHTML = secs + "s ";

				} else {
					document.getElementById("timer").innerHTML = "The launch starts now!";
				}
			}, 1000);

}

request.send()