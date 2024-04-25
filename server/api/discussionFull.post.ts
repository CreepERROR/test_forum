import { defineWrappedResponseHandler } from "../utils/mysql";
import {readBody} from "h3";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const body = await readBody(event);
    let page=body.page;
    const id=body.id;
    const [rows, fields] = await db.execute("SELECT * FROM Discussion WHERE Forum=(?)",[id])
    let status;
    let pageMax=Math.ceil(rows.length/20);
    if(page>pageMax){
        page=pageMax;
    }
    let min=(page-1)*20;
    let max=page*20;
    if(max>rows.length){
        max=rows.length;
    }
    let nouvelle=rows.splice(min,max);
    if(rows>0){
        status=true;
    }else{
        status=false;
    }
    return {
        status: status,
        pageMax:pageMax,
        discussion: nouvelle
    }
});