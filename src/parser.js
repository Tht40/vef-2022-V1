import {marked} from 'marked';
import matter from 'gray-matter';
import isNumber from 'is-number';
/**
 * 
 * @param {string} input takes in a string
 * @returns only numbers as an array
 */
export function parse(input){
    var array = input.trim().split("\n").map(input => input.trim().split(" "));
    let numbs = [];
    for( const i in array){
        var numb = array[i][0];
        numb = isnum(numb);
        if(numb !== null){
            numbs.push(numb)
        }
    }
    return numbs;
    
    
}

function isnum(data){
    const numb = isNumber(data)
    if(!numb){
       return null;
     }
 
     return parseFloat(data);
}