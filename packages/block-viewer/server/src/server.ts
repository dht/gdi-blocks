import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import jsonServer from 'json-server';

const app = express();
const router = jsonServer.router('src/data/db.json');
const middleware = jsonServer.defaults();

const start = async (port: number) => {
    app.use(cors());
    app.use(bodyParser.json());

    app.use('/api', router);
    app.use('/api', middleware);

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

start(5000);
