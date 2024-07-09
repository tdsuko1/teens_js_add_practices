var random = Math.floor(Math.random() * 10)
var adjectives = ["enormous", "doglike", "silly", "yellow", "fun", "fast", "small", "tiny", "puny", "short"]
var nouns = ["bottle", "keyboard", "mouse", "cat", "tiger", "bunny", "dog", "person", "art", "fish"]
var symbols = ["@", "!", "#", "$", "%", "^", "&", "*", "(", ")"]
var newUsername
var newPassword

function generate(option) {
	if (option == 1) {
		newUsername = adjectives[random] + nouns[random]
		console.log(newUsername)
	}
	if (option == 2) {
		newPassword = adjectives[random].toUpperCase() + nouns[random] + random + symbols[random]
		console.log(newPassword)
	}
}
var userOption = prompt("pick number 1 or 2")
while (userOption != 1 && userOption != 2) {
	userOption = prompt("pick number 1 or 2")
}
generate(userOption)
