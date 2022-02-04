export function makeHTML(entry, filename){
    const name = filename;
    const html = entry;
    const template = `
    <section>
    ${name}
    <br>
    <p>${html}<p>
    <section>
    `
    
    return template;
}

export function makeIndex(entries){
    let list = '';
    
    for (const entry in entries){
        if(entry>0){
        const name = entry;
        console.log(name);
        const link = `<li><a href="${`${name}.txt.html`}">${name}</a></li>`;
        list += link;
        }
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