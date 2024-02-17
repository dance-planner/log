import { Logger } from './mod.ts'

const minLevelConsole = 'DEBUG' 
const minLevelFile = 'WARNING' 

const fileName = "./warnings-errors.txt"

const pure = true // leaving out e.g. the time info

const disableInternalInfo = true // no internal info

export const logger = await Logger.getInstance(minLevelConsole, minLevelFile, fileName, pure)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')

export const loggerWithoutInternalInfos = await Logger.getInstance(minLevelConsole, minLevelFile, fileName, pure, disableInternalInfo)

loggerWithoutInternalInfos.debug('example debug message')
loggerWithoutInternalInfos.info('example info')
loggerWithoutInternalInfos.warning('example warning')
loggerWithoutInternalInfos.error('example error message')
loggerWithoutInternalInfos.critical('example critical message')