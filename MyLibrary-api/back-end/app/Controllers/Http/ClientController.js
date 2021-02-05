'use strict'

const Client = use('App/Models/Client');

class ClientController {
  async store({ request }){
    const data = request.only(['username', 'email', 'password']);
    const client = await Client.create({
    'username': data.username,
    'email': data.email,
    'password': data.password,
    });
    return client;
  }
  
  async login({ request }){
    const data = request.only(['login', 'password']);
    const client = await Client.query()
    .where('email', '=', data.login)
    .orWhere('username', '=', data.login)
    .where('password', '=', data.password)
    .fetch();
    return client;
  }
}

module.exports = ClientController
