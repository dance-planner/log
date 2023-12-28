
import { Logger } from 'https://deno.land/x/log/mod.ts'

const minLevelForConsole = 'DEBUG' 
const minLevelForFile = 'WARNING' 
const fileName = "./warnings-errors.txt"

const pureInfo = true // leaving out e.g. the time info

export const logger = await Logger.getInstance(minLevelForConsole, minLevelForFile, fileName, pureInfo)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')



// other possible parameterizations might be
// const minLevelForConsole = 'INFO' 
// const minLevelForFile = 'ERROR'
// const minLevelForFile = 'CRITICAL'
