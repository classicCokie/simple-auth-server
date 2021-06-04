import Router from "koa-router";
import { User } from "../database/entities/user";
import { DefaultContext } from "koa";

export const getUsers = async (ctx: DefaultContext): Promise<void> => {

    const users = await User.find();

    if (!users) {
        ctx.throw(404, "No Users found");
        return;
    }
    
    ctx.body = users
};





