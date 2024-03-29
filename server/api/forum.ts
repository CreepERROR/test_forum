import { defineWrappedResponseHandler } from "../utils/mysql";

export default defineWrappedResponseHandler(async (event) => {
    const db = event.context.mysql
    const [rows, fields] = await db.execute("SELECT * FROM Forum")
    return {
        forums: rows
    }
});