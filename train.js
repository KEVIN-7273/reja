/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MIT TASK B &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

function countnumber(text) {
  let count = 0;
  let i = 0;
  while (i < text.length) {
    if (text[i] >= 0 && text[i] <= 9) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(countnumber("Assalom9"));
console.log(countnumber("5789tatelefon"));
console.log(countnumber("25yillik"));
console.log(countnumber("Assalom9"));

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MIT TASK A &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

// function countLetter(letter, word) {
//   let count = 0;
//   let i = 0;
//   while (i < word.length) {
//     if (word[i] === letter) {
//       /* string ichidagi har bir harfga index (raqam) beriladi.*/
//       count++;
//     }
//     i++;
//   }
//   if (count === 0) {
//     return "Bunday harf bu so'zda qatnashmagan";
//   }
//   return count;
// }

// console.log(countLetter("b", "Uzbekistanbbbbb"));
// console.log(countLetter("A", "KevinAA"));
// console.log(countLetter("e", "engineer"));

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 22. Asynchronous functionlarni qollash &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq", // 60
// ];
// //calback with interval
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// Asynch function
// async function maslahatBering(a, callback) {
//   // setTimeout, setInterval kabi modullar ishlamaydi asyncda
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");

// // call via asynch/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
//
//
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 21. NodeJS event loop va Callback functionlarni organmaiz &&&&&&&&&&&&&&&&&&&&&&&&&& */
//
//
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", // 20-30
//   "ozingizga ishlashni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");
