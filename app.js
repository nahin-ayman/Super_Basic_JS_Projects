
let msgEl = document.querySelector('#msg-el')


let array = [
    " 'You are কাচা at Maths' ",
    'You want 2 hours of ICT lab',
    'You hate Biology',
    ' You Love reading books',
    ' You play PUBG',
    'You are Extrovert',
    ' You are a Vitur Dim',
    'You are চাপাবাজ ',
    'You ঘাপলা মারো others tiffin',
    'You are a Topper',
    'You watch BTS',
    'You are a back-bencher',
    'You dont study but get A+ all the time',
    'You think you are a genius',
    'Morshed Sir is your Favourite Sir',
    'You are always late at College'

 ]

 function randomArray() {
    
    let randomNumber = Math.floor(Math.random() * 16)
    let store = array[randomNumber]
    msgEl.textContent = store
 }