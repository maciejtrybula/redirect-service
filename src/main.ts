import Server from './Application/server';

const server = new Server();

server
    .create()
    .then(server => {
        server.listen(3000, () => {
            console.info('Server listening')
        });
    })
    .catch(err => {
        console.error(`Error: ${err}`)
    });