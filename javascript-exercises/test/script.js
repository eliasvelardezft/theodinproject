const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const redp = document.createElement('p');
redp.textContent = 'Hey I\'m red!';
redp.style.color = 'red';

const blueh3 = document.createElement('h3');
blueh3.style.color = 'blue';
blueh3.textContent = 'I\'m a blue h3!';

const div = document.createElement('div');
div.style.cssText = 'background-color: pink; border-color: black;';
div.addEventListener('click', () => {alert('pink');});

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'MEE TOO!';
div.appendChild(p);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {alert('holaa');});
});


container.appendChild(blueh3);
container.appendChild(redp);
container.appendChild(div);