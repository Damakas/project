'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    //Решения мастера
    showAgeAndLangs: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками `;
        languages.forEach(function(lang){
            str +=`${lang.toUpperCase()}`;
        });
        return str;
    }
    // Мое решение
    // showAgeAndLangs: function(personalPlanPeter){
    //     let result = '';
    //     const {skills} = personalPlanPeter;
    //     const {languages} = skills;
    //    languages.forEach((element,index,array) =>{
    //     array[index] = element.toUpperCase();
    //    })
    //         result +=`Мне ${personalPlanPeter.age} и я владею языками ${languages}`
    //        return result;    
    // }     

    
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



//Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
function showExperience(personalPlanPeter) {
const {skills} = personalPlanPeter;
const {exp} = skills;
return exp;
}
console.log(showExperience(personalPlanPeter));


// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
//Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
function showProgrammingLangs(personalPlanPeter) {
const {skills} = personalPlanPeter;
const {programmingLangs} = skills;
let result = '';
for(let key in programmingLangs){
     result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
}
return result;
}
console.log(showProgrammingLangs(personalPlanPeter));


