# Logger
Frequently used configuration:  
Writing warnings + errors into file. Adding date and time.

## Usage Example

```ts

import { getLogger } from './logger.ts'

const logger = await getLogger()

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')

```

## Trigger Usage Example

```sh

deno run --allow-read --allow-write usage-example.ts

```

## Support my Open Source Contributions

If you like my work please consider downloading the brave browser via my
promotion link: [https://brave.com/fan464](https://brave.com/fan464).

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
