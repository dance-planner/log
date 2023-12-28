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

const pureInfo = true // leaving out e.g. the time info

export const logger = await Logger.getInstance('DEBUG', 'WARNING', "./warnings-errors.txt", pureInfo)

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message') 
```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)