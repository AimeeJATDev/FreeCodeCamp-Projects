function convertToRoman(num) {
    const romNum = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    const araNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  
    let index = 0;
    let newNum;
    let numerals = "";
    
    while (newNum != 0) {
      newNum = findHighest(araNum, num);
  
      for (let i = 0; i < araNum.length; i++) {
        if (newNum == araNum[i]) {
          index = i;
          num = num - newNum;
        }
      }
      if (newNum > 0) { 
        numerals += romNum[index];
      }
    }
    return numerals;
  }
  
  function findHighest(araNum, num) {
    let highest = 0;
  
    for (let i = 0; i < araNum.length; i++) {
      if (araNum[i] < num || araNum[i] == num) {
        highest = araNum[i]
      }
    }
    return highest;
  }
  
  convertToRoman(2)