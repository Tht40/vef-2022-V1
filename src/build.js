import { readFile, readdir, stat, writeFile } from "fs/promises";
import { mkdirSync } from "fs";
import { join } from "path";

import { calculator } from "./Datacalc.js";
import { makeHTML, blogTemplate, makeIndex } from "./make-html.js";
import { parse } from "./parser.js";

const BLOG_DIR = "./data";
const OUTPUT_DIR = "./dist";

async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}
async function main() {
  const files = await readdir(BLOG_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdirSync(OUTPUT_DIR);
  }

  const group = [""];

  for (const file of files) {
    const path = join(BLOG_DIR, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      continue;
    }





    const data = await readFile(path);
    const str = data.toString("utf-8");

    const parsed = parse(str);
    const calculated = calculator(parsed);
    const html = makeHTML(parsed, file, calculated);
    const blog = blogTemplate("nafn síðu", html);
    const filename = join(OUTPUT_DIR, `${file}.html`);

    await writeFile(filename, blog, { flag: "w+" });

    group.push(JSON.stringify(file));
  }

  const index = blogTemplate("Tolu Tofrar", makeIndex(group));
  await writeFile(join(OUTPUT_DIR, "index.html"), index, { flag: "w+" });
}

main().catch((err) => console.error(err));
