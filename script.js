
const adviceId = document.querySelector('.ad-id')
const advice = document.querySelector('.txt')
const diceIcon = document.querySelector('.dice-icon')


diceIcon.addEventListener('click', ()=>{  
fetch('https://api.adviceslip.com/advice')
.then((res)=>{
return  res.json()
})

.then((data)=>{

advice.innerHTML = JSON.stringify(data.slip.advice)
adviceId.innerHTML = (data.slip.id) 

})


.catch((e)=>{
 console.log('Error', e)
})

})
