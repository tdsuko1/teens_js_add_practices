var studentsScore = [70, 75, 60, 70, 85, 90, 90, 75, 100, 96, 82, 45, 98, 45, 60, 65, 51, 86, 56, 79]
var totalScores = 0
for (var i = 0; i < studentsScore.length; i++) {
	totalScores += studentsScore[i]
}
console.log("Total scores: " + totalScores)
document.write("Total scores: " + totalScores)
document.write("<br />")

var avgScores = totalScores / studentsScore.length
console.log("Total students: " + studentsScore.length)
document.write("Total students: " + studentsScore.length)
document.write("<br />")
console.log("Average score: " + avgScores)
document.write("Average score: " + avgScores)
document.write("<br />")

var countStudents = 0
for (var i = 0; i < studentsScore.length; i++) {
	if (studentsScore[i] > avgScores) {
		countStudents++
	}
}
console.log("Students above average: " + avgScores + " students")
document.write("Students above average: " + avgScores + " students")
document.write("<br />")

// ==================================================================
var a = 1
var b = 20
var evenNumbers = []
var idxEven = 0
