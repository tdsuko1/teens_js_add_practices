var random = Math.floor(Math.random() * 20)
var random2 = Math.floor(Math.random() * 20)
var random3 = Math.floor(Math.random() * 29)
var random4 = Math.floor(Math.random() * 314159265358979323)
var adjectives = [
	"angry",
	"big",
	"bald",
	"clean",
	"lazy",
	"kind",
	"scary",
	"small",
	"plain",
	"fit",
	"attractive",
	"beautiful",
	"chubby",
	"dazzling",
	"drab",
	"elegant",
	"fan",
	"jolly",
	"polite",
	"clumsy",
]
var nouns = [
	"death",
	"bed",
	"child",
	"country",
	"fish",
	"floor",
	"food",
	"idea",
	"egg",
	"course",
	"woman",
	"man",
	"teacher",
	"home",
	"school",
	"park",
	"computer",
	"continent",
	"gas",
	"hill",
]
var symbols = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	'"',
	"'",
	";",
	":",
	"[",
	"]",
	"{",
	"}",
	"\\",
	"=",
	"-",
	"_",
	"+",
	"~",
	"`",
	",",
	".",
	"/",
	"?",
]
var newusername = 0
var newpassword = 0

do {
	var userOption = prompt(" 1. Generate Username \n 2. Generate Password \n Select 1 or 2.")
} while (userOption != 1 && userOption != 2)

function generate(option) {
	if (userOption == 1) {
		newusername = adjectives[random] + nouns[random2]
		console.log(newusername)
	} else if (userOption == 2) {
		newpassword = capitalizeFirstLetter(adjectives[random]) + nouns[random2] + random4 + symbols[random3]
		console.log(newpassword)
	} else {
	}
}
function capitalizeFirstLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1)
}
generate(userOption)
