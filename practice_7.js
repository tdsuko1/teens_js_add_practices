var arrNums = []
var idxArrNum = 0

do {
	var inputNum = prompt("Inputkan angka antara 5 - 25")
	if (inputNum == "") {
		alert("Tolong inputkan angka antara 5 - 25")
	} else if (isNaN(inputNum)) {
		alert("Hanya input angka yang diijinkan")
	} else if (inputNum == null) {
		break
	} else if (inputNum < 5 || inputNum > 25) {
		alert("Hanya angka antara 5 -25 yang diijinkan")
	} else {
		arrNums[idxArrNum] = inputNum
		idxArrNum++
	}
} while (inputNum != null && inputNum != undefined)

function isEven(p) {
	if (p % 2 == 0) return true
}

function isOdd(p) {
	if (p % 2 == 1) return true
}

var arrOdds = []
var idxOdd = 0
var arrEvens = []
var idxEven = 0
arrNums.forEach((e) => {
	if (isEven(e)) {
		arrEvens[idxEven++] = e
	} else if (isOdd(e)) {
		arrOdds[idxOdd++] = e
	}
})

console.log(arrEvens)
console.log(arrOdds)
