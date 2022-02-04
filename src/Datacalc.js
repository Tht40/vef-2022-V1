import {variance , stdev} from 'stats-lite' //calculator

/**
 * 
 * @param {string} numbs takes in strings to put through maths
 * @returns alot of fun calculations
 */
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
    <div class="maths">
        <p> Variance = ${varians}</p>
        <p> Max = ${max}</p>
        <p> Mean = ${mean}</p>
        <p> Meadian = ${median}</p>
        <p> Min = ${min}</p>
        <p> Stdev = ${dev}</p>
        <p> Sum = ${sum}</p>
        <p> Range = ${range}</p>
    </div>
    `
}