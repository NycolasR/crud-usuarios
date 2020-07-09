import ControllerUsuario from './controllerUsuario'

const controller = new ControllerUsuario();

const formCreateEl = document.querySelector('#formCreate');
const formUpdateEl = document.querySelector('#formUpdate');

const inputNameCreateEl = document.querySelector('#nameCreate');
const inputEmailCreateEl = document.querySelector('#emailCreate');
const inputAgeCreateEl = document.querySelector('#ageCreate');

const inputIdUpdateEl = document.querySelector('#idUpdate');
const inputNameUpdateEl = document.querySelector('#nameUpdate');
const inputEmailUpdateEl = document.querySelector('#emailUpdate');
const inputAgeUpdateEl = document.querySelector('#ageUpdate');

const listEl = document.querySelector('#usersList');

formCreateEl.onsubmit = event => addUser(event);

function addUser(event) {
    event.preventDefault();
    
    const name = inputNameCreateEl.value;
    const email = inputEmailCreateEl.value;
    const age = inputAgeCreateEl.value;

    if(name.length === 0 || email.length === 0 || age.length === 0) {
        alert('Preencha todos os campos!');
        return;
    }
    
    formCreateEl.reset();

    controller.addUser(name, email, age),
    render();
}

formUpdateEl.onsubmit = event => updateUser(event);

function updateUser(event) {
    event.preventDefault();

    const id = inputIdUpdateEl.value;
    const name = inputNameUpdateEl.value;
    const email = inputEmailUpdateEl.value;
    const age = inputAgeUpdateEl.value;

    if(name.length === 0 && email.length === 0 && age.length === 0) {
        alert('Preencha os campos para atualizar os dados!');
        return;
    }
    
    if(id.length === 0) {
        alert('É necessário que seja informado um ID válido!');
        return;
    }
    
    const user = controller.findUser(id);
    if(user === false) {
        alert('Não há um usuário com este ID.')
        return;
    }

    formUpdateEl.reset();
    
    controller.updateUserData(user, name, email, age);
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


