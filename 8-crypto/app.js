/*
Написать 2 функции:

шифратор пароля - функция принимает пароль, 
разбивает по символам, меняет местами какие-то буквы по заданному 
алгоритму и возвращает строку.

проверка пароля - принимает зашифрованный пароль и второй пароль. 
Воспроизводит алгоритм назад на зашифрованном пароле и 
возвращает true, если он совпадает со втором паролем и false, если нет.

crypto(‘password’) -> ssapdorw
check(‘ssapdorw’, ‘password’) -> true
check(‘ssapdorw’, ‘wrong’) -> false
*/


function crypto(pass) {
    const passArr = pass.split('');
    const firstPart = passArr.splice(passArr.length / 2);
    passArr.reverse();
    firstPart.reverse();
    return passArr.concat(firstPart).join('');
}

function check(pass, writedPass) {
    if (writedPass === crypto(pass)) {
        return true;
    }
    return false;
}
console.log(crypto('1234'));
console.log(check('1234', '2143'));
console.log(check('1234', '2134'));