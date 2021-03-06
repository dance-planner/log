
async function list(level?: string, fileName = './warnings-errors.txt') {

    const decoder = new TextDecoder('utf-8');

    let lines = (decoder.decode(await Deno.readFile(fileName))).split("\n");

    if (level !== undefined){
        lines = lines.filter((l: any) => l.split(' ')[0] === level)
    }

    for (const line of lines){
        console.log(line)
    }
}

list(Deno.args[0], Deno.args[1])