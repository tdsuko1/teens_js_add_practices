var desserts = ["Tiramisu", "Castella", "Chocolate Cake", "Strawberry Shortcake", "Carrot Cake"]
console.log(desserts.join(", "))
document.write(desserts.join(", "))
document.write("<br />")

desserts[1] = "Mousse Cake"
console.log(desserts.join(", "))
document.write(desserts.join(", "))
document.write("<br />")

desserts[5] = "Castella"
console.log(desserts.join(", "))
document.write(desserts.join(", "))
document.write("<br />")

rand = Math.floor(Math.random() * 6)
console.log("Selected index = " + rand)
document.write("Selected index = " + rand)
document.write("<br />")

todayDesserts = desserts[rand]
console.log("Today's desserts = " + todayDesserts)
document.write("Today's desserts = " + todayDesserts)
document.write("<br />")

if (todayDesserts === "Tiramisu" || todayDesserts === "Chocolate Cake") {
	console.log("Today desert is " + todayDesserts + " with Cappucino")
	document.write("Today desert is " + todayDesserts + " with Cappucino")
	document.write("<br />")
} else if (todayDesserts === "Strawberry Shortcake" || todayDesserts === "Carrot Cake") {
	console.log("Today desert is " + todayDesserts + " with Ice Lemon Tea")
	document.write(desserts.join(", "))
	document.write("<br />")
} else if (todayDesserts === "Mousse Cake" || todayDesserts === "Castella") {
	console.log("Today desert is " + todayDesserts + " with Milk Tea")
	document.write("Today desert is " + todayDesserts + " with Milk Tea")
}
