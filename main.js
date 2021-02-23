let palin = document.getElementById('palindrome');
let btn = document.getElementById('btn');
let result = document.querySelector('.result');

function palindrome(str) {
    let regex = /[\W_]/g;
    let small = str.toLowerCase().replace(regex, "");
    let smallReversed =small.split('').reverse().join("");
    if (small === smallReversed) return "É POLÍNDROMO";
    return "NÃO É POLÍNDROMO";
  } 
btn.addEventListener('click',()=>{
    
    result.innerText = palindrome(palin.value)
  })

  