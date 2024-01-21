const clock = document.getElementById("clock")
// or const clock = document.querySelector("#clock")

// setInterval is a predefined method which says you give me he time I will run accordingly & it takes a callback
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString()); //so ye every second console me automatically print hoga but we need in frontend
    clock.innerHTML=date.toLocaleTimeString()  // here woh id ko select karke uske andr ye humne daal dia
}, 1000 ) // 1000 = 1seconds 

