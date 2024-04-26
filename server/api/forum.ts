import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const [rows, fields] = await db.execute("SELECT Titre,ID FROM Forum")
    let status;
    if(rows<1){
        status=false;
    }else{
        status=true;
    }
    return {
        status:status,
        forum: rows
    }
});