
import { Logger } from 'https://deno.land/x/log/mod.ts'
export const logger = await Logger.getInstance()

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')
