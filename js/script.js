const eleGrid = document.querySelector('.grid')
const buttonGenera = document.querySelector('.button')
const eleEndGame = document.querySelector('.endGame')
const eleResult = document.querySelector('.result')
const containerGrid = document.querySelector('.containerGrid')
const containerEndGame = document.querySelector('.containerEndGame')


function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

buttonGenera.addEventListener('click', function() {
    const level = document.querySelector('.difficoltà').value;

    eleGrid.replaceChildren()

    if(level =='facile'){

        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 100);
            } while (arrRandoms.includes(randomNumber))
                arrRandoms.push(randomNumber);
        };
    
        console.log(arrRandoms);

        for(let i = 0; i < 100; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellFacile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            count =0;

            eleCell.addEventListener('click', function() {                           
                if(!arrRandoms.includes(i+1)){
                    console.log(i+1)
                    this.classList.toggle('active')
                    count += 1;
                    console.log(`Hai totalizzato ${count} punti`)
                } else{
                    console.log(i+1)
                    this.classList.toggle('activeBomb')
                    console.log('Hai preso una bomba!')
                    eleCell.classList.add('activeBomb')
                    
                    setTimeout(function () {
                        alert('Hai preso un bomba!')
                        containerGrid.classList.add('hidden');
                        containerEndGame.classList.remove('hidden');                 
                        eleResult.innerHTML=`Il tuo punteggio finale è stato di ${count} punti`
                    }, 1000) 
                    

                }
            });
        };
    };

    if(level == 'medio'){

        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 81);
            } while (arrRandoms.includes(randomNumber))
                arrRandoms.push(randomNumber);
        };
    
        console.log(arrRandoms);

        for(let i = 0; i < 81; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellMedia')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            count =0;

            eleCell.addEventListener('click', function() {                            

                if(!arrRandoms.includes(i+1)){
                    console.log(i+1)
                    this.classList.toggle('active')
                    count += 1;
                    console.log(`Hai totalizzato ${count} punti`)
                } else{
                    console.log(i+1)
                    this.classList.toggle('activeBomb')
                    console.log('Hai preso una bomba!')
                    alert('Hai preso un bomba!')
                    eleGrid.classList.add('hidden');
                    eleEndGame.classList.remove('hidden');
                }
            });
        };
    };
    
    if(level == 'difficile'){

        const arrRandoms = [];
        for (let i = 1; i <= 16; i++) {
            let randomNumber;
            do {
                randomNumber = getRandomInteger(1, 49);
            } while (arrRandoms.includes(randomNumber))
                arrRandoms.push(randomNumber);
        };
    
        console.log(arrRandoms);

        for(let i = 0; i < 49; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellDifficile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            count =0;

            eleCell.addEventListener('click', function() {                           
                if(!arrRandoms.includes(i+1)){
                    console.log(i+1)
                    this.classList.toggle('active')
                    count += 1;
                    console.log(`Hai totalizzato ${count} punti`)
                } else{
                    console.log(i+1)
                    this.classList.toggle('activeBomb')
                    console.log('Hai preso una bomba!')
                    alert('Hai preso un bomba!')
                    eleGrid.classList.add('hidden');
                    eleEndGame.classList.remove('hidden');

                }
            });
        };
    };


});



    