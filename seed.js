const db = require('./model')

db.sync({force: true}).then(() => {
    console.log('Database synced up')
})
.catch(err => {
    console.log('Error!');
    console.log(err);
})
.finally(() => {
    db.close();
})