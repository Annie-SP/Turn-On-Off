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
    let turned = document.querySelector('.turned');
    let input = document.querySelector('.input');
    let turn = false;


    function turning(){
         if (turn) {
        buttonClicked.innerHTML = "Turn On";
        turned.style = 'background-color: black;';
        input.innerText = `Last turn on: ` + new Date();
        console.log(`Last turn on: `  + new Date());
        turn = false;
        } else {
        buttonClicked.innerHTML = "Turn Off";
        turned.style = 'background-color: white;';
        input.innerText = `Last turn off: ` +  new Date();  
        console.log(`Last turn off: `  +  new Date());
        turn = true;
        }
        localStorage.setItem('conditiionTime', new Date());
        localStorage.setItem('conditiion', turn);
    }

    buttonClicked.addEventListener('click', turning);


// let counter = localStorage.getItem('russophobiaLevel') || 0;

//     buttonClicked.addEventListener('click', function(){
//          if (turn) {
//         buttonClicked.innerHTML = "Turn On";
//         turned.style = 'background-color: black;';
//         input.innerText = `Last turn on: ` + new Date();
//         turn = false;
//         } else {
//         buttonClicked.innerHTML = "Turn Off";
//         turned.style = 'background-color: white;';
//         input.innerText = `Last turn off: ` + new Date();  
//         turn = true;
//         }
//         localStorage.setItem(input.innerText, new Date());
//     });