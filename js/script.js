const eleGrid = document.querySelector('.grid')
const buttonGenera = document.querySelector('.button')

const arrRandoms = [];
 for (let i = 1; i <= 16; i++) {
	 let randomNumber;
    do {
      randomNumber = getRandomInteger(1, 100);
   } while (arrRandoms.includes(randomNumber))
      arrRandoms.push(randomNumber);
}

console.log(arrRandoms);

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

buttonGenera.addEventListener('click', function() {
    const level = document.querySelector('.difficoltà').value;

    eleGrid.replaceChildren()

    if(level =='facile'){
        for(let i = 0; i < 100; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellFacile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {                           
                if(!arrRandoms.includes(i+1)){
                    console.log(i+1)
                    this.classList.toggle('active')
                    console.log('Nuovo punto')

                } else{
                    console.log(i+1)
                    this.classList.toggle('activeBomb')
                    console.log('Hai preso una bomba!')
                }
            });
        };
    };

    if(level == 'medio'){
        for(let i = 0; i < 81; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellMedia')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active')
                console.log(i+1)
            });
        };
    };
    
    if(level == 'difficile'){
        for(let i = 0; i < 49; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellDifficile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active')
                console.log(i+1)
            });
        };
    };
});
    