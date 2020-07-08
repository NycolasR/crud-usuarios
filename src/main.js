import ControllerUsuario from './controllerUsuario'

const controller = new ControllerUsuario();
controller.addUser('Nycolas', 'nycolasramon3@gmail.com', 19);
controller.removeUser(0);
controller.render();