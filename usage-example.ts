import { getLogger } from './logger.ts'

const logger = await getLogger()

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
