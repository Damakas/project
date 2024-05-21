'use strict'


function calculatedVolumeAndArea(a){
   let volumeCube = 1;
   let areaCube = 0;
   for(let i = 0; i < 3; i++){
      volumeCube *= a;
   }
   let aSquared = 1;
   for(let j = 0; j < 2; j++){
      aSquared *= a;
   }
   areaCube = 6 * aSquared;
if(isNaN(a) || a < 0 || !Number.isInteger(a)) {
   return "При вычислении произошла ошибка"
}else{
  return `Объем куба: ${volumeCube}, площадь всей поверхности: ${areaCube}`;
   }
  }
console.log(calculatedVolumeAndArea(6))




function getCouperNumber(num){
   if (isNaN(num) || num < 0 || !Number.isInteger(num)){
      return "Ошибка.Проверьте правильность введенного номера места";
   } 
   
  if(num === 0 || num > 36 ){
      return "Таких мест в вагоне не существует";
   }
return Math.ceil(num /4 )
}
console.log(getCouperNumber('Hello'))





