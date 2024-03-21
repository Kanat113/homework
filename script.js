
const link = 'https://rickandmortyapi.com/api/character';
async function getAndDisplayCharacters() {
    try {
        
        const response = await fetch(link);
        const data = await response.json();

     
        const characters = data.results;
        const characterList = document.getElementById('characters');

        characters.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');
            if (character.status === 'Alive') {
                characterDiv.classList.add('alive');
            }
            else if(character.status === 'unknown'){
                characterDiv.classList.add('unknown');
            }
            else { characterDiv.classList.add('Dead');
        }
            characterDiv.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}" id="${character.id}">
                <p>Status: ${character.status}</p>
            
            `;
            console.log(character.status);
            characterList.appendChild(characterDiv);
            characterDiv.querySelector('img').addEventListener('click', () => {
                alert(`Суротту басканда карточканын id си alertten чыксын: ${character.id}`);
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


getAndDisplayCharacters();
