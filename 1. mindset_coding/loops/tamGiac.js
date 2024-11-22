/*
 
*
**
***
****
*****        

    *
   **
  ***
 ****
*****
*/

function tamGiac1() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      if (star <= 5 - row) {
        str += " ";
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  console.log(str);
}
tamGiac1();

function one() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= row; star++) {
      str += "*";
    }

    str += "\n";
  }
  console.log(str);
}

one();

function two() {
  let str = "";

  for (let row = 1; row <= 5; row++) {
    for (let star = 1; star <= 5; star++) {
      if (star < row) {
        str += " ";
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  console.log(str);
}
two();
