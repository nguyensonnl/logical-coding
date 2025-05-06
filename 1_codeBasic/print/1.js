/*
* 0
** 0 1
*** 0 1 2
**** 0 1 2 3
***** 0 1 2 3 4
j < i + 1
TH; i = 0
j = 0 < i = 0 + 1
j = 1 < i = 0 + 1
TH: i = 1;
j = 0 < i = 1 + 1;
j = 1 < i = 1 + 1;
j = 2 < i = 1 + 1;
*/

/*
* i = 0, j = 0
** i = 1, j = 0, j = 1
* * i = 2, j =0, j = 1, j = 2
*  *
*****
*/

function print01(n){
let str = "";
for(let i = 0; i < n; i++){
for(let j = 0; j < i + 1; j++){
str += "* ";
}
str += "\n";
}
console.log(str);
}
print01(5)

function print02(n){
let str = "";
for(let i = 1; i <= n; i++){
for(let j = 1; j <= n; j++){
	if(i === n || j === i || j === 1) {
		str +="*";
	}else{
		str +=" ";
	}
	
}
str += "\n";
}
console.log(str);
}
print02(5);