const contacts = document.querySelector('.contacts');
const searchForm = document.querySelector('.searchForm')

let myList = ['Cook Rice', 'Wash Plates', 'Call Mom', 'Read For Test', 'Feed Dog'];

let numbers = [3,23,4,5,6,7,8,9];

html = '';

newHtml = (function (html){
    return '</br><div>'+html+'</div> <hr>';
})

myList.forEach(function(item, index){
    html += newHtml(item);
});

contacts.innerHTML = html;


