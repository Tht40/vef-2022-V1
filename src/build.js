import {readFile, readdir, stat, writeFile} from 'fs/promises';
import { mkdir } from 'fs';
import {join} from 'path';
import graymatter from 'gray-matter';
import {marked} from 'marked';

import {makeHTML} from './make-html.js';
import {parse} from './parser.js';

const BLOG_DIR = './data';
const OUTPUT_DIR = './dist';

async function direxists(dir){
    try{
        const info = await stat(dir);
        return info.isDirectory();
    }   catch (e) {
        return false;
    }
}
async function main(){
    const files = await readdir(BLOG_DIR);

    const group = [];

    for (const file of files) {
        const path =  join(BLOG_DIR, file);
        const info = await stat(path);

        if(info.isDirectory()){
            continue;
        }

        const data = await readFile(path);
        const str = data.toString('utf-8');
        //console.log('str :>> ', str);
        const parsed = parse(str);
        if(parsed.length !== 0){
            group.push(parsed);
        }
        
        
    }
    console.log(group);
   
}

main().catch((err) => console.error(err));