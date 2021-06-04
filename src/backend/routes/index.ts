import Router from "koa-router";
import { User } from "../database/entities/user";
import { DefaultContext } from "koa";
import { getUsers } from './user/getUsers'
import {getToken} from './token/getToken'

export const setupRoutes = (router: Router): void => {
    router.post("/getUsers", getUsers);
    router.post("/getToken", getToken);


};
