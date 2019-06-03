import { Service } from 'egg';

interface IUserResult {
    id: number;
    username: string;
    nickname: string;
    email: string;
    phone: string;
    gender: number;
}
const UserResultAttributes = ['id', 'username', 'nickname', 'email', 'phone', 'gender']

interface IUserQuery {
    id?: number;
    username?: string;
}

export interface IUserCreate {
    username: string;
    password: string;
}

export default class UserService extends Service {

    public async createOne(option: IUserCreate): Promise<{}> {
        let res = await this.ctx.model.User.create({
            username: option.username,
            password: option.password,
        })
        return res;
    }

    public async getSome(format: IPageFormat): Promise<[]> {
        let res = await this.ctx.model.User.findAll({
            ...format,
            where: {
                available: 1,
            },
            attributes: UserResultAttributes,
        })
        return res;
    }

    public async getOne(option: IUserQuery): Promise<IUserResult> {
        let res: IUserResult = await this.ctx.model.User.findOne({
            where: {
                ...option,
                available: 1,
            },
            attributes: UserResultAttributes,
        })
        return res;
    }
}
