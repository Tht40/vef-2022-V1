import {variance , stdev} from 'stats-lite'

export function calculator(numbs) {
    const varians = variance(numbs);
    const max = Math.max(...numbs);
    const mean = numbs[Math.floor(numbs.length/2)];
    const min = Math.min(...numbs);
    const dev = stdev(numbs);
    const sum = numbs.reduce((partialSum, a) => partialSum + a, 0);
    const median = sum/numbs.length;
    const range = min.toString() + ' to ' + max.toString();

    return `
    <a href="index.html">Forsíða</a>
    <div class="maths">
        <p> Variance = ${varians}</p>
        <p> Max = ${max}</p>
        <p> Mean = ${mean}</p>
        <p> Meadian =${median}</p>
        <p> Min =${min}</p>
        <p> Stdev = ${dev}</p>
        <p> Sum = ${sum}</p>
        <p> Range = ${range}</p>
    </div>
    `
}