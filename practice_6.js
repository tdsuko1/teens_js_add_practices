// let firstName = "Ashley"
// let myAge = 16
// let isMonday = true
// console.log("Halo, nama saya " + firstName + ", saya berusia" + myAge + " tahun")

let dadu1 = Math.floor(Math.random() * 6) + 1
let dadu2 = Math.floor(Math.random() * 6) + 1

console.log(dadu1)
console.log(dadu2)

if (dadu1 === 6 && dadu2 === 6) {
	console.log("Permainan berhenti")
} else if (dadu1 === dadu2) {
	console.log("Angka dadu sama, lempar dadu lagi")
}
