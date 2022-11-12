const nombreElement = document.querySelector('#name')
const ageElement= document.querySelector('#age')
const likesMusicElement= document.querySelector('#likesMusic')

const nombre = 'Odette'
const age = 16
const likesMusic = true

nombreElement.textContent = 'Odette'
ageElement.textContent = 16
if (likesMusic) {
    likesMusicElement.textContent = 'me gusta la musica 🎶'
} else {
    likesMusicElement.textContent = 'no me gusta la musica'
}

const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']
const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

const playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play()
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if ( whiteKeyIndex > -1){
        playNote(whiteKeys[whiteKeyIndex])
        whiteKeys[whiteKeyIndex].style.boxShadow = "10px 10px 10px black"
    }
    
    if ( blackKeyIndex > -1){
        playNote(blackKeys[blackKeyIndex])
        blackKeys[blackKeyIndex].style.boxShadow = "10px 20px 30px black";
    }

})