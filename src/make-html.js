/**
 *
 * @param {array} entry number array
 * @param {string} filename name of the file
 * @param {math program} calcs for the maths
 * @returns html for a txt file display
 */
export function makeHTML(entry, filename, calcs) {
  const name = filename;
  const html = entry;
  const maths = calcs;
  const template = `
    <section>
    <div class="headd">
    ${name}
    </div>
    <a href="index.html">Forsíða</a>
    <br>
    <br>
    ${maths}
    <br>
    <div class="data"><p>Data: </p><br>
    ${html}
    </div>
    
    <section>
    `;

  return template;
}
/**
 *
 * @param {string} entries input string
 * @returns index
 */
export function makeIndex(entries) {
  let list = "";

  for (const entry in entries) {
    if (entry > 0) {
      const name = entry;
      const link = `<li class="flex-item"><a href="${`${name}.txt.html`}">${name}</a></li>`;
      list += link;
    }
  }

  return `<ul class="flex-container center">${list}</ul>`;
}

/**
 *
 * @param {string} title website name
 * @param {html} blog text to put in the body
 * @returns a website whole
 */
export function blogTemplate(title, blog) {
  return `
    <doctype html>
    <html>
        <head>
            <title>${title}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${blog}
        </body>
    </html>`;
}
