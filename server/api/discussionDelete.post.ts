import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    const id=body.id;
    await db.execute("DELETE FROM Reponse WHERE Discussion = (?)",[id])
    await db.execute("DELETE FROM Discussion WHERE ID = (?)",[id])
    return {
        status:true,
    }
});