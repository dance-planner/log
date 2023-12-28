import { Logger } from 'https://deno.land/x/log/mod.ts'

const minLevelConsole = 'DEBUG' 
const minLevelFile = 'WARNING' 

const fileName = "./warnings-errors.txt"

const pure = true // leaving out e.g. the time info

export const logger = await Logger.getInstance(minLevelConsole, minLevelFile, fileName, pure)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')