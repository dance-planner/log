import * as log from "https://deno.land/std/log/mod.ts";
import { green } from "https://deno.land/std@0.67.0/fmt/colors.ts"

export async function getLogger(minLevelForConsole = 'DEBUG', minLevelForFile = 'WARNING', fileName = "./log.txt"): Promise<any> {
    await log.setup({
        handlers: {
            console: new log.handlers.ConsoleHandler(minLevelForConsole as any, {
                formatter: logRecord => {
                    let msg = `${logRecord.level} ${logRecord.msg}`;

                    logRecord.args.forEach((arg, index) => {
                        msg += `, arg${index}: ${arg}`;
                    });

                    if (logRecord.level === 20) {
                        return green(msg)
                    }
                    return msg;
                }
            }),

            file: new log.handlers.FileHandler(minLevelForFile as any, {
                filename: `${Deno.cwd()}/${fileName}`,
                formatter: "{levelName} {datetime} {msg}",
            }),
        },

        loggers: {
            default: {
                level: "DEBUG",
                handlers: ["console", "file"],
            },
        },
    });

    return log.getLogger();
}
