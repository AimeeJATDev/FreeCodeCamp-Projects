function checkCashRegister(price, cash, cid) {
    let change = {status: "", change: []};
    let difference = cash - price;
    let total = 0;
    let changeReq;
  
    for (let i = 0; i < cid.length; i++) {
      total += cid[i][1];
    }
  
    if (total == difference) {
      change.status = "CLOSED";
      change.change = cid;
    }
    else {
      changeReq = changeNeeded(difference, cid);
  
      if (changeReq != '[]') {
        change.status = "OPEN";
        change.change = changeReq;
  
      }
      else {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
      }
    }
    return change;
  }
  
  function changeNeeded(difference, cid) {
    let cash = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]
    let cashAmt = [];
    let cashInCents = [];
    let changeNeeded = [];
    let change = 0;
    let calc = 0;
  
    difference = difference * 100;
    
    for (let i = 0; i < cid.length; i++) {
      cashAmt.push(cid[i][1] / cash[i] * 100);
      cashInCents.push(cid[i][1] * 100);
    }
  
    for (let j = cid.length - 1; j >= 0; j--) {
      if (difference >= cashInCents[j]) {
        difference -= cashInCents[j];
        cid[j][1] = cashInCents[j] / 100;
        changeNeeded.push(cid[j]);
      } 
  
      else if (difference < cashInCents[j]) {
        calc = cashInCents[j] / cashAmt[j];
  
        for (let k = 0; k < cashInCents[j]; k += calc) {
          if (difference >= k) {
            change = k;
          }
        }
        
        if (change > 0) {
            difference -= change;
            cid[j][1] = change / 100;
            changeNeeded.push(cid[j]);
        }   
      }
    }
    
    if (difference == 0) {
      return changeNeeded; 
    }
    else {
      return '[]';
    }
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);