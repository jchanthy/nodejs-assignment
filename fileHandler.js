import fs from 'fs';

export const readFilePromise = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            err ? reject(err) : resolve(data.toString())
        })
    });
}

export async function readFileAwait (fileName){
    try{
        const data = await readFilePromise(fileName);
        return (await data).toString();
    }catch (error){
     console.log('Error while read file.');
    }
}

export function writeFile(fileName, line){
    fs.writeFile(fileName, line, err =>{
        if(err){throw err}
    })
}