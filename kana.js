const tovary = ['Nike Air', 'Addidas', 'Redbull'];
const baa = [100, 150, 120];
let baanyKotor = []

let daana = 0


function load() {
    render();
}

function render() {
    const content = document.getElementById('card');
    
    content.innerHTML = ''; // Clear previous content
    for (let i = 0; i < tovary.length; i++) {
        content.innerHTML += zeigeWaare(i);
    }
}
