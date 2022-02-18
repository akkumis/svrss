// Напишите программу на JavaScript:

//      1. Покажите свое имя и группу с помощью JS 

// const message = confirm()

const btnTask1 = document.querySelector('.btn-1')
const result1 = document.querySelector('.result-1')


btnTask1.addEventListener('click',()=>{
    const userName = prompt('Ваше имя')
    const userGroup = prompt('Группа')
    result1.textContent = `Меня зовут ${userName}, учусь в ${userGroup} группе`
})

    
//      2. Отобразите текущий день и время в следующем формате.  
//      Пример вывода: Год: текущий год Сегодня: понедельник (текущий день недели) 
//      Дата: текущий день Месяц: текущий месяц Текущее время: текущее время (00:00:00) 

const btn2 = document.querySelector('.btn-2')
const result2 = document.querySelector('.result-2')

const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

btn2.addEventListener('click',()=>{
    const date = new Date()
    result2.innerHTML = `
    Год: ${date.getFullYear()}.<br> 
    День: ${days[date.getDay()]}.<br>
    Дата: ${date.getDate()}.<br>
    Месяц: ${date.getMonth() + 1}.<br> 
    Текущее время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `
})
     
//      3. подсчитайте количество дней, оставшихся до окончания университета Пример вывода:  
//      До свободы осталось 349 дней!

const btn3 = document.querySelector('.btn-3')
const inputDate = document.querySelector('.input-date')
const result3 = document.querySelector('.result-3')

btn3.addEventListener('click', ()=>{
const graduationDate = inputDate.value.split('.').reverse().join('.')

const oneDay = 1000 * 60 * 60 * 24
const diffInTime = new Date(graduationDate).getTime() - new Date().getTime()
const diffInDays = Math.round(diffInTime / oneDay)
result3.textContent = `${diffInDays} до свобовы!!!`

})




     
//      4. вычислить умножение и деление двух чисел (ввод от пользователя).  
//      Пример вывода: 1-е число: 12 2-е число: 10 Умножить Diide Результат: 120 Ваш сайт должен работать. 
//       Пришлите мне ссылку на github с файлом html и js.

    const buttons = document.querySelectorAll('button')
    const input1 = document.querySelector('#num1')
    const input2 = document.querySelector('#num2')
    const result4 = document.querySelector('.result-4 span')

    buttons.forEach(btn=>{
        btn.addEventListener('click',e => {
            e.preventDefault();  
            if(e.target.classList.contains('multiply')){
                result4.textContent = multiply(input1, input2)
            }else if(e.target.classList.contains('divide')){
                result4.textContent = divide(input1, input2)
            }
        })
    })

    function multiply(a,b){
        return Math.floor(a.value * b.value)
    }
    function divide(a,b){
        return Math.floor(a.value / b.value)
    }



    