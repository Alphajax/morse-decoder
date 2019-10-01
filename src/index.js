const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let substr;
    while (expr.length>0){
        substr = expr.substring(0,10);
        expr = expr.replace(substr, '');
        if(substr==='**********'){
            result+=' ';
            continue;
        }
       while(substr.includes('1') || substr.includes('0')){
            substr = substr.replace('00','');
            substr = substr.replace('10','.');
            substr = substr.replace('11','-');
       }
        result+=MORSE_TABLE[substr];
    }
    return result;
}

module.exports = {
    decode
}
