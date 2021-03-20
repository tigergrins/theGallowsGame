'use strict';

const words = ['кирпич', 'программа', 'окно', 'переменная', 'человечек', 'игрок', 'капуста'];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = ['A'];

for (let i = 0; i < word.length; i++) {
	answerArray[i] = '_';
}

// Вывод загаданного слова
let answer = document.querySelector('.hidden-word');
let answerHTML = `<p>${answerArray.join(' ')}</p>`;
answer.innerHTML = answerHTML;

// Динамический алфавит
let alphabetArray = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'],
	divAlphabet = document.querySelector('.alphabet');

for (let i of alphabetArray) {
	let divLetter = document.createElement('div');
	divLetter.classList.add('divLetter');
	divLetter.innerHTML = `<p>${i}</p>`;
	divAlphabet.append(divLetter);
}

// Счётчик
let counter = 12,
	divCounter = document.querySelector('.counter');

function createCounterDesc() {
	divCounter.innerHTML = `<p>Осталось попыток: ${counter}</p>`;
}

createCounterDesc();

// Выбор буквы
let chosenLetters = document.querySelectorAll('.divLetter');

chosenLetters.forEach(chosenLetter => {
	chosenLetter.addEventListener(`click`, (e) => {
		checking(e.target.textContent);

		chosenLetter.classList.add('hidden');

		win();

		lose();

		createCounterDesc();
	});
	
}); 

// Проверка
function checking(letter) {
	let innerCounter = 0;

	for (let i = 0; i < word.length; i++) {
		if (letter === word[i]) {
			answerArray[i] = letter;
			answerHTML = `<p>${answerArray.join(' ')}</p>`;
			answer.innerHTML = answerHTML;
		} else {
			innerCounter++;
		}
	}

	if (innerCounter == word.length) {
		counter--;
	}
}

// Победа
let divWin = document.querySelector('.win');

function win() {
	let counter = word.length;

	for (let i = 0; i < word.length; i++) {
		if (answerArray[i] !== '_') {
			counter--;
		}
	}

	if (counter == 0) {
		divWin.classList.remove('hidden');
	}
}

// Проигрыш
function lose() {
	let divLose = document.querySelector('.lose');

	divLose.innerHTML = `<p>Вы проиграли. Загадали слово: <span>${word}</span></p>`;

	if (counter <= 0) {
		divLose.classList.remove('hidden');
	}
}


// Кнопка рестарта
let btnRestart = document.querySelector('.btn-restart');

btnRestart.addEventListener('click', function () {
	location.reload();
});