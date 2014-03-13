var App = (function(lng, undefined) {
    sectionTrigger = function(event) {
        event.stopPropagation();
        setTimeout(function() {
            lng.Notification.success("Event: " + event.type, "Layout events manager", "info", 2);
        }, 500);
    };

    articleTrigger = function(event) {
        event.stopPropagation();
        console.error(event);
    };

    environment = function(event) {
        var environment = lng.Core.environment();
        var el = lng.dom("section > article#environment");

        if (environment.os) {
            el.find("#os > strong").html(environment.os.name);
            el.find("#os > small").html(environment.os.version);
        }
        el.find("#resolution > strong").html(environment.screen.height + "p x " + environment.screen.width + "p");
        el.find("#navigator > strong").html(environment.browser);
        el.find("#navigator > small").html("Mobile: " + environment.isMobile);
    };

    return {
        sectionTrigger: sectionTrigger,
        articleTrigger: articleTrigger,
        environment: environment
    };

})(Lungo);

App.carousel = {prev: null, next: null};


/************************************CREATE EVENT**************************************/

function cancelButton(){
	Lungo.Router.section("dashboard");
	//clearFormEvent();
}

/*function clearFormEvent(){
	$('#location-list option:first-child').attr("selected", true);
	$('#guest-list option:first-child').attr("selected", true);
	Lungo.dom('#description').val('');
	$('#tag-list option:first-child').attr("selected", true);
	$('#status option:first-child').attr("selected", true);
	$('#priority option:first-child').attr("selected", true);
	Lungo.dom('#time-create').val('');
	document.getElementById('fakedate').style.display='block';
	Lungo.dom('#date').val('');
	document.getElementById('fakearrival').style.display='block';
	Lungo.dom('#arrival').val('');
	document.getElementById('fakedeparture').style.display='block';
	Lungo.dom('#departure').val('');
	document.getElementById("contactguest").checked = false;
	document.getElementById('camera_image').style.visibility='hidden';
	document.getElementById('camera_image').style.display='none';
	document.getElementById('camera_image').src = '';
}*/

/*function validateCreateEvent(){
	document.activeElement.blur();
	$("input").blur();
	if(Lungo.dom('#location-list').val() == 0){
		navigator.notification.alert(
			'The event could not be saved. Select a Room or Location.',
			cancelFunction,
			'Create Event Error',
			'Close'
		);
	}else{
		if(Lungo.dom('#description').val() == ''){
			navigator.notification.alert(
				'The event could not be saved. Issue field must not be empty.',
				cancelFunction,
				'Create Event Error',
				'Close'
			);
		}else{
			if(new Date(Lungo.dom('#date').val()) < new Date(Lungo.dom('#datenow').val())){
				navigator.notification.alert(
					'The event could not be saved. You can not select a past date.',
					cancelFunction,
					'Create Event Error',
					'Close'
				);
			}else{
				if(new Date(Lungo.dom('#departure').val()) < new Date(Lungo.dom('#arrival').val())){
					navigator.notification.alert(
						'The event could not be saved. Arrival date could not be less than departure date.',
						cancelFunction,
						'Create Event Error',
						'Close'
					);
				}else{
					createNewEvent();
				}
			}
		}
	}
}*/

/*function createNewEvent() {
	spinnerplugin.show({});
	var url = 'http://mynuvola.com/ios/create_event.php';
	var locationlist = Lungo.dom('#location-list').val();
	var description = Lungo.dom('#description').val();
	var taglist = Lungo.dom('#tag-list').val();
	var status = Lungo.dom('#status').val();
	var priority = Lungo.dom('#priority').val();
	var guestlist = Lungo.dom('#guest-list').val();
	var time = Lungo.dom('#time-create').val();

	if(Lungo.dom('#date').val()==''){
		var date = document.getElementById('fakedate').innerHTML;
	}else{
		var date = Lungo.dom('#date').val();
	}

	var arrival = Lungo.dom('#arrival').val();
	var departure = Lungo.dom('#departure').val();
	var contactguest = document.getElementById("contactguest").checked;

	var data = { locationlist:locationlist, description:description, taglist:taglist, status:status, priority:priority, guestlist:guestlist, time:time, date:date, arrival:arrival, departure:departure, contactguest:contactguest, hotel_id:localStorage.getItem('hotel_id'), account_id:localStorage.getItem('account_id'), code:localStorage.getItem('code'),account_files:localStorage.getItem('account_files'),hotel_files:localStorage.getItem('hotel_files')};
	var parseResponse = function(result){
		if (result[0]["error"] == 1){
			spinnerplugin.hide();
			navigator.notification.alert(
				'The event could not be saved. Please check the information.',
				cancelFunction,
				'Create Event Error',
				'Close'
			);
		}
		else{
			navigator.notification.alert(
				'The event information was sucessfully saved.',
				confirmCreateEvent,
				'Create Event',
				'Close'
			);
		}
	};
	Lungo.Service.post(url, data, parseResponse, "json");
}*/

/*function confirmCreateEvent(){
	clearFormEvent();
	refreshDashboard();
}*/

/*function createEventOptions(){
	spinnerplugin.show({});
	setTimeout(function(){
	var url = 'http://mynuvola.com/ios/create_event_options.php';
	var data = { hotel_id: localStorage.getItem('hotel_id'), account_id:localStorage.getItem('account_id')};

	var parseResponse = function(result){
		if (result[0]["location_list"] == "error"){
			document.getElementById('location-list').innerHTML='<option value="0">There are not locations</option>';
		}else{
			document.getElementById('location-list').innerHTML=result[0]["location_list"];
		}

		if (result[0]["tag_list"] == "error"){
			document.getElementById('tag-list').innerHTML='<option value="0">There are not tags</option>';
		}else{
			document.getElementById('tag-list').innerHTML=result[0]["tag_list"];
		}

		if (result[0]["guest_list"] == "error"){
			document.getElementById('guest-list').innerHTML='<option value="0">There are not guests</option>';
		}else{
			document.getElementById('guest-list').innerHTML=result[0]["guest_list"];
		}

		if (result[0]["time_create"] == "error"){
			document.getElementById('time-create').value = "Time error";
		}else{
			document.getElementById('time-create').value = result[0]["time_create"];
		}
		if (result[0]["date_create"] == "error"){
			document.getElementById('fakedate').innerHTML = 'Date error';
		}else{
			document.getElementById('fakedate').innerHTML = result[0]["date_create"];
			document.getElementById('datenow').value = result[0]["date_create2"];
		}
		spinnerplugin.hide();
		Lungo.Router.section("create-event");
	};
	Lungo.Service.post(url, data, parseResponse, "json");
	},1000);
}*/

function autoSize(){
   $('#addcomment').autosize({append: "|"});
}

function focusComment(){
	$('#addcomment').focus();
}

/************************************END CREATE EVENT**************************************/


/*----UPLOAD IMAGE----*/

function cancelFunction() {

}

function uploadPicture() {
	// Get URI of picture to upload
	var img = document.getElementById('camera_image');
	var imageURI = img.src;
	if (!imageURI || (img.style.display == "none")) {
		navigator.notification.alert(
			'Take picture or select picture from library first.',
			cancelFunction,
			'Attach Error',
			'Close'
		);
		return;
	}

	// Server URL
	server = "http://mynuvola.com/ios/upload_ios.php";

	// Specify transfer options
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	options.mimeType="image/jpeg";
	options.chunkedMode = false;

	// Transfer picture to server
	var ft = new FileTransfer();
	ft.upload(imageURI, server, function(r) {
		navigator.notification.alert(
			'The image has been attached',
			cancelFunction,
			'Upload Successful',
			'Close'
		);
	}, function(error) {
		navigator.notification.alert(
			'The image can not be uploaded',
			cancelFunction,
			'Attach Error',
			'Close'
		);
	}, options);

}

/*function onConfirmAttach(buttonIndex){
	if(buttonIndex==1){
		navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
            },
            function(e) {
                console.log("Error getting picture: " + e);
                navigator.notification.alert(
					'Duis ac fermentum justo, nec gravida ipsum. Phasellus in neque porttitor.', 
					cancelFunction,
					'Error Getting Picture',
					'Close'
				);
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI});
	}else if(buttonIndex==2){
		navigator.camera.getPicture(
            function(uri) {
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = uri;
            },
            function(e) {
                console.log("Error getting picture: " + e);
                navigator.notification.alert(
					'Duis ac fermentum justo, nec gravida ipsum. Phasellus in neque porttitor.', 
					cancelFunction,
					'Error Getting Picture',
					'Close'
				);
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
	}
}*/

/*function attachImage(){
	navigator.notification.confirm(
		'', // message
		 onConfirmAttach,            // callback to invoke with index of button pressed
		'Attach Image',           // title
		['Take a New Photo','Choose Existing Photo','Cancel']         // buttonLabels
	);
}*/

/*----GLOBAL VARIABLES----*/
var vectorHotel;

/*----CHANGE COLOR DAHSBOARD FILTERS----*/
function filterAll(id) {
	if(id=='filterAllId'){
		document.getElementById('filterAllId').className="active";
		document.getElementById('filterAllId').style.color="#fff";
		document.getElementById('filterPendingId').className="";
		document.getElementById('filterCompletedId').className="";
		document.getElementById('filterClosedId').className="";
		document.getElementById('filterPendingId').style.color="";
		document.getElementById('filterCompletedId').style.color="";
		document.getElementById('filterClosedId').style.color="";
	}

	if(id=='filterPendingId'){
		document.getElementById('filterPendingId').className="active2";
		document.getElementById('filterPendingId').style.color="#fff";
		document.getElementById('filterAllId').className="";
		document.getElementById('filterCompletedId').className="";
		document.getElementById('filterClosedId').className="";
		document.getElementById('filterAllId').style.color="";
		document.getElementById('filterCompletedId').style.color="";
		document.getElementById('filterClosedId').style.color="";
	}

	if(id=='filterCompletedId'){
		document.getElementById('filterCompletedId').className="active3";
		document.getElementById('filterCompletedId').style.color="#fff";
		document.getElementById('filterAllId').className="";
		document.getElementById('filterPendingId').className="";
		document.getElementById('filterClosedId').className="";
		document.getElementById('filterAllId').style.color="";
		document.getElementById('filterPendingId').style.color="";
		document.getElementById('filterClosedId').style.color="";
	}

	if(id=='filterClosedId'){
		document.getElementById('filterClosedId').className="active4";
		document.getElementById('filterClosedId').style.color="#fff";
		document.getElementById('filterAllId').className="";
		document.getElementById('filterPendingId').className="";
		document.getElementById('filterCompletedId').className="";
		document.getElementById('filterAllId').style.color="";
		document.getElementById('filterPendingId').style.color="";
		document.getElementById('filterCompletedId').style.color="";
	}
}

/*----NATIVE ALERTS & NOTIFICATIONS----*/
function loginError() {
	navigator.notification.alert(
		'El nombre de usuario o la contraseña que ha introducido no son válidos. Por favor inténtelo de nuevo.',
		tryAgainLogin,
		'Inicio de sesión',
		'Deseo inténtarlo de nuevo'
	);
}

/*function loginHotelError() {
	navigator.notification.alert(
	'Your account is not associated with any hotel',     // message
	cancelFunction,         // función 'callback' alertCallback
	'Sign In Error',            // title
	'Try again'                // buttonName
	);
}*/

/*----LOG OUT----*/
function logout() {
	window.localStorage.clear();
	Lungo.Router.section("login");
}

/*----REFRESH DAHSBOARD EVENTS----*/
/*function refreshDashboard() {
	spinnerplugin.show({});
	setTimeout(function(){listEvent(localStorage.getItem('hotel_id'));},1000);
}*/

/*----MISCELLANEOUS METHODS----*/
function tryAgainLogin() {
	Lungo.dom('#txtPass').val('');
}

function cancel() {
	
}


/*function listEvent(hotel_id) {
	setTimeout(function(){
	var url = 'http://mynuvola.com/ios/listevent.php';
	var data = { hotel_id: hotel_id};
	var allevents='';

	var parseResponse = function(result){
		if (result[0]["pending_events"] == "error"){
			document.getElementById('main-article2').innerHTML='<div class="empty"><span class="icon trophy"></span><strong>Empty pending event list</strong><small>You can be champion that creates the first Nuvola event!</small><button class="anchor" data-icon="plus-sign" data-label="Create event" onclick="createEventOptions();"><span class="icon plus-sign"></span><abbr>Create event</abbr></button></div>';
		}else{
			document.getElementById('main-article2').innerHTML=result[0]["pending_events"];
			allevents+='<li class="anchor theme custom-sep" style="border-bottom:1px solid #d0d0d0;">Pending Events</li>';
			allevents+=result[0]["pending_events"];
		}

		if (result[0]["completed_events"] == "error"){
			document.getElementById('main-article3').innerHTML='<div class="empty"><span class="icon trophy"></span><strong>Empty completed event list</strong><small>You can be champion that creates the first Nuvola event!</small><button class="anchor" data-icon="plus-sign" data-label="Create event" onclick="createEventOptions();"><span class="icon plus-sign"></span><abbr>Create event</abbr></button></div>';
		}else{
			document.getElementById('main-article3').innerHTML=result[0]["completed_events"];
			allevents+='<li class="anchor theme" style="border-bottom:1px solid #d0d0d0;background-color:#6c9c16;">Completed Events</li>';
			allevents+=result[0]["completed_events"];
		}

		if (result[0]["closed_events"] == "error"){
			document.getElementById('main-article4').innerHTML='<div class="empty"><span class="icon trophy"></span><strong>Empty closed event list</strong><small>You can be champion that creates the first Nuvola event!</small><button class="anchor" data-icon="plus-sign" data-label="Create event" onclick="createEventOptions();"><span class="icon plus-sign"></span><abbr>Create event</abbr></button></div>';
		}else{
			document.getElementById('main-article4').innerHTML=result[0]["closed_events"];
			allevents+='<li class="anchor theme" style="border-bottom:1px solid #d0d0d0;background-color:#8c0608;">Closed Events</li>';
			allevents+=result[0]["closed_events"];
		}

		if (allevents == ''){
			document.getElementById('main-article1').innerHTML='<div class="empty"><span class="icon trophy"></span><strong>Empty event list</strong><small>You can be champion that creates the first Nuvola event!</small><button class="anchor" data-icon="plus-sign" data-label="Create event" onclick="createEventOptions();"><span class="icon plus-sign"></span><abbr>Create event</abbr></button></div>';
		}else{
			document.getElementById('main-article1').innerHTML=allevents;
		}

		spinnerplugin.hide();
		Lungo.Router.section("dashboard");
	};

	Lungo.Service.post(url, data, parseResponse, "json");
	},1000);
}*/

/*function onConfirm(buttonIndex){
	if(vectorHotel.length>1){
		spinnerplugin.show({});
	}

	if(buttonIndex==(vectorHotel.length)+1){
		window.localStorage.clear();
		spinnerplugin.hide();
	}else{
		window.localStorage.setItem("hotel_id", vectorHotel[buttonIndex-1]["hotel_id"]);
		setTimeout(function(){listEvent(localStorage.getItem('hotel_id'));},500);
	}
}*/

/*function listHotel() {
	var url = 'http://mynuvola.com/ios/listhotel.php';
	var data = { user_id: localStorage.getItem('user_id') };

	var parseResponse = function(result){
		if (result[0]["hotel_name"] == "error"){
			spinnerplugin.hide();
			loginHotelError();
		}
		else{
			vectorHotel = result;
			if(result.length>1){
				spinnerplugin.hide();
				var listah = '';
				result.forEach(function(entry) {
					listah += entry["hotel_name"]+',';
				});
				listah += 'Cancel';
				navigator.notification.confirm(
					'',  // message
					 onConfirm,              // callback to invoke with index of button pressed
					'Select Hotel',            // title
					""+listah+""          // buttonLabels
				);
			}else{
				onConfirm(1);
			}
		}
	};
	Lungo.Service.post(url, data, parseResponse, "json");
}*/

function chargeResources(){
	var url 	= 'http://altiviaot.com/SmartEmergency/list_resources.php';
	var data 	= { user_id: localStorage.getItem('user_id') };

	var parseResponse = function(result){
		if (result["error"] == 1){
			spinnerplugin.hide();
			loginHotelError();
		}else{
			jQuery.each(result, function( i, val ) {
				$('#type_services').append(val);
			});
			changeToDashboard();
		}
	};
	Lungo.Service.post(url, data, parseResponse, "json");
}

function changeToDashboard() {
	spinnerplugin.hide();
	Lungo.Router.section("dashboard");
}

Lungo.Events.init({
	'tap article#art_login button[data-action=login]':
	function (){
		document.activeElement.blur();
		$("input").blur();
		setTimeout(function(){spinnerplugin.show({})},500);
		var url 		= 'http://altiviaot.com/SmartEmergency/login.php';
		var usuario 	= Lungo.dom('#txtEmail').val();
		var password2 	= Lungo.dom('#txtPass').val();
		var data 		= { username: usuario, password: password2 };
		var parseResponse = function(result){
			if(result["error"] == 1){
				spinnerplugin.hide();
				loginError();
			}else if(result["error"] == 0){
				window.localStorage.setItem("user_id", result["user_id"]);
				window.localStorage.setItem("name", result["name"]);
				window.localStorage.setItem("lastname", result["lastname"]);
				window.localStorage.setItem("username", result["username"]);
				window.localStorage.setItem("password", result["password"]);
				window.localStorage.setItem("push_key", result["push_key"]);
				/*navigator.notification.alert(
					'Bienvenido a Smart Emergency',
					cancel,
					'Inicio de sesión',
					'Cerrar'
				);*/
				chargeResources();
			}
		};
		Lungo.Service.post(url, data, parseResponse, "json");
	},

});

Lungo.ready(function(){});
