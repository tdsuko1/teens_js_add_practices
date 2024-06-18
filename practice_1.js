console.log("practice 1 line 7")
var desserts = [
	"Tiramisu",
	"Castella",
	"Chocolate Cake",
	"Strawberry Shortcake",
	"Carrot Cake",
]
console.log(desserts.join(", "))

console.log("practice 1 line 11")
desserts[1] = "Mousse Cake"
console.log(desserts.join(", "))

console.log("practice 1 line 15")
desserts[5] = "Castella"
console.log(desserts.join(", "))

console.log("practice 1 line 20")
dice = Math.floor(Math.random() * 6)
console.log(desserts[dice])

console.log("practice 1 line 23")
if (desserts[dice] == "Tiramisu" || desserts[dice] == "Chocolate Cake") {
	console.log("todays desert is " + desserts[dice] + " with Cappucino")
} else if (
	desserts[dice] == "Strawberry Shortcake" ||
	desserts[dice] == "Carrot Cake"
) {
	console.log("todays desert is " + desserts[dice] + " with Ice Lemon Tea")
} else if (desserts[dice] == "Mousse Cake" || desserts[dice] == "Castella") {
	console.log("todays desert is " + desserts[dice] + " with Milk Tea")
}
console.log(" ")
