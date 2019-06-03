import { Controller } from 'egg';
import { IUserCreate } from '../service/user'
import { equal } from 'power-assert';
import { isNull } from 'util';


export default class UserController extends Controller {
  public async index() {
    const format: IPageFormat = {
      offset: parseInt(this.ctx.query.offset),
      limit: parseInt(this.ctx.query.limit),
    }
    let users = await this.service.user.getSome(format)
    if (users.length > 0) {
      this.ctx.status = STAT_CODE.OK;
      this.ctx.body = users;
    } else {
      this.ctx.status = STAT_CODE.NO_RESULT;
      this.ctx.body = genErrorBody('no results', {})
    }
  }

  public async show() {
    const option: IGetOneOption = {
      id: parseInt(this.ctx.params.id)
    }
    let user = await this.service.user.getOne(option)
    if (user) {
      this.ctx.status = STAT_CODE.OK;
      this.ctx.body = user;
    } else {
      this.ctx.status = STAT_CODE.NO_RESULT;
      this.ctx.body = genErrorBody('id not exist', {});
    }
  }

  public async create() {
    const validateUsername = (username: string): boolean => {
      if (username.length > 5) {
        return true;
      } else {
        return false;
      }
    }

    const validatePassword = (password: string): boolean => {
      if (password.length > 6) {
        return true;
      } else {
        return false;
      }
    }

    const genUserCreate = (originQuery: any): IUserCreate | null => {
      let username = originQuery.username;
      let password = originQuery.password;

      try {
        equal(validateUsername(username), true);
        equal(validatePassword(password), true);
      } catch (e) {
        return null
      }

      return {
        username: username,
        password: password,
      }
    }

    const tempOption = genUserCreate(this.ctx.body.query)
    if (isNull(tempOption)) {
      this.ctx.status = STAT_CODE.INVALID_FORM;
      this.ctx.body = genErrorBody('form fields invalid', {});
      return;
    }
    const option: IUserCreate = tempOption;
    let user = await this.service.user.createOne(option);
    if (user) {
      this.ctx.status = STAT_CODE.OK;
      this.ctx.body = user;
    } else {
      this.ctx.status = STAT_CODE.CREATE_FAIL;
      this.ctx.body = genErrorBody('create user fail', {})
    }
  }
}
