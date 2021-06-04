import { User } from "../../database/entities/user";
import { DefaultContext } from "koa";
import  jwt from 'jsonwebtoken';


export const getToken = async (ctx: DefaultContext): Promise<void> => {

    const userName = ctx.request.body.name;

    const password = ctx.request.body.password;

    const user = await User.findOne({ name: userName });

    if(!user) {
        ctx.throw(500, "Login Error");
        console.log(`No such user: ${user}`)
        return;
    }

    if(user?.password !== password) {
        ctx.throw(500, "Login Error");
        console.log("Wrong Password")
        return;
    }

    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    
    ctx.body = {token}
};