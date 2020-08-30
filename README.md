# Logger
Frequently used configuration:  
Writing warnings + errors into file. Adding date and time. Info Messages are green.

## Usage Example

```ts


import { Logger } from 'https://deno.land/x/log/mod.ts'
export const logger = await Logger.getInstance() // import this one in your sub modules

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')


// warnings + errors are additionally written to ./warnings-errors.txt file 

```

## Trigger Usage Example

```sh

deno run --allow-read --allow-write https://deno.land/x/log/usage-example.ts

```

## Advanced Usage

```ts

import { Logger } from 'https://deno.land/x/log/mod.ts'

const minLevelForConsole = 'DEBUG' // config.minLevelForConsole
const minLevelForFile = 'WARNING' // config.minLevelForFile
// const minLevelForConsole = 'INFO' 
// const minLevelForFile = 'ERROR'
// const minLevelForFile = 'CRITICAL'

const fileName = "./warnings-errors.txt"

// import this logger in your sub modules so that you have one logger for your whole process
export const logger = 
    await Logger.getInstance(minLevelForConsole, minLevelForFile, fileName)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')

```

## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my
promotion link: [https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
