var login = document.getElementById('login');

login.addEventListener('click', function(){
	document.getElementById('loginsection').innerHTML = "Welcome, " + loginForm.elements.user.value;
});
