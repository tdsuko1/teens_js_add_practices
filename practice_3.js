/*
Create a simple program to categorize input numbers into odd numbers or even numbers.
1. Pop up prompt for user: "Input number between 1 and 20", 
   repeat the process as long as the input from user is not empty or user doesn't click cancel button. 
2. If the number is out of the allowed range (which is 1 to 20), 
   pop up an alert "Please only input number between 1 and 20" then pop up the prompt again to ask for the next number.
   Tips: - use isNaN(input) to check if the input is number or not, 
         - use input === null to check if the input is empty (null) or not
3. Put the valid numbers into arrNums with the index idxArrNums
4. Create function to categorize the number in arrNums into two different array: arrEvenNums and arrOddNums. 
   Don't forget to use different index for each array: idxArrEvenNums and idxArrOddNums.
*/

// var arrNums = []
// var idxArrNums = 0
// do {
// 	var a = prompt("Input number between 1 and 20")
// 	if (a < 1 || a > 20) {
// 		alert("Please only input number between 1 and 20")
// 	} else if (isNaN(a)) {
// 		alert("Please only input number")
// 	} else if (a === null) {
// 		break
// 	} else {
// 		arrNums[idxArrNums] = a
// 	}
// } while (a != null && a != undefined)

var scores = [60, 70, 90, 75, 60]
for (i = 0; i < scores.length; i++) {
	console.log(scores[i])
}
scores.forEach((e) => {
	console.log(e)
})
