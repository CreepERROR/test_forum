import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    const user=body.user;
    const forum=body.forum;
    const title=body.title;
    const desc=body.desc;
    const date =new Date();
    await db.execute("INSERT INTO Discussion (User, Forum, Titre, Description, Date) VALUES (?, ?, ?, ?, ?)", [user, forum, title, desc, date]);
    return {
        status:true
    }
});