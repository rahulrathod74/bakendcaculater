const { log } = require('console')
const crypto=require('crypto')
const args=process.argv.slice(2)
const operation=args[0]
const numbers=args.slice(1).map(Number)
const randomNumber=(length)=>{
  const number=crypto.randomBytes(length,(err,buff)=>{
    if(err){
      console.log(err);
    }else{
      console.log(buff.toString('utf-8'));
    }
  })
}
switch(operation){
  case 'add':
    console.log(numbers.reduce((acc,curr)=>acc+curr,0));
    break

    case 'sub':
      console.log(numbers.reduce((acc,curr)=>acc-curr));
      break
      case 'mult':
        console.log(numbers.reduce((acc,curr)=>acc*curr,1));
        break
        case 'divide':
          console.log(numbers.reduce((acc,curr)=>acc/curr));
          break
          case 'sin':
            console.log(Math.sin(numbers[0]));
            break
            case 'cos':
            console.log(Math.cos(numbers[0]));
            break
            case 'tan':
            console.log(Math.tan(numbers[0]));
            break
      case 'random':
        randomNumber(numbers[0])
        break;
      default:
     console.log('Invalid operation');
}
