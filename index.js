const phoneNumber = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const btn = document.querySelector('#btn')
const btn2 = document.getElementById('btn2')
const goBack = document.getElementById('btn-back')
const step3 = document.getElementById('step-3')
const step4 = document.getElementById('step-4')
const monthlySelect = document.getElementById('monthly')
const yearlySelect = document.getElementById('yearly')
const monthlySwitch = document.querySelector('.monthly-switch')
const yearlySwitch = document.querySelector('.yearly-switch')
const arcade = document.getElementById('arcade')
const advanced = document.getElementById('advanced')
const pro = document.getElementById('pro')

const newElement = textNode => {
    const errorMessage = document.createElement('p')
    errorMessage.classList.add('invalid')
    const text = document.createTextNode(textNode)
    errorMessage.appendChild(text)
    return errorMessage
}

btn.addEventListener('click', StepOne) 

function StepOne() {    
    validateEmail()    
    validateName()    
    validateNumber()

    if(nameInput.value !== '' && phoneNumber.value !== '' && email.value !== '') {
        document.getElementById('step-1').classList.remove('active')
        document.querySelector('.personal-info').style.display = 'none'
        document.querySelector('.plan-select').style.display = 'block'
        document.getElementById('step-2').classList.add('active')
    }
}

const validateEmail = () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.value.match(regex)) {
        email.focus()
        return true
    } else if(email.value === '') {
        const errorMessage = newElement("can't be blank")
        formBox[1].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    } else {                     
        const errorMessage = newElement("Invalid email format")
        formBox[1].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}

const validateName = () => {
    if(nameInput.value === '') {
        const errorMessage = newElement("can't be blank")       
        formBox[0].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}

const validateNumber = () => {
    if(phoneNumber.value === '') {
        const errorMessage = newElement("can't be blank")                
        document.getElementById('num').appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    } else if(isNaN(phoneNumber.value)) {
        const errorMessage = newElement("wrong format")               
        document.getElementById('num').appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 5000);
    }
}