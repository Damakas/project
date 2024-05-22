'use strict'

function getTimeFromMinutes(minutes){
    
if(typeof(minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0){
    return 'Ошибка,проверьте данные'
}

const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;

let hoursStr = '';

switch (hours){
    case 0:
        hoursStr = 'часов';
        break;
    case 1:
        hoursStr = 'час';
            break;
    case 2:
    case 3:
    case 4:
                hoursStr = 'часа';
                break;
            default:
                    hoursStr = 'часов';
    }



return `Это ${hours} ${hoursStr}  и ${remainingMinutes} минут`
}


console.log(getTimeFromMinutes(580))


function findMaxNumber(x,y,j,k){
    if(typeof(x) !== 'number' ||
       typeof(y) !== 'number' ||
       typeof(j) !== 'number' ||
       typeof(k) !== 'number'){
        return 0;
       }else{
return console.log(Math.max(x,y,j,k));
}
}
findMaxNumber(1, 5, 6.6, 11);
findMaxNumber(1, 5, '6', '10')


