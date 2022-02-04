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
    let cnt = 0;
    for( const i in array){
        var numb = array[i][0];
        numb = isnum(numb);
        if(numb !== null){
            if(cnt === 5){
                numb +="<br>";
                cnt = 0;
                numbs.push(numb);
            }
            
            else{
            numb += " \xa0\xa0 ";
            numbs.push(numb);
            cnt++;
            }
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