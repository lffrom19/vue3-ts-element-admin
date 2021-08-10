'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const { ctx } = this;
        let {account,password} = ctx.request.body;
        console.log(account,password)
        ctx.body = 'hi, egg';
    }
}

module.exports = LoginController;
