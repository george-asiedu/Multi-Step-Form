const steps = document.querySelectorAll('.stp')
const phone = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const nextStep = document.querySelectorAll('.next-btn')
const prevStep = document.querySelectorAll('.prev-btn')
const plans = document.querySelectorAll('.plan-card')
const toggleSwitch = document.querySelector('.switch')


const obj = {
    plan: null,
    kind: null,
    price: null
}

const newElement = textNode => {
    const errorMessage = document.createElement('p')
    errorMessage.classList.add('errText')
    const text = document.createTextNode(textNode)
    errorMessage.appendChild(text)
    return errorMessage
}

nextStep[0].addEventListener('click', StepOne) 

function StepOne() {    
    validateEmail()    
    validateName()    
    validateNumber()

    if(nameInput.value !== '' && phone.value !== '' && email.value !== '') {
        document.getElementById('step-1').classList.remove('active')
        steps[0].style.display = 'none'
        steps[1].style.display = 'block'
        document.getElementById('step-2').classList.add('active')
    }
}

const validateEmail = () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.value.match(regex)) {
        email.focus()
        return true
    } else if(email.value === '') {
        const errorMessage = newElement("This field is required")
        formBox[1].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    } else {                     
        const errorMessage = newElement("Invalid email format")
        formBox[1].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    }
}

const validateName = () => {
    if(nameInput.value === '') {
        const errorMessage = newElement("This field is required")       
        formBox[0].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    }
}

const validateNumber = () => {
    if(phone.value === '') {
        const errorMessage = newElement("This field is required")                
        formBox[2].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    } else if(isNaN(phone.value)) {
        const errorMessage = newElement("wrong format")               
        formBox[2].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
    }
}

prevStep[0].addEventListener('click', () => {
    document.getElementById('step-1').classList.add('active')
    steps[0].style.display = 'block'
    steps[1].style.display = 'none'
    document.getElementById('step-2').classList.remove('active')
})

plans.forEach(plan => {
    plan.addEventListener('click', () => {
        document.querySelector(".selected").classList.remove("selected");
        plan.classList.add('selected')
        const planName = plan.querySelector('b').innerText
        const planPrice = plan.querySelector('.plan-price').innerText
        obj.plan = planName
        console.log(obj.plan)
        obj.price = planPrice
        console.log(obj.price)
    })
})

toggleSwitch.addEventListener('click', () => {
    const val = toggleSwitch.classList.toggle('active')

    if(val) {
        document.querySelector(".monthly").classList.remove("sw-active")
        document.querySelector(".yearly").classList.add("sw-active")
        const discount = document.querySelectorAll('.free')
        discount.forEach(free => {
            free.style.display = 'block'
        })
    } else {
        document.querySelector(".monthly").classList.add("sw-active")
        document.querySelector(".yearly").classList.remove("sw-active")
        const discount = document.querySelectorAll('.free')
        discount.forEach(free => {
            free.style.display = 'none'
        })
    }

    planSubscribtion(val)
    obj.kind = val
})

const planSubscribtion = price => {
    const yearlyPrice = [90, 120, 150]
    const monthlyPrice = [9, 12, 15]
    const prices = document.querySelectorAll('.plan-price')

    if(price) {
        prices[0].innerText = `$${yearlyPrice[0]}/yr`
        prices[1].innerText = `$${yearlyPrice[1]}/yr`
        prices[2].innerText = `$${yearlyPrice[2]}/yr`
        setTime(true)
    } else {
        prices[0].innerText = `$${monthlyPrice[0]}/mo`
        prices[1].innerText = `$${monthlyPrice[1]}/mo`
        prices[2].innerText = `$${monthlyPrice[2]}/mo`
        setTime(false)
    }
}

nextStep[1].addEventListener('click', () => {
    if(plans.value !== '') {
        document.getElementById('step-2').classList.remove('active')
        steps[1].style.display = 'none'
        steps[2].style.display = 'block'
        document.getElementById('step-3').classList.add('active')
    }
})

prevStep[1].addEventListener('click', () => {
    document.getElementById('step-2').classList.add('active')
    steps[1].style.display = 'block'
    steps[2].style.display = 'none'
    document.getElementById('step-3').classList.remove('active')
})