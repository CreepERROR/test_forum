import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    const user=body.user;
    const forum=body.forums;
    const title=body.title;
    const desc=body.desc;
    const date =Date.now();
    await db.execute("INSERT INTO Discuission (User, Forum, Titre, Description, Date) VALUES (?, ?, ?, ?, ?)", [user, forum, title, desc, date]);
    return {
        status:true
    }
});