import create from './create.js';
import read from './read.js';
import update from './update.js';
import remove from './remove.js';
import list from './list.js';

import express from 'express';

const handlers = [
    create,
    read,
    update,
    remove,
    list
]

export const register = app => {
    const router = express();

    handlers.forEach(handler => handler(router));

    app.use('/api/', router);
}