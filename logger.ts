import * as log from "https://deno.land/std/log/mod.ts";

export async function getLogger(minLevelForConsole = 'DEBUG', minLevelForFile = 'WARNING', fileName = "./log.txt"): Promise<any> {
    await log.setup({
        handlers: {
            console: new log.handlers.ConsoleHandler(minLevelForConsole as any, {
                formatter: "{levelName} {datetime} {msg}"
            }),

            file: new log.handlers.FileHandler(minLevelForFile as any, {
                filename: fileName,
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
