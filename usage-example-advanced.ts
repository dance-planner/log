import { Logger } from 'https://deno.land/x/log/mod.ts'

const mLevelConsole = 'DEBUG' 
const mLevelFile = 'WARNING' 
const fileName = "./warnings-errors.txt"

const pure = true // leaving out e.g. the time info

export const logger = await Logger.getInstance(mLevelConsole, mLevelFile, fileName, pure)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')

// other possible parameterizations might be
// const mLevelConsole = 'INFO' 
// const mLevelFile = 'ERROR'
// const mLevelFile = 'CRITICAL'
