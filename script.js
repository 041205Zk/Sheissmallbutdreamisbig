// Sıla Şakaları Veritabanı 😜
const silaJokes = [
    "Sıla o kadar kısa ki yağmur yağınca en son ıslanan o!",
    "Sıla'nın boyunu ölçmek için altına ne konulur? - Göktaşları!",
    "Sıla merdivene çıkınca ne olur? - Gökdelen olur!",
    "Sıla fotoğraf çektirirken ne der? - 'Yukarıdan çek!'",
    "Sıla'nın en sevdiği ulaşım aracı? - Yürüyen merdiven!"
];

// Oyun Değişkenleri
let score = 0;
let stonesCaught = 0;

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Şakaları Yükle
    const jokesContainer = document.getElementById('jokes-container');
    silaJokes.forEach(joke => {
        const jokeElement = document.createElement('div');
        jokeElement.className = 'sila-joke';
        jokeElement.innerHTML = `😂 ${joke}`;
        jokeElement.onclick = () => jokeElement.style.background = '#ff99ff';
        jokesContainer.appendChild(jokeElement);
    });

    // Oyunları Başlat
    startBalloonGame();
    startStoneGame();
    document.getElementById('europapa').play();
});

// Balon Oyunu
function startBalloonGame() {
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerHTML = '🎈';
        balloon.style.left = Math.random() * 90 + '%';
        
        balloon.onclick = () => {
            playSound('pop');
            score += 10;
            document.getElementById('score').textContent = score;
            balloon.remove();
            showJokePopup();
        };

        document.getElementById('balloon-field').appendChild(balloon);
    }, 1500);
}

// Göktaş Oyunu
function startStoneGame() {
    setInterval(() => {
        const stone = document.createElement('div');
        stone.className = 'stone';
        stone.innerHTML = '🌠';
        stone.style.left = Math.random() * 95 + '%';
        
        stone.onclick = () => {
            stonesCaught++;
            document.getElementById('stone-counter').textContent = `Yakalanan Taş: ${stonesCaught}`;
            stone.remove();
            playSound('pop');
        };

        document.getElementById('stone-field').appendChild(stone);
    }, 2000);
}

// Şaka Göster
function showJokePopup() {
    const joke = silaJokes[Math.floor(Math.random() * silaJokes.length)];
    const popup = document.createElement('div');
    popup.className = 'sila-joke';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.textContent = joke;
    
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}

// Ses Kontrolü
function playSound(type) {
    const sounds = {
        pop: document.getElementById('pop-sound'),
        laugh: document.getElementById('laugh-sound'),
        music: document.getElementById('europapa')
    };
    sounds[type].currentTime = 0;
    sounds[type].play();
}
