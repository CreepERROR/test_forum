import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    const user=body.user;
    const discussion=body.discussion;
    const contenu=body.contenu;
    const date =new Date();
    await db.execute("INSERT INTO Reponse (User, Discussion, Contenu, Date) VALUES (?, ?, ?, ?)", [user, discussion, contenu, date]);
    await db.execute("UPDATE Discussion SET Date = (?) WHERE ID=(?)", [date,discussion]);
    return {
        status:true
    }
});