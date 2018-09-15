var hamburgerClosed = true;

document.addEventListener("DOMContentLoaded", function(){
	begin();
});

function begin() {
	document.getElementById('hamburger_menu_icon').onclick = function(e) {
		toggleHamburgerMenuIcon();
	};

	document.getElementById('close_hamburger_menu_icon').onclick = function(e) {
		toggleHamburgerMenuIcon();
	};

	document.getElementById('shadow_div').onclick = function(e) {
		toggleHamburgerMenuIcon();
	};

	//menu links
	document.getElementById('overview_menu_item').onclick = function(e) {
		toggleHamburgerMenuIconClosed();
		navigateToPage(this);
	};

	document.getElementById('schedule_menu_item').onclick = function(e) {
		toggleHamburgerMenuIconClosed();
		navigateToPage(this);
	};

	document.getElementById('projects_menu_item').onclick = function(e) {
		toggleHamburgerMenuIconClosed();
		navigateToPage(this);
	};

	document.getElementById('resources_menu_item').onclick = function(e) {
		toggleHamburgerMenuIconClosed();
		navigateToPage(this);
	};
	
	return false;
}

function fadeContent(showShadow) {
	var shadowDiv = document.getElementById("shadow_div");
	if (showShadow) {
		shadowDiv.style.opacity = "0.7";
		shadowDiv.style.zIndex = "1";
	}
	else {
		shadowDiv.style.opacity = "0";
		shadowDiv.style.zIndex = "-1";
	}
}

function toggleHamburgerMenuIcon() {
	var open = document.getElementById("hamburger_menu_icon");
	var close = document.getElementById("close_hamburger_menu_icon");

	if (hamburgerClosed) {
		open.style.display = 'none';
		close.style.display = 'block';

		var menu = document.getElementById("menu");
		menu.style.top = "4rem";
	}
	else {
		open.style.display = 'block';
		close.style.display = 'none';

		var menu = document.getElementById("menu");
		menu.style.top = "-100%";
	}

	fadeContent(hamburgerClosed);

	hamburgerClosed = !hamburgerClosed;
}

function toggleHamburgerMenuIconClosed() {
	var open = document.getElementById("hamburger_menu_icon");
	var close = document.getElementById("close_hamburger_menu_icon");

	open.style.display = 'block';
	close.style.display = 'none';

	fadeContent(false);

	var menu = document.getElementById("menu");
	menu.style.top = "-100%";
}

function navigateToPage(object) {
	var classes = object.classList;
	if (classes != null) {
		var theId = classes[0];
		var link = document.getElementById(theId);
		link.click();
	}
	else {
		return false;
	}
}