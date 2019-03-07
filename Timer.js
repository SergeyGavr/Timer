// Timer

let deadline = '2019-03-05';


// функция, корторая определяет остаток времени, 
// и вычленяет оттуда полное время, часы, минуты, секунды
function getTimeRemaining(endtime) {
    // .parse переводит дату в кол-во миллисекунд с 1970г, получаем разницу от дедлайна до текущей даты.
    let t = Date.parse(endtime) - Date.now(), // кол-во миллисекунд
        seconds = Math.floor((t/1000) % 60 ), // floor округляет в меньшую до целого
        minutes = Math.floor((t/1000/60) % 60), //остаток минут
        hours = Math.floor(t/(1000*60*60)); // всего часов
    // hours = Math.floor((t/1000/60/60) % 24) // остаток часов
    // days = hours = Math.floor(t/(1000*60*60*24));

    return {
        'total' : t, // всего миллисекунд
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function SetClock(id, endtime) {
    // получаем переменные со страницы
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            // 2 цифры в количестве секунд/минут/часов (01,02,03...)
            if (t.seconds < 10) {
                t.seconds = '0' + t.seconds;
            }
            if (t.minutes < 10) {
                t.minutes = '0' + t.minutes;
            }
            if (t.hours < 10) {
                t.hours = '0' + t.hours;
            }
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
}

SetClock('timer', deadline);