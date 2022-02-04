export function makeHTML(entry, filename, calcs){
    const name = filename;
    const html = entry;
    const maths = calcs;
    const template = `
    <section>
    ${name}
    <br>
    <br>
    ${maths}
    <br>
    <p id="data">Data:<p>
     ${html}
    <section>
    `
    
    return template;
}

export function makeIndex(entries){
    let list = '';
    
    for (const entry in entries){
        if(entry>0){
        const name = entry;
        const link = `<li class="flex-item"><a href="${`${name}.txt.html`}">${name}</a></li>`;
        list += link;
        }
    }

    return `<ul class="flex-container center">${list}</ul>`;
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