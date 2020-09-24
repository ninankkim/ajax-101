const btn = document.querySelector('button');
const dogList = document.querySelector('#breed')

btn.addEventListener('click', function(){
    btn.textContent = 'Generating Doggo...';
    const url = `https://dog.ceo/api/breed/${dogList.value}/images/random`
    fetch(url)
.then(function(response) { return response.json(); })
.then(function(data) {
    const pic = document.getElementById('img');
    pic.setAttribute('src',data.message)
}).then(function (){
    btn.textContent = 'Generate Doggo';
})
})


fetch('https://dog.ceo/api/breeds/list')
    .then(function(response) { return response.json(); })
    .then(function(data) {
    for(let i = 0;i < data.message.length;i++){
        const select = document.querySelector('#breed')
        const item = document.createElement('option')
        item.setAttribute('value',data.message[i])
        item.textContent = data.message[i]
        select.appendChild(item)
    }
})