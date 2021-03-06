const tag = "[controllers/AdminController.js_v0.12]";
const Controller = require('./Controller');
const l = require('../logger');
l.tag(tag); 

class AdminsController {
  constructor(Service) {
    this.service = Service;
  }

  async adminSignIn(request, response) {
    await Controller.handleRequest(request, response, this.service.adminSignIn);
  }
  async reset(request, response) {
    await Controller.handleRequest(request, response, this.service.reset);
  }
  async innerCheck(request, response) {
    await Controller.handleRequest(request, response, this.service.innerCheck);
  }
  async endGame(request, response) {
    await Controller.handleRequest(request, response, this.service.endGame);
  }

  async newGame(request, response) {
    await Controller.handleRequest(request, response, this.service.newGame);
  }

}

module.exports = AdminsController;
