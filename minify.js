//This is where all of the global variables go

//creates an array for the alphabet and numbers
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var alphabet_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var baconian_number = ['aaaaa', 'aaaab', 'aaaba', 'aaabb', 'aabaa', 'aabab', 'aabba', 'aabbb', 'abaaa', 'abaab', 'ababa', 'ababb', 'abbaa', 'abbab', 'abbba', 'abbbb', 'baaaa', 'baaab', 'baaba', 'baabb', 'babaa', 'babab', 'babba', 'babbb', 'bbaaa', 'bbaab'];
//Takes message and shift number and creates a variable for the message
var message;

var shift;

var key;

var encryptionWord = [];

var encryptionWordCheck = [];

var encryptionNumCheck = [];

var decryptionWord = [];

var encryption = [];

var decryption = [];

//Hill Cipher

var hillSplit = [];

var hillSplitNum = [];

var hillKey = [];

var hillKeyNum = [];

var hillKeyNumproto = [];

var hillKeyCheck = [];

var hillKeyNumCheck = [];

var hillencryptWord = [];

function repeat(key) {
	var x=0;
	for(var i=0; i<alphabet.length; i++) {
		
		if(alphabet[i] == key[i]) {
			console.log(key[i]);
			x++;
		}
	}
	if(x > 0) {
		keyGenerate();
	} else {
		console.log('good!');
	}

}

function encode_af() {

	//Resets encrypted message
	encryptionWord = [];
	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;
	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {
		alert('Please submit a message');
		return false;
	}

	//Gets key number that was submitted
	var key1 = parseInt(document.getElementById('key').value);
	var key2 = parseInt(document.getElementById('key2').value);
	//Checks if key number is actually a number
	if(isNaN(key1) === true ) {
		alert('Please submit a number');
		return false;
	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;
	//Displays key number
	document.getElementById("keys").innerHTML = 'Function: ' + 'f(x) = ' + key1 + 'x + ' + key2 + ' mod 26';

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {
		message[z] = message[z].split('');
	}

	//Encodes message word by word
	for(y = 0; y < message.length; y++) {
		//Resets array to prepare for a new word
		encryptionWord = [];
		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {
			//Resets the search for each letter in the message
			var check = false
			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){
				//Once the letter is found, the letter is keyed by the amount specified by the user
				if(message[y][i] === alphabet[x]) {
					//Encrypts letter
					encryptionWord.push(alphabet[(((x * key1) + key2) % alphabet.length)]);
					//Cancels the search
					check = true;
				} else if(message[y][i] === numbers[x % numbers.length]) {
					//Encrypts number
					encryptionWord.push(numbers[(((x * key1) + key2) % numbers.length)]);
					//Cancels the search
					check = true;
				}
			}
		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);
	}

	//Joins each item in the array into a single string
	encryption = encryption.join(' ');
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	return false;


}
var random_key = [];
var index;

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function keyGenerate() {
	//Creates area for the randomized key
	var random_key = [];
	//Creates a place for unused letters
	var alphabet_check = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	//Pushes a random letter into a random place in the key until it's all gone
	while(alphabet_check.length > 0) {
		var index = Math.floor(Math.random() * alphabet_check.length);
		random_key.push(alphabet_check[index]);
		alphabet_check.splice(index,1);
	}
	key = random_key.join('');
	repeat(key);
}




function encode_ar() {

	//Resets encryption message
	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}
	//Makes everything lowercase
	message = message.toLowerCase();

	if(document.getElementById('checkbox_input').checked === false) {

		key = document.getElementById('key').value;

		if(key.length !== 26) {

			alert('Please submit a proper key')

			return false;

		}

	} else {

		keyGenerate();
	
	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(key[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);
	}

	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	
	return false;

}





function decode_ar() {

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	key = document.getElementById('key').value;

	if(key.length !== 26) {

		alert('Please submit a proper key')

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < key.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === key[x]) {

					//Encrypts letter
					decryptionWord.push(alphabet[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		decryption.push(decryptionWord);
	}

	decryption = decryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + decryption;
	
	return false;

}

function checkKey() {
	var alphabet_check = alphabet;
	alphabet_check.splice(4,1);
	//alphabet_check.push('j');
	var check_num = 0
	console.log(key);
	for(var i=0;i<key.length;i++) {
		check = false;
		console.log("i = " + i);
		for(var z=0;z<alphabet.length;z++) {
			console.log("z =  " + z);

			console.log(key[i]+ "===" +alphabet[z]);
			if(key[i] === alphabet[z]) {
				console.log('hello');
				console.log(alphabet_check.length);
				for(var x=0;x<alphabet_check.length;x++) {
					console.log(key[i] + " == " +alphabet_check[x]);
					console.log('woo');
					if(key[i]==alphabet_check[x]) {
						alphabet_check.splice(x,1);
						check_num++
						check = true;
					}
				}
			} else {
				check = true;
			}
		}
	}
	if(check_num < 26) {
		keyGenerate();
		console.log(key);
		//checkKey();
	}
console.log("Number of errors: " + (26-check_num));
console.log(key);
}
//No need for a key
function encode_a() {

	encryptionWord = [];

	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted using atbash encryption
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(alphabet[((alphabet.length - x - 1) % alphabet.length)]);

					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Encrypts number
					encryptionWord.push(numbers[((numbers.length - x - 1) % numbers.length)]);

					//Cancels the search
					check = true;

				}

			}

		}
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);

	}

	//Joins each item in the array into a single string
	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;

	return false;
}

function decode_a() {

	decryptionWord= [];

	decryption =[];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Displays encrypted message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Decodes message word by word
	for(y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Decrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Decrypts letter
					decryptionWord.push(alphabet[((alphabet.length - x - 1) % alphabet.length)]);

					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Decrypts number
					decryptionWord.push(numbers[((alphabet.length - x - 1) % numbers.length)]);

					//Cancels the search
					check = true;

				}

			}

		}

		//Joins the array of Decrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes Decrypted word into the decrypted message array
		decryption.push(decryptionWord);
	
	}

	//Joins each item in the array into a single string
	decryption = decryption.join(' ');
	
	//Displays the decrypted message
	document.getElementById("output").innerHTML = 'Decrypted Message: ' + decryption;

	return false;

}
var encryptionP = [];

var encryptionWordP = [];

function encode_p() {

	encryptionP = [];
	
	encryptionWordP = [];
	
	encryption = [];

	encryptionWord = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	if(document.getElementById('checkbox_input').checked === false) {

		key = document.getElementById('key').value;

		if(key.length !== 26) {

			alert('Please submit a proper key')

			return false;

		}

	} else {

		keyGenerate();
	
	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWordP = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWordP.push(key[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWordP = encryptionWordP.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryptionP.push(encryptionWordP);
	}

	encryptionP = encryptionP.join('').split('');
	
	while(encryptionP.length >= 5) {
		
		encryptionWord = [];

		for(var t = 0; t < 5; t++) {
		
			encryptionWord.push(encryptionP[t]);
		
		}
		
			encryptionWord = encryptionWord.join('');

			encryptionP.splice(0, 5);

			encryption.push(encryptionWord);
	
	}
	
	encryptionWord = [];
	
	if(encryptionP.length > 0 && encryptionP.length < 5) {

		encryptionWord = [];

		for(var q = 0; q < encryptionP.length; q++) {
		
			encryptionWord.push(encryptionP[q]);
		
		}

			encryptionWord = encryptionWord.join('');

			encryption.push(encryptionWord);

	}

	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	
	return false;

}





function decode_p() {

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	key = document.getElementById('key').value;

	if(key.length !== 26) {

		alert('Please submit a proper key')

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + alphabet.join('') + ' = ' + key;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < key.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === key[x]) {

					//Encrypts letter
					decryptionWord.push(alphabet[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		decryption.push(decryptionWord);
	}

	decryption = decryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + decryption;
	
	return false;

}
function encode_b() {

	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();
	
	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is changed based on the key
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(baconian_number[x]);

					//Cancels the search
					check = true;

				} 

			}

		}
		
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);
	}

	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;
	
	return false;

}




function decode_b() {

	var decryptionB = []

	decryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Displays message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {
			decryptionWordB = [];
			decryptionB = [];
			while(message[y].length >= 5) {
			
				var decryptionWordB = [];
				
				for(var g = 0; g < 5; g++) {

					decryptionWordB.push(message[y][g]); 

				}

				decryptionWordB = decryptionWordB.join('');

				decryptionB.push(decryptionWordB);

				message[y].splice(0, 5);

			}

			for(var a = 0; a < decryptionB.length; a++) {

				//Resets the search for each letter in the message
				var check = false

				//Checks the alphabet array until the letter is found
				for(var x = 0; x < baconian_number.length && check === false; x++) {

					//Once the letter is found, the letter is changed based on the key
					if(decryptionB[a] === baconian_number[x]) {

						//Encrypts letter
						decryptionWord.push(alphabet[x]);

						//Cancels the search
						check = true;

					} 

				}

			}

		}
		
		//Joins the array of encrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		decryption.push(decryptionWord);
	}

	decryption = decryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + decryption;

	
	return false;

}
//This is a project that encrypts a message using a caesar cipher
/*The problem is that you can only encrpyt/decrypt once; make it so that the joined shit becomes an array again*/

//Encodes message by the shift number using a caesar cipher
function encode_c() {

	encryptionWord = [];
	
	encryption = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Gets shift number that was submitted
	shift = parseInt(document.getElementById('key').value);

	//Checks if shift number is actually a number
	if(isNaN(shift) === true ) {

		alert('Please submit a number');

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Shift Number: ' + shift;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(alphabet[((x + shift) % alphabet.length)]);

					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Encrypts number
					encryptionWord.push(numbers[((x + shift) % numbers.length)]);

					//Cancels the search
					check = true;

				}

			}

		}

		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);

	
	}

	//Joins each item in the array into a single string
	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("output").innerHTML = 'Encrypted Message: ' + encryption;

	return false;

}






function decode_c() {

	decryptionWord= [];

	decryption =[];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Gets shift number that was submitted
	shift = parseInt(document.getElementById('key').value);

	//Checks if shift number is actually a number
	if(isNaN(shift) === true ) {

		alert('Please submit a number');

		return false;

	}

	//Displays encrypted message
	document.getElementById("input").innerHTML = 'Encrypted Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Shift: ' + shift;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Decodes message word by word
	for(y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		decryptionWord = [];

		//Decrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Decrypts letter
					decryptionWord.push(alphabet[((x + (26-shift)) % alphabet.length)]);

					//decryptionWord.push(alphabet[((x - shift) % alphabet.length)]);

					decryptionWord.push(alphabet[((x + (26-shift)) % alphabet.length)]);

					//decryptionWord.push(alphabet[((x - shift) % alphabet.length)]);


					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Decrypts number

					decryptionWord.push(numbers[((x + (10-shift) % numbers.length))]);

					//decryptionWord.push(numbers[((x - shift) % numbers.length)]);


					//Cancels the search
					check = true;

				}

			}

		}

		//Joins the array of Decrypted letters into a word 
		decryptionWord = decryptionWord.join('');
		
		//Pushes Decrypted word into the decrypted message array
		decryption.push(decryptionWord);

	
	}

	//Joins each item in the array into a single string
	decryption = decryption.join(' ');
	
	//Displays the decrypted message
	document.getElementById("output").innerHTML = 'Decrypted Message: ' + decryption;

	return false;

}

var version, cipher, version_value, cipher_value;
//Function to change what's on the screen based on cipher and if they want to encode or decrypt
function change_option() {
	version = document.getElementById('version_check');
    
    cipher = document.getElementById('cipher_check');

    version_value = version[version.selectedIndex].value;
    
    cipher_value = cipher[cipher.selectedIndex].value;

	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';
		
		document.getElementById('key_input').innerHTML = 'Shift Number';
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message'

		document.getElementById('key_input').innerHTML = 'Amount Shifted'

	} else if((cipher_value === 'Atbash' || cipher_value === 'Baconian') && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';

	} else if((cipher_value ==='Atbash' || cipher_value === 'Baconian') && version_value ==='Decrypt') {

		document.getElementById('message_input').innerHTML = 'Encrypted Message';

	} else if(cipher_value === 'Hill') {

		document.getElementById('message_input').innerHTML = 'Your Message';

		document.getElementById('key_input').innerHTML = 'Key (4 Characters)';

	}

	if(cipher_value === 'Hill' || cipher_value === 'Affine' || cipher_value === 'Vigenere') {

		document.getElementById('Decrypt').style.display = 'none';

	} else {

		document.getElementById('Decrypt').style.display = 'block';

	}

	if((cipher_value === 'Aristocrat'  || cipher_value === 'Patristocrat') && version_value === 'Encrypt') {

		document.getElementById('message_input').innerHTML = 'Your Message';

		document.getElementById('key_input').innerHTML = 'Key';

		document.getElementById('checkbox').style.display = 'block'

	} else {

		document.getElementById('checkbox').style.display = 'none'

	}

	if(cipher_value === 'Affine') {

		document.getElementById('key_input').innerHTML = 'Multiplier (a)';

		document.getElementById('key_input2').innerHTML = 'Linear Shift (b)';

		document.getElementById('key2').style.display = 'block';
		
		document.getElementById('key_input2').style.display = 'block';

	} else {

		document.getElementById('key2').style.display = 'none';
		
		document.getElementById('key_input2').style.display = 'none';

	}

	if(document.getElementById('checkbox').style.display === 'none') {

		document.getElementById('checkbox_input').checked = false;

	}

	if(cipher_value === 'Aristocrat' && version_value === 'Decrypt' || cipher_value === 'Patristocrat' && version_value === 'Decrypt')  {

		document.getElementById('message_input').innerHTML = 'Encrypted Message';

		document.getElementById('key_input').innerHTML = 'Key';

	}

	if(document.getElementById('checkbox_input').checked === true || cipher_value === 'Atbash' || cipher_value === 'Baconian') {

		document.getElementById('key').style.display = 'none';
		
		document.getElementById('key_input').style.display = 'none';

	} else {

		document.getElementById('key').style.display = 'block';

		document.getElementById('key_input').style.display = 'block';

	}

}




function execute() {
	if(cipher_value === 'Caesar' && version_value === 'Encrypt') {

		encode_c();
	
	} else if(cipher_value ==='Caesar' && version_value === 'Decrypt') {

		decode_c();

	} else if(cipher_value === 'Atbash' && version_value === 'Decrypt') {

		encode_a();

	} else if(cipher_value === 'Atbash' && version_value === 'Encrypt') {

		decode_a();

	} else if(cipher_value === 'Hill') {

		encode_h();

	} else if(cipher_value === 'Aristocrat' && version_value === 'Encrypt') {

		encode_ar();

	} else if(cipher_value === 'Aristocrat' && version_value === 'Decrypt') {

		decode_ar();

	} else if(cipher_value === 'Patristocrat' && version_value === 'Encrypt') {

		encode_p();

	} else if(cipher_value === 'Patristocrat' && version_value === 'Decrypt') {

		decode_p();

	} else if(cipher_value === 'Affine') {

		encode_af();

	} else if(cipher_value === 'Baconian' && version_value === 'Encrypt') {

		encode_b();

	} else if(cipher_value === 'Baconian' && version_value === 'Decrypt') {

		decode_b();

	} else if(cipher_value === 'Vigenere') {

		encode_v();

	}

}
//This can only support 2x2 keys
//The way the key is set up needs to be fixed
function encode_h() {

	encryptionWord = [];
	
	encryption = [];

	hillKeyNumCheck = [];

	hillKeyCheck = [];

	encryptionWordCheck = [];

	encryptionNumCheck = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	//Gets shift number that was submitted
	key = document.getElementById('key').value;

	//Checks if there is a key
	if(typeof(key) === 'undefined' || key === '' || key.length !== 4) {

		alert('Please submit a key with 4 characters');

		return false;

	}

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	message = message.split(' ').join('').split('');
	//This whole part is for making the matrices for the message
	while(((message.length / 2) % 1) !== 0) {

		message.push('z');

	}

	for(var x = 0; x < message.length; x++) {

		check = false

		for(var i = 0; i < alphabet.length && check === false; i++) {

			if(message[x] === alphabet[i]){

				hillSplitNum.push(alphabet_number[i]);

				check = true;

			} else if(typeof(message[x]) === 'number'){

				hillSplitNum.push(message[x]);

				check = true;

			}

		}

		if((x % 2) === 1) {

			hillSplit.push(message[x]);

			encryptionWordCheck.push(hillSplit);

			encryptionNumCheck.push(hillSplitNum);

			hillSplitNum = [];

			hillSplit = [];

		} else {

			hillSplit.push(message[x]);

		}

	}

	//This is for the key
	key = key.split('');
	check = false
	while(key.length % 4 !== 0) {

		key.push(key[0]);

		if(key.length % 4 !== 0) {

			key.push(key[1]);

		}

	}

	for(var p = 0; p < key.length; p++) {
		
		for(var e = 0; e < alphabet.length; e++) {

			if(key[p] === alphabet[e]) {

				hillKeyNum.push(alphabet_number[e]);

			} else if(typeof(key[p]) === 'number'){

				hillKeyNum.push(key[p]);

			}

		}

		if((p % 2) === 1) {

			hillKey.push(key[p]);

			hillKeyCheck.push(hillKey);

			hillKeyNumCheck.push(hillKeyNum);

			hillKeyNum = [];

			hillKey = [];

		} else {

			hillKey.push(key[p]);

		}
	}

	//Way to make the key actually work since the method places the array items the wrong way, vertical instead of horizontally first
	var hillKeyCheckReal = [[hillKeyCheck[0][0],hillKeyCheck[1][0]],[hillKeyCheck[0][1],hillKeyCheck[1][1]]]

	var hillKeyNumCheckReal = [[hillKeyNumCheck[0][0],hillKeyNumCheck[1][0]],[hillKeyNumCheck[0][1],hillKeyNumCheck[1][1]]]
	
	hillKeyCheck = hillKeyCheckReal;
	
	hillKeyNumCheck = hillKeyNumCheckReal;

	hillEncryptWord = [];
	
	//Now for the actual encryption
	for(var t = 0; t < encryptionNumCheck.length; t++) {
	
		hillEncryptWord.push([(((hillKeyNumCheck[0][0] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][0] * encryptionNumCheck[t][1])) % 26), (((hillKeyNumCheck[0][1] * encryptionNumCheck[t][0]) + (hillKeyNumCheck[1][1] * encryptionNumCheck[t][1])) % 26)]);

	}

	for(var z = 0; z < hillEncryptWord.length; z++) {
		
		for(var o = 0; o < hillEncryptWord[z].length; o++) {

			for(var h = 0; h < alphabet_number.length; h++) {

				if(hillEncryptWord[z][o] === alphabet_number[h]) {

					encryptionWord.push(alphabet[(h)]);

				}

			}

		}

	}

	encryption = encryptionWord.join('');

	document.getElementById('output').innerHTML = 'Encrypted Message: ' + encryption;
	
}
function encode_v() {
	var keyNum = [];

	var messageNum = [];

	encryptionWord = [];

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	message = message.toLowerCase();

	key = document.getElementById('key').value;

	var keyNoSpaceCount = key.split(' ').join('').split('');

	if(typeof(key) === 'undefined' || message === '' || key.length > message.length || key.length !== keyNoSpaceCount.length) {

		alert('Please submit a one word key that is shorter than the message');

	} 

	//Displays message
	document.getElementById("input").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("keys").innerHTML = 'Key: ' + key;

	key = key.split('');

	var i = 0;

	while(key.length !== message.length) {


		key.push(key[i % key.length]);

		i++;

	}

	for(var t = 0; t < key.length; t++) {

		var check = false;

		//Checks the alphabet array until the letter is found
		for(var a = 0; a < alphabet.length && check === false; a++) {

			//Once the letter is found, the letter is keyed by the amount specified by the user
			if(key[t] === alphabet[a]) {

				//Encrypts letter
				keyNum.push(alphabet_number[a]);

				//Cancels the search
				check = true;

			}

		}

	}

	message = message.split(' ');

	messageNum.length = 0;
	encryptionNumCheck.length = 0;

	//Encodes message word by word
	for(var y = 0; y < message.length; y++) {

		message[y] = message[y].split('')

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false;

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++) {

				//Once the letter is found, the letter is keyed by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					messageNum.push(alphabet_number[x]);

					//Cancels the search
					check = true;

				}

			}

		}
	
	}

	//Encodes message word by word
	for(var f = 0; f < messageNum.length; f++) {

		encryptionNumCheck.push(alphabet_number[(messageNum[f] + keyNum[f]) % 26]);
	
	}

	for(var g = 0; g < encryptionNumCheck.length; g++) {

		//Resets the search for each letter in the message
		var check = false;

		for(var t = 0; t < alphabet.length && check === false; t++) {

			if(encryptionNumCheck[g] === alphabet_number[t]) {

				encryptionWord.push(alphabet[t]);

			}

		}


	}

	encryption = encryptionWord.join('');

	document.getElementById('output').innerHTML = 'Encrypted Message: ' + encryption;

}