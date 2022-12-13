'use strict';
// **Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом**
    
//     Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
//     В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
    
//     Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
//     Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
    
//     Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
//     Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення
    
//     Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.
    
//     Логіку роботи реалізуйте в окремому js-файлі.

//оголошуємо змінні

    let buttonClicked = document.getElementById('turn');
    let changeBG = document.querySelector('.turned');
    let timeInput = document.querySelector('.input');
    let turnOn;


    window.addEventListener('DOMContentLoaded', loadTime);

    buttonClicked.addEventListener('click', switchover);
    buttonClicked.addEventListener('dblclick', removeAllTasksFromLocalStorage);

    function loadTime() {
        //оголошуємо змінну яка буде використовуватись для інпута
        let data = JSON.parse(localStorage.getItem('dateInput'));
           console.log(data);
        let condition = JSON.parse(localStorage.getItem('condition'));
           console.log(condition);
 

        if (data !== null){
           timeInput.innerHTML = data;
           buttonClicked.innerHTML = condition;
           turnOn = JSON.parse(localStorage.getItem('turnon'));
           console.log(localStorage.getItem('turnon'));
           console.log(timeInput.innerHTML);
            }
        }

    function switchover(){ 
        let data = [];
        data.push(timeInput).innerHTML;
        if (turnOn) {
            buttonClicked.innerHTML = "Turn Off";
            changeBG.style = 'background-color: white;';
            timeInput.innerHTML = `Last turn on: ` +  new Date();
            console.log(`Last turn on: `  +  new Date());
            turnOn = false;
        } else {
            buttonClicked.innerHTML = "Turn On";
            changeBG.style = 'background-color: black;';
            timeInput.innerHTML = `Last turn off: ` +  new Date();
            console.log(`Last turn off: `  + new Date());
            turnOn = true;
        }
        localStorage.setItem('dateInput', JSON.stringify(timeInput.innerHTML));
        localStorage.setItem('condition', JSON.stringify(buttonClicked.innerHTML));
        localStorage.setItem('turnon', JSON.stringify(turnOn));
    }

    function removeAllTasksFromLocalStorage(){
            localStorage.clear();
        }


