// const {winston, format} = require('winston');
// const { combine, timestamp, label, prettyPrint } = format;

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
require('winston-mongodb').MongoDB;


const logger = createLogger({
    level: "info",
    format: combine(
        label({ label: "Loglama" }),
        timestamp(),
        prettyPrint(),
    ),
    transports: [
        
        new transports.Console({ level: "error" }),
        new transports.MongoDB({
            db: 'mongodb+srv://alperen:135790@social-media.kttxyjd.mongodb.net/Social-Media?retryWrites=true&w=majority',
            level : "error",
            options: {
                useUnifiedTopology: true,
            },
            collection: 'log',
            handleRejections : true,

        })
    ]
})

module.exports = logger