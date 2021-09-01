import Server from  "../../src/Application/server";
import  request from "supertest";
import {Express} from 'express-serve-static-core'

let server: Express;
// const request = supertest(createServer);

beforeAll(async () => {
    server = await new Server().create();
})

describe("check server functionalities", () => {
        it('server should run smoothly', async () => {
            const response = await request(server).get("/");
            expect(response.statusCode).toBe(200);
        });
});