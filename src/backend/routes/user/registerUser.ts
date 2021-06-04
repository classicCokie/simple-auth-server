
import { User } from "../../database/entities/user";
import { validate } from "class-validator";
import { DefaultContext } from "koa";

export const registerUser = async (
    ctx: DefaultContext,
): Promise<void> => {
    const user = new User();

    user.name = ctx.request.body.name;
    user.name = ctx.request.body.password;
    user.email = ctx.request.body.email;

    const errors = await validate(user);

    if (errors.length > 0) {
        console.log(errors)
        ctx.throw(400, 'Invalid Registration');
        return;
    }

    const savedUser = await user.save();

    ctx.body = {savedUser}

};