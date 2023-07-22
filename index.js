const phoneNumber = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const btn = document.querySelector('#btn')
const num = document.getElementById('num')
const step1 = document.getElementById('step-1')
const step2 = document.getElementById('step-2')
const step3 = document.getElementById('step-3')
const step4 = document.getElementById('step-4')
const personalInfo = document.querySelector('.personal-info')
const planSelect = document.querySelector('.plan-select')


btn.addEventListener('click', nextStep)

function nextStep() {

    const validateEmail = () => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(email.value.match(regex)) {
            email.focus()
            return true
        } else if(email.value === '') {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode("Can't be blank")
            errorMessage.appendChild(textNode)

            formBox[1].appendChild(errorMessage)
            setTimeout(() => errorMessage.remove(), 3000);
        } else {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode('Invalid email format')
            errorMessage.appendChild(textNode)

            formBox[1].appendChild(errorMessage)
            setTimeout(() => errorMessage.remove(), 3000);
        }
    }

    validateEmail()

    if(nameInput.value === '') {
        const errorMessage = document.createElement('p')
        errorMessage.classList.toggle('invalid')
        const textNode = document.createTextNode("Can't be blank")
        errorMessage.appendChild(textNode)
        
        formBox[0].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);

        if(phoneNumber.value === '') {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode("Can't be blank")
            errorMessage.appendChild(textNode)
                
            num.appendChild(errorMessage)
            setTimeout(() => errorMessage.remove(), 3000);
        } else if(isNaN(phoneNumber)) {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode("Wrong format")
            errorMessage.appendChild(textNode)
                
            num.appendChild(errorMessage)
            setTimeout(() => errorMessage.remove(), 3000);
        }
    } else {
        step1.classList.remove('active')
        personalInfo.style.display = 'none'
        planSelect.style.display = 'block'
        step2.classList.add('active')
    } 
    
    
}