const request = new XMLHttpRequest();
request.onreadystatechange = function (){
    if (this.readyState === 4 && this.status === 200){
        console.log(this);
    }
}



request.open('GET', './simple.txt');
request.send();

fetch('./simple.txt').then(function(response) {
    return response.text();
}).then(function(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    document.body.appendChild(title);
}) 