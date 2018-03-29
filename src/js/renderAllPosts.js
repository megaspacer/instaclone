import { isArray } from "util";

const someFunc = (arr) => {
    const check = Array.isArray(arr);
    if (check === true) {
        let section = document.createElement('section');
        console.log(section);
        section.classList.add('post');
        section.innerHTML = '<img class"photo" src="">'
    };
 
someFunc(arr);
 
export default someFunc;
    // проверить что там что то есть и это массив
    // создаешь элемент section
    // добавляешь класс post
    // через InnerHTML добавить тэг img  с src и class
};
