import { readBody } from "h3";
import { defineWrappedResponseHandler } from "../utils/mysql";

export default defineWrappedResponseHandler(async (event) => {
    const body = await readBody(event);
    const name=body.name;
    const pass=body.password;
    const admin= 0;
    const db = event.context.mysql
    await db.execute("INSERT INTO User (Name, Password, Admin) VALUES (?, ?, ?)", [name, pass,admin]);
    const [rows, fields] = await db.execute("SELECT * FROM User WHERE Name=(?)", [name]);
    let status;
    if(rows>0){
        status=false;
    }else{
        status=true;
    }
    return {
        status: status,
        user: rows[0]
    }
});