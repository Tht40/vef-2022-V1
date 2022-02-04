export function makeHTML(entry, filename){
    const name = filename;
    const html = entry;
    const template = `
    <section>
    ${name}
    <br>
    ${html}
    <section>
    `
    
    return template;
}

export function makeIndex(entries){
    let list = '';
    for (const entry of entries){
        const {file, title } = entry;
        const link = `<li><a href="${`${file}.html`}">${title}</a></li>`;
        list += link;
    }

    return `<ul>${list}</ul>`;
}


export function blogTemplate(title, blog){
    return`
    <doctype html>
    <html>
        <head>
            <title>${title}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${blog}
        </body>
    </html>`
    
;
}