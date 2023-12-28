# Logger

![Screenshot from 2023-12-28 16-43-21](https://github.com/dance-planner/log/assets/145258627/5a4784cc-7827-44e6-b0d8-41ad4c77edd5)

## Usage Example

```ts
import { Logger } from 'https://deno.land/x/log/mod.ts'
export const logger = await Logger.getInstance() // import this one in your sub modules

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')

// with this warnings + errors are written to console and to ./warnings-errors.txt file 
```

## Trigger Usage Example

```sh
deno run --allow-read --allow-write https://deno.land/x/log/usage-example.ts
```

## Advanced Usage

```ts
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
```
## Trigger Advanced Usage Example

```sh
deno run --allow-read --allow-write https://deno.land/x/log/usage-example-advanced.ts
```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
