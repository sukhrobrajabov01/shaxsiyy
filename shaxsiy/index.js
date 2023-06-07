let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const advice = data.slip.advice;
        const id = data.slip.id;
        document.querySelector("p").innerHTML = advice;
        document.querySelector("span").innerHTML ="#" + id;
    })
});