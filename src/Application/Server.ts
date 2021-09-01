import express from 'express';
import '../Infrastructure/tracer';
import { Express } from "express-serve-static-core";
import ServerInterface from "./ServerInterface";

export default class Server implements ServerInterface{
     public async create(): Promise<Express> {
        const server = express();
        server.get('/', (req, res) => {
            res.send('Server running')
        });

        return server;
    }
}

