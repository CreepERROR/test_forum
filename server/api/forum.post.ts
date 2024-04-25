import { readBody } from "h3";
import { defineWrappedResponseHandler } from "../utils/mysql";

export default defineWrappedResponseHandler(async (event) => {
    const body = await readBody(event);
    const titre=body.title;
    const desc=body.description;
    const db = event.context.mysql
    await db.execute("INSERT INTO Forum (Titre, Description) VALUES (?, ?)", [titre, desc]);
    return {
        forums: true
    }
});