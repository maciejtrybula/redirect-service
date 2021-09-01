import {Express} from "express";

export default interface ServerInterface {
    create(): Promise<Express>;
}