// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str="abcadeecfb", strOne="";
let len=str.length;

let newSet=new Set()

for(let i of str)
{
    newSet.add(i)
}

for(let j of newSet)
{
    strOne=strOne + j
}

console.log(strOne);


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function CharWithFreq(s)
{
  // Store all characters and
  // their frequencies in dictionary
  let d = new Map();
  console.log(d);
 
  s.split('').forEach(element => {
     
        if(d.has(element))
        {
           console.log( d.set(element, d.get(element)+1));
        }
        else
           console.log( d.set(element, 1));
  });

  console.log(d);
}   

let s="abcadeecfb";
CharWithFreq(s);
