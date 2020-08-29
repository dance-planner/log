import { getLogger } from 'https://deno.land/x/log/mod.ts'

const logger = await getLogger()

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')
