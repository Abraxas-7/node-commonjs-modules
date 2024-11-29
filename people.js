function userInfo  () {
    
    const person = fullNameObj("Arber", "Beshaj");
    const hobbies = hobbiesObj("Andare in moto", "Leggere", "Allenarmi");

    return {
        fullName : person.firstName + ' ' + person.lastName,
        hobbies : hobbies.hobby,
    }
}

const fullNameObj = require('./name');
const hobbiesObj = require('./hobbies');

console.log(userInfo());