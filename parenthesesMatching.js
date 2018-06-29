function findMatchingClosingParentheses(sentence, openingParenthesesPos){

    let numExtraOpening = 0;
    for(let pos = openingParenthesesPos + 1; pos < sentence.length; pos++){

        if(numExtraOpening === 0 && sentence.charAt(pos) === `)`){
            return pos;
        } else if (sentence.charAt(pos) === `)`){
            numExtraOpening--;
        } else if (sentence.charAt(pos) === `(`){
            numExtraOpening++;
        }
    }

    return -1;
}