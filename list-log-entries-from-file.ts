
async function list(level?: string) {

    const decoder = new TextDecoder('utf-8');

    let lines = (decoder.decode(await Deno.readFile('log.txt'))).split("\n");

    if (level !== undefined){
        lines = lines.filter((l: any) => l.split(' ')[0] === level)
    }

    for (const line of lines){
        console.log(line)
    }

}

list(Deno.args[0])