const app = require('./app');
const { connect } = require('./database')
async function main() {
    //Se conecta a la base de datos
    await connect();
    //Se inicia el servidor Express
    await app.listen(4000);
    console.log('Server on port 4000: connected')
}
main();