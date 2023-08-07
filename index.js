const phoneNumber = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const btn = document.querySelector('#btn')
const btn2 = document.getElementById('btn2')
const goBack = document.getElementById('btn-back')
const togglePlan = document.querySelector('.switch')
const month = document.querySelector('.monthly')
const annualArcade = document.querySelector('.annual-arcade')
const annualAdvanced = document.querySelector('.annual-advanced')
const annualPro = document.querySelector('.annual-pro')
const options = document.querySelectorAll('.option')



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

goBack.addEventListener('click', previous)

function previous() {
    document.querySelector('.personal-info').style.display = 'block'
    document.getElementById('step-1').classList.add('active')
    document.querySelector('.plan-select').style.display = 'none'
    document.getElementById('step-2').classList.remove('active')
}

togglePlan.addEventListener('click', () => {
    togglePlan.classList.toggle('active')

    if(togglePlan.classList.contains('active')) {
        document.querySelector('.yearly').classList.add('boldText')
        month.classList.remove('monthly')
        annualArcade.textContent = '$90/yr'
        annualAdvanced.textContent = '$120/yr'
        annualPro.textContent = '$150/yr'
        document.querySelector('.discount-1').style.display = 'block'
        document.querySelector('.discount-2').style.display = 'block'
        document.querySelector('.discount-3').style.display = 'block'
    }
    else {
        document.querySelector('.yearly').classList.remove('boldText')
        month.classList.add('monthly')
        annualArcade.textContent = '$9/mo'
        annualAdvanced.textContent = '$12/mo'
        annualPro.textContent = '$15/mo'
        document.querySelector('.discount-1').style.display = 'none'
        document.querySelector('.discount-2').style.display = 'none'
        document.querySelector('.discount-3').style.display = 'none'
    }
})

// btn2.addEventListener('click', () => {
//     options.forEach( option => {
//         option.addEventListener('click', () => {
//             option.classList.add('active-plan')
//             console.log(option)
//         })
//     })
// })

for(const option of options) {
    option.addEventListener('click', (e) => {
        const element = e.target
        element.classList.add('active-plan')
        console.log(element)

        if(element.classList.contains('active-plan')) {
            element.classList.add('active-plan')
       
        for(const option of options) {
           if(option != element){
            option.classList.remove('active-plan')
           }
    
       }
        } else {
            element.classList.remove('active-plan')
        }
    })
}



