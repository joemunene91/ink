const mailField = document.getElementById('inputLife');
const signUp = document.getElementById('email-phone');

const signAnony = document.getElementById('signAnony');

const signYahoo = document.getElementById('signYahoo');
const signGoogle = document.getElementById('signGoogle');

const phoneNumberField = document.getElementById('inputLife');
const codeField = document.getElementById('code');
const signInWithPhoneButton = document.getElementById('signInWithPhone');

const theFlag7 = document.getElementById('the-flag7');

const phoneLog = document.getElementById('phone-log');
const emailLog = document.getElementById('email-log');

const jinaHolder = document.getElementById('their-name');

var firebaseConfig = {
    apiKey: "AIzaSyCurB1-NpRENDQBy1iEiq1j7LT53M0S5Xw",
    authDomain: "darkweb-lats.firebaseapp.com",
    projectId: "darkweb-lats",
    storageBucket: "darkweb-lats.appspot.com",
    messagingSenderId: "1015438684187",
    appId: "1:1015438684187:web:64407c1ec43d96b7ff88be",
    measurementId: "G-LXJWRPYF3R"
};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

phoneLog.addEventListener('click', () => {
	document.getElementById('invoice-type').innerHTML = 'PHONE LOGIN';
	
	document.getElementById('save-1').innerHTML = `
		A <span>code</span> will be sent to the <span>phone</span><br>
		you enter below,
	`;
	document.getElementById('save-2').innerHTML = `
		Use the code to sign in on this <br> <span>darkweb</span> store.
	`;

	fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		phoneNumberField.value = data.country_calling_code;
		phoneNumberField.setAttribute('type', 'tel');
		phoneNumberField.style.textAlign = 'left';
		theFlag7.style.display = 'flex';
		phoneNumberField.setAttribute('pattern', '[+]{1}[0-9]{11,14}');
		signUp.innerHTML = `Verify Now <img src="img/partners/phone.png">`;
	});
});


emailLog.addEventListener('click', () => {
	document.getElementById('invoice-type').innerHTML = 'EMAIL LOGIN';

	document.getElementById('save-1').innerHTML = `
		A <span>link</span> will be sent to the <span>email</span><br>
		you enter below,
	`;
	document.getElementById('save-2').innerHTML = `
		Use the link to sign in on this <br> <span>darkweb</span> store.
	`;

	theFlag7.style.display = 'none';
	mailField.setAttribute('type', 'email');
	mailField.value = '';
	phoneNumberField.style.textAlign = 'center';
	mailField.setAttribute('placeholder', 'Enter your Email...');
	signUp.innerHTML = `Verify Email <img src="img/partners/gmails.png" class="gmails">`;
});


const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;

	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
		'size': 'invisible'
	});
	
	const phoneNumber = phoneNumberField.value;
	const appVerifier = window.recaptchaVerifier;

	const signInWithPhone = sentCodeId => {
		const code = codeField.value;
		const credential = firebase.auth.PhoneAuthProvider.credential(sentCodeId, code);
		auth.signInWithCredential(credential)
			.then(() => {
				window.location.assign('home');
			})
			.catch(error => {
				var shortCutFunction = 'success';
				var msg = `${error.message}`;
				toastr.options =  {
					closeButton: true, debug: false, newestOnTop: true, progressBar: true,
					positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
				};
				var $toast = toastr[shortCutFunction](msg);
				$toastlast = $toast;
			})
	}

	var actionCodeSettings = {
		url: `https://www.darkweb.lat/invoice#${mailField.value}`,
		handleCodeInApp: true,
	};

	if(email.includes('@')) {
		auth.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => {

			var shortCutFunction = 'success';
			var msg = `
				A verification link has been sent to:   <hr class="to-hr hr15-bot">
				${email}<hr class="hr10-nil">
			`;

			toastr.options =  {
				closeButton: true, debug: false, newestOnTop: true, progressBar: true,
				positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		})
		.catch(error => {
			var shortCutFunction = 'success';
			var msg = `${error.message}`;
			toastr.options =  {
				closeButton: true, debug: false, newestOnTop: true, progressBar: true,
				positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
			};
			var $toast = toastr[shortCutFunction](msg);
			$toastlast = $toast;
		});
	} else if(email.includes('+') && (email.length >= 10)) { 

		auth.signInWithPhoneNumber(phoneNumber, appVerifier)
			.then(confirmationResult => {
				const sentCodeId = confirmationResult.verificationId;
				signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));

				var shortCutFunction = 'success';
				var msg = `
					Verification code sent to your phone:  <hr class="to-hr hr15-bot">
					${phoneNumber}. <hr class="hr10-nil">
				`;

				toastr.options =  {
					closeButton: true, debug: false, newestOnTop: true, progressBar: true,
					positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
				};
				var $toast = toastr[shortCutFunction](msg);
				$toastlast = $toast;

				$('#verifyModal').modal('show');
				$('#discountModal').modal('hide');
			})

	} else {
		var shortCutFunction = 'success';
		var msg = `
			Enter a valid email / phone number.  <hr class="to-hr hr15-bot">
			Logs are sent via email or SMS.  <hr class="hr10-nil">
		`;
		toastr.options =  {
			closeButton: true, debug: false, newestOnTop: true, progressBar: true,
			positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	}
}



signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);

document.getElementById('the-life').addEventListener('click', focusOn);
function focusOn() {
	document.getElementById('inputLife').focus();
}

mailField.addEventListener('focus', focusBro);
function focusBro() {
	mailField.style.textAlign = 'left';
	mailField.removeAttribute('placeholder');
}

mailField.addEventListener('keyup', checkBra);
function checkBra() {
	if(mailField !== null) {
		if(mailField.value.match(/^([0-9])/)) {
			phoneNumberField.setAttribute('type', 'tel');
			phoneNumberField.style.textAlign = 'left';
			theFlag7.style.display = 'flex';
			phoneNumberField.setAttribute('pattern', '[+]{1}[0-9]{11,14}');
			signUp.innerHTML = `Verify Phone <img src="img/partners/phone.png">`;
			
			fetch('https://ipapi.co/json/')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				phoneNumberField.value = data.country_calling_code;
			});
		} else if(mailField.value.match(/^([A-Za-z])/)) {
			theFlag7.style.display = 'none';
		
			mailField.setAttribute('type', 'email');
			mailField.style.textTransform = 'lowercase';
			signUp.innerHTML = `Verify Email <img src="img/partners/gmails.png" class="gmails">`;
		}
	}
} 

mailField.addEventListener('input', againBro);
function againBro() {
    if (!this.value) {
        mailField.setAttribute('type', 'text');
		theFlag7.style.display = 'flex';
		signUp.innerHTML = `Verify Now <img src="img/partners/check.png">`;
    }
}


const signInAnony = () => {
	auth.signInAnonymously().then(() => {
		$('#exampleModal').modal('show');

		fetch('https://ipapi.co/json/')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			document.getElementById('mail-p1').innerHTML = `
				IP address: <span>${data.ip}</span> <br>
				Region: ${data.city}, ${data.country_name}.
			`;
		});

		if(platform.manufacturer !== null) {
			document.getElementById('mail-p3').innerHTML = `
				Browser: <span>${platform.name}</span>, <br> 
				Device: <span id="uidz">${platform.manufacturer} ${platform.product} ${platform.os}</span>.
				
			`;
		} else {
			document.getElementById('mail-p3').innerHTML = `
				Browser: <span>${platform.name}</span>, <br>
				Device: <span id="uidz">${platform.os}</span>.
			`;
		}
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options =  {
			closeButton: true, debug: false, newestOnTop: true, progressBar: true,
			positionClass: 'toast-top-full-width', preventDuplicates: true, onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signAnony.addEventListener("click", signInAnony);


const signInWithYahoo = () => {
	const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
	auth.signInWithPopup(yahooProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signYahoo.addEventListener("click", signInWithYahoo);


const signInWithGoogle = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider;
	auth.signInWithPopup(googleProvider).then(() => {
		auth.currentUser.sendEmailVerification();
		window.location.assign('home');
	}).catch(error => {
		var shortCutFunction = 'success';
		var msg = `${error.message}`;
		toastr.options = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-top-full-width',
			preventDuplicates: true,
			onclick: null
		};
		var $toast = toastr[shortCutFunction](msg);
		$toastlast = $toast;
	});
};
signGoogle.addEventListener("click", signInWithGoogle);

if(!localStorage.getItem('darkweb-logs')) {
	localStorage.setItem('banklogs', []);
	localStorage.setItem('darkweb-logs', true);
}


auth.onAuthStateChanged(user => {
	if(user) {
		$('#exampleModal').modal('show');

		fetch('https://ipapi.co/json/')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			document.getElementById('mail-p1').innerHTML = `
				IP address: <span>${data.ip}</span> <br>
				Region: ${data.city}, ${data.country_name}.
			`;
		});

		if(platform.manufacturer !== null) {
			document.getElementById('mail-p3').innerHTML = `
				Browser: <span>${platform.name}</span>, <br> 
				Device: <span id="uidz">${platform.manufacturer} ${platform.product} ${platform.os}</span>.
				
			`;
		} else {
			document.getElementById('mail-p3').innerHTML = `
				Browser: <span>${platform.name}</span>, <br>
				Device: <span id="uidz">${platform.os}</span>.
			`;
		}
	 
		if(user.email) {
			var themail = user.email;
			var theaddress = themail.substring(0, themail.indexOf('@'));
			
			if (user.displayName && user.email) {
				jinaHolder.innerText = user.displayName;
			} else if (!user.displayName && user.email) {
				jinaHolder.innerHTML = theaddress;
			} 
		} else if(user.phoneNumber) {
			jinaHolder.innerHTML = user.phoneNumber;
		} 
	}
});

fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		var countyCode = data.country_code;
		var newCode = countyCode.toLowerCase();

		document.getElementById('the-flag7').src = `https://flagcdn.com/144x108/${newCode}.png`;
	});


document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};
if(!window.location.href.includes('5502')) {
	document.addEventListener("keydown", function (event) {
		if (event.ctrlKey) {
			event.preventDefault();
		}   
	});
}



if(!window.location.href.includes('5502')) {
	function disableCtrlKeyCombination(e){
		var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'i', 'v', 'j' , 'w', 'i');
		var key;
		var isCtrl;
		if(window.event){
			key = window.event.keyCode;
			if(window.event.ctrlKey) {
				isCtrl = true;
			} else {
				isCtrl = false;
			}
		} else {
			key = e.which; 
			if(e.ctrlKey) {
				isCtrl = true;
			}
			else {
				isCtrl = false;
			}
		}
		//if ctrl is pressed check if other key is in forbidenKeys array
		if(isCtrl) {
			for(i=0; i<forbiddenKeys.length; i++) {
				if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
					alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
					return false;
				}
			}
		}
		return true;
	}
}