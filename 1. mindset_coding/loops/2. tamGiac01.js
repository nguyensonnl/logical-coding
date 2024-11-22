/*

*
**
***
****
*****
 
*/

function tamGiac01() {
  let str = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    str += `\n`;
  }
  console.log(str);
}
tamGiac01();

function text() {
  {
    let str = "";
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
}
text();
