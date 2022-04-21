import * as loggerModule from './logger.js'

console.log(loggerModule);

const logger = new loggerModule.Logger('Custom');

logger.log('soy un mensaje');