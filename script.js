



// All Elements

const thePin = document.getElementById('the-pin');
const generatePin = document.getElementById('generate-pin');
const writeThePin = document.getElementById('writeThePin');
const buttons = document.getElementsByClassName('button');
const backsSpace = document.querySelector('.backspace');
const allClear = document.querySelector('.allclear');
const submitBtn = document.getElementById('submitBtn');
const actionLeft = document.getElementById('action-left');
const notMatched = document.querySelector('.notMatched');
const matched = document.querySelector('.matched');

// Generating the pin

generatePin.addEventListener('click', function(){
    thePin.value = '';
    thePin.value = getRandomNumber(1000, 9999);
    writeThePin.value = '';
    submitBtn.disabled = false;
    actionLeft.innerText = 3;
    document.querySelector('.action-left').style.display = 'none';
    notMatched.style.display = 'none';
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for(const btn of buttons) {
    btn.addEventListener('click', function() {
        if(writeThePin.value.length < 4) {
            writeThePin.value += this.innerText;
        }
    })
}

backsSpace.addEventListener('click', function(){
    const theValue = (writeThePin.value).split('');
    if(theValue.length > 0) {
        theValue.length--;
        writeThePin.value = theValue.join(''); 
    }
})
allClear.addEventListener('click', function(){
    writeThePin.value = '';
})


submitBtn.addEventListener('click', function(){
    if(thePin.value === writeThePin.value){
        notMatched.style.display = 'none';
        matched.style.display = 'block';
        setTimeout(()=>{
            thePin.value = '';
            writeThePin.value = '';
            matched.style.display = 'none';
            this.disabled = true;
            actionLeft.innerText = 3;
        },1000);
    } else {
        document.querySelector('.action-left').style.display = 'block';
        matched.style.display = 'none';
        notMatched.style.display = 'block';
        actionLeft.innerText = parseInt(actionLeft.innerText) - 1;
        if(parseInt(actionLeft.innerText) === 0 ) {
            submitBtn.disabled = true;
        } else {
            submitBtn.disabled = false;
        }
    }
})

