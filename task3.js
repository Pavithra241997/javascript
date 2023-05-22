function stop()
		{
			var stopLight = document.getElementById('stopLight');
			stopLight.style.backgroundColor = 'red';
		 	  readyLight.style.backgroundColor = '';
			   goLight.style.backgroundColor='';

		}
		function ready()
		{
			var readyLight = document.getElementById('readyLight');
			readyLight.style.backgroundColor = 'yellow';
			stopLight.style.backgroundColor = '';
			   goLight.style.background='';

		}
		function go()
		{
			var goLight = document.getElementById('goLight');
			goLight.style.backgroundColor = 'green';
		 	  readyLight.style.backgroundColor = '';
			   stopLight.style.backgroundColor='';

		}