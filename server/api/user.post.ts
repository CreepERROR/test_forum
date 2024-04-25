import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    const id=body.id;
    const [rows, fields] = await db.execute("SELECT * FROM User WHERE ID = (?)",[id])
    let status;
    if(rows<1){
        status=false;
    }else{
        status=true;
    }
    return {
        status:status,
        discussion: rows[0].Name
    }
});