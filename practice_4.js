// Declare variable named customer without initializing
// this variable will be used as container for input name
var customer

// Declare and initialize variable cashier with name Lia
var cashier = "Lia"

// Declare and initialize array variable named items
// with following items: melon pang, egg pang, cream pang, choco pang, fruits purin, choco purin
var items = ["Melon pang", "Egg pang", "Cream pang", "Choco pang", "Fruits purin", "Choco purin"]

// Declare and initialize another array variable named prices
// with following elements: 7000, 10000, 9000, 8000, 12000, 11000
// which are the prices for the items
var prices = [7000, 10000, 9000, 8000, 12000, 11000]

// Create function askItemsToBuy which will prompt question about
// quantity of item that customer bought
// and also calculate the subtotal
// and eventually the grand total as well
function askItemsToBuy() {
	let total = 0
	for (i = 0; i < items.length; i++) {
		let itemName = items[i]
		let itemPrice = prices[i]
		let itemQty = prompt(`How many ${itemName} you want to buy?`)
		let subtotal = 0
		if (!isNaN(itemQty)) {
			subtotal = itemQty * itemPrice
		} else {
			itemQty = 0
		}
		document.write(`${itemName}: ${itemQty} x ${itemPrice} = ${subtotal}`)
		document.write("<br/>")
		total += subtotal
	}
	return total
}

document.write(`Cashier name: ${cashier}`)
do {
	document.write("<br/>")
	let customer = prompt("Enter customer name: ")
	if (customer != null) {
		let total = askItemsToBuy()
		document.write(`${customer} need to pay ${total}`)
		document.write("<br/>")
	} else {
		break
	}
	document.write("<br/>")
} while ((startNew = prompt("Do you want to continue? (Y/N)") == "Y"))

/*
  Cashier name: Lia
  Melon pang: 3 x 7000 = 21000
  Egg pang: 0 x 10000 = 0
  Cream pang: 2 x 9000 = 18000
  Choco pang: 0 x 8000 = 0
  Fruits purin: 0 x 12000 = 0
  Choco purin: 1 x 11000 = 11000
  Hansel need tp pay 50000
*/
