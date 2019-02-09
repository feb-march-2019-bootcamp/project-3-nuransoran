
function palindrome(p) {
    p = p.toLowerCase().replace(/[a-zA-Z0-9]/gi, '');
    let j = p.length-1;
    for(let i = 0 ; i < j/2; i++) {
      if(p[i] !== p[j-i]) {
        return false;
      }
    }
    return true;
  }
  console.log(palindrome('eye'))