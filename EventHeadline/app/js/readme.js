Оригінальний код:

document.getElementById('selectId').addEventListener('change',filterFaculty);

function filterFaculty(){
  var select = document.getElementById('selectId'),
      div = document.querySelectorAll('#our-work a');
  for (i=0;i<div.length;i++){
    if (select.value == 'View by Category' || div[i].getAttribute('data-category').indexOf(select.value) !== -1) {
      div[i].style.display = 'block';
    } else {
      div[i].style.display = 'none';
    }
  }
}

Перше, що кидається в очі - document.getElementById('selectId') юзається два рази - виносим за межі функції

var select = document.getElementById('selectId');
select.addEventListener('change',filterFaculty);

function filterFaculty(){
  var div = document.querySelectorAll('#our-work a');
  for (i=0;i<div.length;i++){
    if (select.value == 'View by Category' || div[i].getAttribute('data-category').indexOf(select.value) !== -1) {
      div[i].style.display = 'block';
    } else {
      div[i].style.display = 'none';
    }
  }
}

Там вилазила помилка що indexOf не може бути застосованим для значення null, яке поверталось з getAttribute.
Мені стало цікаво якого хрена воно взагалі там вилазить.
Виявилось, що окрім посилань такого типу 

// <a data-category="HTML" href="#work-project-popup1" rel="project">

ще ловилось це поле

// <div class="btn-view-more-project">
//          <a href="#">
//            <span>view more</span>

для якого атрибуту data-category взагалі немає. Тобто селектор "#our-work a" був неточним, а правильніше
його записати "#our-work .wrapper-work-project a", тоді оте поле "view more" не попадає і помилка не висвічується

===

Як взагалі працюють селектори:

document.getElementById('selectId') - на виході елемент з id = 'selectId' (можеш попробувати в консолі девтулс)
document.querySelectorAll('#our-work a') - знаходить всі елементи з id = 'our-work' (там один всього) і потім всередині
нього всі посилання ('a'); додатковий селектор '.wrapper-work-project' (по класу) обмежив пошук до однієї секції, в яку не попадає ота 'view more';
в даному випадку всі посилання збирається в // об'єкт NodeList  

===

Новий код:

var select = document.getElementById('selectId');
select.addEventListener('change',filterFaculty);

function filterFaculty(){
  var div = document.querySelectorAll('#our-work .wrapper-work-project a');
  for (i=0;i<div.length;i++){
    if (select.value == 'View by Category' || div[i].getAttribute('data-category').indexOf(select.value) !== -1) {
      div[i].style.display = 'block';
    } else {
      div[i].style.display = 'none';
    }
  }
}

Мене напрягла ітерація по по зібраним посиланням (змінна div) через for і індекси. Якась срана сішка)))
На заміну такій індуській ітерації в JS є функція forEach, яка повертає по черзі кожен елемент в масиві.
Так як це JS і тут може всяка фігня, forEach для NodeList не існує, тільки для масива (Ruby дико сміється), тому тре NodeList перетворити в Array (масив)

Нагуглив таку штуку:

[].slice.call(document.querySelectorAll(...));

На виході зразу масив. Я взагалі не шарю як воно працює (через срані Prototypes якось), ну і пофіг)

Маєм:

var select = document.getElementById('selectId');
select.addEventListener('change',filterFaculty);

function filterFaculty(){
  var divs = [].slice.call(document.querySelectorAll("#our-work .wrapper-work-project a"));

  divs.forEach(function(div) {
  	if (select.value == 'View by Category' || div.getAttribute('data-category').indexOf(select.value) !== -1) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}

На кожному новому кроці ітерації в тіло функції передається div - кожен з елементів масиву divs по черзі.
Я дуже довго вїжджав якого хрена там робить indexOf, тому що він застосовується до масивів, а після getAttribute там стрічка. Індуси)))

Як працює indexOf:

припустим маємо масив
var arr = ['a', 'b', 'c', 'd', 'e']

хочемо дізнатись на якому індексі літера 'c'

arr.indexOf('c') -> отримуємо 2
arr.indexOf('e') -> 4
arr.indexOf('xxsdsd') -> буде -1 тому що такого елемента в масиві немає

той індус, який писав код хотів таким ідіотським чином перевірити чи значення існує. в НЕ масиві)))))

===

Як взагалі на сторінці переключаються в дроп-дауні значення HTML, CSS, PHP

Якщо стоїть 'View by category', то атрибут 'block' прописується у всіх div+ах і вони показується на сторінці
Якщо стоїть будь-яке інше значення - 'block' прописується тільки на вибраний div і тільки він показується на сторінці - у всі інші ставиться 'none'

Для початку запишем не по-нормальному перевірку

Єресь: div.getAttribute('data-category').indexOf(select.value) !== -1
Норм:  div.getAttribute('data-category') === select.value

Через getAttribute отримається значення 'data-category' для кожного div+a (воно там співпадає з текстом - HTML, CSS, PHP)
select.value - те значення яке вибране користувачем

forEach проходить по всім знайденим div+ам і відмічає кожного або 'block' (показувати) або 'none' (приховати) - в залежності від того, яке значення
вибрав користувач в дроп-дауні

Новий код:

var select = document.getElementById('selectId');
select.addEventListener('change',filterFaculty);

function filterFaculty(){
  var divs = [].slice.call(document.querySelectorAll("#our-work .wrapper-work-project a"));

  divs.forEach(function(div) {
  	if (select.value == 'View by Category' || div.getAttribute('data-category') === select.value) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}

Логка перевірки:

|| - це "або"
якщо select.value дорівнює 'View by Category' АБО div.getAttribute('data-category'), то дів показувати
якщо ні - приховати

порівняння з 'View by Category' справдиться для всіх, тому всі і покажуться
div.getAttribute('data-category') - будуть індивідуальними і показуватись будуть тільки ті в яких співпадає значення з select.value

Мене ще напрягло, що div.style.display прописується два рази. Ліпше його винести

div.style.display = divs.forEach(function(div) {
	if (select.value == 'View by Category' || div.getAttribute('data-category') === select.value) {
    'block';
  } else {
    'none';
  }
});

І select.value повторюється два рази. В Рубі є класна функція any? якою можна перевірити масив на наявність потрібного значення (на виході - true або false)
В JS вона називається some()

було - select.value == 'View by Category' || div.getAttribute('data-category') === select.value
стало - ['View by Category', div.getAttribute('data-category')].some(value => value === select.value)

логіка така: some бере по черзі елементи з масиву, поміщає їх у змінну value і чЕкає чи value дорівнює вибраному select.value
якщо такий збіг є ХОЧА Б ДЛЯ ОДНОГО елемента масиву - повертається true; якщо збігів немає взагалі - false

div.style.display = divs.forEach(function(div) {
	if ['View by Category', div.getAttribute('data-category')].some(value => value === select.value) {
    'block';
  } else {
    'none';
  }
});

if .. else можна замінити на скорочену версію ? :

div.style.display = divs.forEach(function(div) {
	['View by Category', div.getAttribute('data-category')].some(value => value === select.value) ? 'block' : 'none';
});

якщо перевірка дає true повертається 'block', false - повертається 'none', і те, що повернулось присвоюється до div.style.display

фінальний код

var select = document.getElementById('selectId');
select.addEventListener('change', filterFaculty);

function filterFaculty() {
  var divs = [].slice.call(document.querySelectorAll("#our-work .wrapper-work-project a"));
  
  divs.forEach(function(div) {
    div.style.display = ['View by Category', div.getAttribute('data-category')].some(testValue => testValue === select.value) ? 'block' : 'none';
  });
}