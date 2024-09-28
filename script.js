function testNum(t) {
  let result;
  if (t > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(10));
// Expected output: "Positive"


let day = 5;

switch (day) {
    case 1:
    console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
            
        break;
    
    case 3:
        console.log('Tuesday');
        break;
            
    case 4:
        console.log('Wednessday');
                    
        break;
    
    case 5:
        console.log('Thursday');
        
        break;

        case 6:
            console.log('Friday');
        break;

        case 7:
            console.log('Saturday'); 
        break;

}
      {  let result = '';
        let i = 0;
        
        do {
          i = i + 1;
          result = result + i;
        } while (i < 5);
        
        console.log(result);

        let y = 0;

while (y < 6) {
  if (y === 3) {
    break;
  }
  y = y + 1;
}

console.log(y);

        

    } 
    let str = '';

    for (let j = 0; j < 10; j++) {
      str = str + j;
    }
    
    console.log(str);
    
    let x = 0;


// While 
while (x < 7) {
  x++;
}

console.log(x);

let globalVar = "I'm global!";


 
function  scope() {
    let localVar = "I'm local!";

 
    
}



    
    

  
