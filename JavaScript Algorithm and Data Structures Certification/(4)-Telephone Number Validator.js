function telephoneCheck(str) {
    let check1 = checkCharacters(str);
    let check2 = checkCountryCode(str);
    
    if (check1 == true && check2 == true) {
      return true;
    }
    else {
      return false;
    }
  }
  
  telephoneCheck("555)-555-5555");
  
  function checkCharacters(str) {
    let dash = 0;
    let bracket = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '-') {
        dash++;
      }
      else if (str[i] == '(' || str[i] == ')') {
        bracket++;
      }
    }
  
    if (str.includes(')') || str.includes(')') || str.includes('-')) {
      if ((dash == 2 && bracket == 0) || (bracket == 2 && dash == 1))  {
        return true;
      }
    }
    else if (str.includes(" ") == true || isNaN(str) == false) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function checkCountryCode(str) {
    if (str[0] == 1 && (str[1].includes(" ") == true || str[1].includes('(') == true)) {
      return true;
    }
    else if ((str[0] == 5 || str[0] == '(') && str.length > 9 && str.length <= 13) {
      return true;
    }
    else {
      return false;
    }
  }