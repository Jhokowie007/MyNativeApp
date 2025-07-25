import express, { request } from 'express';
// import cors from 'cors';

const app = express();
const port = 2625;

app.use(express.json());

app.post('/', (request, response) =>{
    
    let message = 'booting-up';

    response.send(message)
});

app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});