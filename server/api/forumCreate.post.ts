import { readBody } from "h3";
import { defineWrappedResponseHandler } from "../utils/mysql";

export default defineWrappedResponseHandler(async (event) => {
    const body = await readBody(event);
    const titre=body.title;
    const desc=body.description;
    const db = event.context.mysql
    await db.execute("INSERT INTO Forum (Titre, Description) VALUES (?, ?)", [titre, desc]);
    const [rows, fields] = await db.execute("SELECT ID FROM Forum WHERE Titre = (?)",[titre])
    return {
        status: true,
        forum:rows[0],
    }
});