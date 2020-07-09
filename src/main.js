import ControllerUsuario from './controllerUsuario'

const controller = new ControllerUsuario();
const formEl = document.querySelector('#form');
const inputNameEl = document.querySelector('#nameCreate');
const inputEmailEl = document.querySelector('#emailCreate');
const inputAgeEl = document.querySelector('#ageCreate');
const listEl = document.querySelector('#usersList');

formEl.onsubmit = event => addUser(event);

function addUser(event) {
    event.preventDefault();
    
    const name = inputNameEl.value;
    const email = inputEmailEl.value;
    const age = inputAgeEl.value;

    if(name.length === 0 || email.length === 0 || age.length === 0) {
        alert('Preencha todos os campos!');
        return;
    }

    controller.addUser(name, email, age),
    render();
}

function render() {
    listEl.innerHTML = ''

    controller.users.map(user => {
        let nameEl = document.createElement('h2')
        nameEl.appendChild(document.createTextNode(user.name + ':'));

        let emailEl = document.createElement('p');
        emailEl.appendChild(document.createTextNode(`E-mail: ${user.email}`));

        let ageEl = document.createElement('p');
        ageEl.appendChild(document.createTextNode(`Idade: ${user.age}`));

        let idEl = document.createElement('p');
        idEl.appendChild(document.createTextNode(`ID: ${user.id}`));

        let button = document.createElement('button');
        button.appendChild(document.createTextNode('Excluir'));

        let link =  document.createElement('a');
        let position = controller.users.indexOf(user);
        link.onclick = function() {
            controller.removeUser(position);
            render();
        };
        link.appendChild(button);
        
        let linkEl = document.createElement('p');
        linkEl.appendChild(link);
        
        let listItem = document.createElement('li');
        listItem.appendChild(nameEl);
        listItem.appendChild(emailEl);
        listItem.appendChild(ageEl);
        listItem.appendChild(idEl);
        listItem.appendChild(linkEl);
        
        listEl.appendChild(listItem);
    })
}