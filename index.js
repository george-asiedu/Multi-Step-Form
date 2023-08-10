const steps = document.querySelectorAll('.stp')
const phone = document.querySelector('#phone-number')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const formBox = document.querySelectorAll('.form-box')
const nextStep = document.querySelectorAll('.next-btn')
const prevStep = document.querySelectorAll('.prev-btn')
const plans = document.querySelectorAll('.plan-card')
const toggleSwitch = document.querySelector('.switch')
const addons = document.querySelectorAll('.box')
const total = document.querySelector(".total b");

let duration;

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


nextStep[0].addEventListener('click', () => {
    validateEmail()    
    validateName()    
    validateNumber()

    if(nameInput.value !== '' && phone.value !== '' && !isNaN(phone.value) && email.value !== '') {
        steps[0].style.display = 'none'
        steps[1].style.display = 'block'
        document.getElementById('step-2').classList.add('active')
    }
}) 


prevStep[0].addEventListener('click', () => {
    document.getElementById('step-1').classList.add('active')
    steps[0].style.display = 'block'
    steps[1].style.display = 'none'
    document.getElementById('step-2').classList.remove('active')
})


const validateName = () => {
    if(nameInput.value === '') {
        const errorMessage = newElement("This field is required")       
        formBox[0].appendChild(errorMessage)
        setTimeout(() => errorMessage.remove(), 3000);
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


plans.forEach(plan => {
    plan.addEventListener('click', () => {
        document.querySelector(".selected").classList.remove("selected");
        plan.classList.add('selected')
        const planName = plan.querySelector('b').innerText
        const planPrice = plan.querySelector('.plan-price').innerText
        obj.plan = planName
        obj.price = planPrice
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
        planDuration(true)
    } else {
        prices[0].innerText = `$${monthlyPrice[0]}/mo`
        prices[1].innerText = `$${monthlyPrice[1]}/mo`
        prices[2].innerText = `$${monthlyPrice[2]}/mo`
        planDuration(false)
    }
}


nextStep[1].addEventListener('click', () => {
    if(plans.value !== '') {
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


function label(element) {
    const idValue = element.id
    const labels = document.querySelectorAll('label')

    for(const label of labels) {
        if(label.htmlFor == idValue) {
            return label
        }
    }
}


addons.forEach(addon => {
    addon.addEventListener('click', e => {
        const selectAddon = addon.querySelector('input')
        const id = addon.getAttribute('data-id')
        if(selectAddon.checked) {
            selectAddon.checked = false
            addon.classList.remove('selected-add')
            displayAddon(id, false)
        } else {
            selectAddon.checked = true
            addon.classList.add('selected-add')
            displayAddon(addon, true)
            e.preventDefault()
        }
    })
})


const displayAddon = (add, val) => {
    const template =document.querySelector('template')
    const clone = template.content.cloneNode(true)
    const serviceName = clone.querySelector('.service-name')
    const servicePrice = clone.querySelector('.service-price')
    const serviceId = clone.querySelector('.selected-addons')

    if(add && val) {
        serviceName.innerText = add.querySelector('label').innerText
        servicePrice.innerText = add.querySelector('.price').innerText
        serviceId.setAttribute('data-id', add.dataset.id)
        document.querySelector('.selected-addons-box').appendChild(clone)
    } else {
        const addons = document.querySelectorAll('.selected-addons')
        addons.forEach(addon => {
            const addonAttr = addon.getAttribute('data-id')
            
            if(addonAttr == add) {
                addon.remove()
            }
        })
    }
}


nextStep[2].addEventListener('click', () => {
    if(addons.checked !== '') {
        steps[2].style.display = 'none'
        steps[3].style.display = 'block'
        document.getElementById('step-4').classList.add('active')    
    }
})

nextStep[3].addEventListener('click', () => {
    steps[3].style.display = 'none'
    steps[4].style.display = 'block'
    document.getElementById('step-4').classList.add('active')
    planTotal()
    addSummary(obj)
})


prevStep[2].addEventListener('click', () => {
    document.getElementById('step-3').classList.add('active')
    steps[2].style.display = 'block'
    steps[3].style.display = 'none'
    document.getElementById('step-4').classList.remove('active')
})


const addSummary = obj => {
    const planName = document.querySelector('.plan-name')
    const planPrice = document.querySelector('.plan-price')
    planName.innerText = `${obj.plan.innerText}`
    planPrice.innerText = `${obj.price.innerText} (${
        obj.kind ? 'yearly' : 'monthly'
    })`
}

const planTotal = () => {
    const price = planPrice.innerHTML
    const regex = price.replace(/\D/g, '')
    const addonPrices = document.querySelectorAll('.selected-addons .service-price')

    let planValue = 0;

    for(let i = 0; i , addonPrices.length; i++) {
        const price = addonPrices[i].innerHTML
        const regex = price.replace(/\D/g, '')

        planValue += Number(regex)
    }

    total.innerHTML = `$${planValue + Number(regex)}/${
        duration ? 'yr' : 'mo'}`
}


const planDuration = time => {
    return duration = time
}