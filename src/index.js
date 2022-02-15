module.exports = function toReadable (number) {
  let f = ['', 'thousand', 'million', 'billion', 'trillion'];
  let dig1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let dig2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dig3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let strNum = number.toString();
  let lengthStr = strNum.length;
  if (lengthStr > 15) return 'number very big';
  let groupOfThree = Math.ceil(lengthStr/3);
  let readNum = '';
  let i = 0;
  while (groupOfThree > 0) {
    
    if ((lengthStr-i)%3 == 0) {
      readNum+=dig1[strNum[i]] + ' ' + 'hundred' + ' ';
      switch (strNum[i+1]) {
        case '1': {
          readNum+=dig2[(strNum[i+2])] + ' ';
          break;
        }
        case '0': {
           readNum+=dig1[strNum[i+2]] + ' ';
           break;
        }
        default: {
          readNum+=dig3[strNum[i+1]-2] + ' ' + dig1[strNum[i+2]] + ' ';
        } 
      } 
      i+=3;
    }

    if ((lengthStr-i)%3 == 2) {
      switch (strNum[i]) {
        case '1': {
          readNum+=dig2[(strNum[i+1])]+' ';
          break;
        }
        default: {
          readNum+=dig3[strNum[i]-2] + ' ' +dig1[strNum[i+1]] + ' ';
        }
      }
      i+=2;
    }
    
    if ((lengthStr-i)%3 == 1) {
      readNum+=dig1[strNum[i]] + ' ';
      i+=1;
    }
    groupOfThree = groupOfThree-1;
  }
  readNum = readNum.trim();
  if (number == 0) readNum = 'zero';
  return readNum;
}
