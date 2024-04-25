import { readBody } from "h3";
import { defineWrappedResponseHandler } from "../utils/mysql";

export default defineWrappedResponseHandler(async (event) => {
    const body = await readBody(event);
    const name=body.name;
    const pass=body.password;
    const db = event.context.mysql
    const [rows, fields] = await db.execute("SELECT * FROM User WHERE Name=(?) AND Password=(?)", [name, pass]);
    let status;
    if(rows.length==1){
        status=true;
    }else{
        status=false;
    }
    return {
        status: status,
        user: rows[0]
    }
});