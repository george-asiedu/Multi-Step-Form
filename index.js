const phoneNumber = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const btn = document.querySelector('#btn')
const num = document.getElementById('num')


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
        } else {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode('Invalid email format')
            errorMessage.appendChild(textNode)

            formBox[1].appendChild(errorMessage)
        }
    }

    validateEmail()

    if(nameInput.value === '') {
        const errorMessage = document.createElement('p')
        errorMessage.classList.toggle('invalid')
        const textNode = document.createTextNode("Can't be blank")
        errorMessage.appendChild(textNode)
        
        formBox[0].appendChild(errorMessage)

        if(phoneNumber.value === '') {
            const errorMessage = document.createElement('p')
            errorMessage.classList.toggle('invalid')
            const textNode = document.createTextNode("Can't be blank")
            errorMessage.appendChild(textNode)
                
            num.appendChild(errorMessage)
        }
    } 
    
    
}