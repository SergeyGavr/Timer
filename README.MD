1. В переменную deadline помещаем дату нашего дедлайна, в формате ГГГГ-ММ-ДД.

2. Объявляем функцию getTimeRemaining с параметром "endtime", которая определяет остаток времени, которое осталось до нашего дедлайна. Функция возвращает полное колличество миллисекунд, часы, минуты, секунды(по желанию можно ввести еще и дни, месяцы...).
Метод .parse() переводит дату в кол-во миллисекунд с 1970г.

3. Объявляем функцию SetClock с параметрами id и endtime.
Внутри объявляем переменные и помещаем туда элементы со страницы. Также в переменную timeInterval определяем setInterval функции updateClock(смотри п. 4), которая будет обновлять данные на странице каждую секунду.

4. Внутри функции updateClock() объявляем переменную t, и присваиваем ей объект, который возвращает функция getTimeRemaining. 
Делаем проверку, если количество секунд/минут/часов меньше 10, добавляем ноль.

5. Обновляем значения на странице через метод textContent, значения получаем из обьекта t.

6. Если общее количество миллисекунд (total), останавливаем функцию с помощью clearInterval.

7. Вызываем функцию SetClock, в качестве атрибутов устанавливаем 'timer' (id) и deadline (endtime).