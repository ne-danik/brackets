module.exports = function check(str, bracketsConfig) {
    
    let confArr = bracketsConfig.map(item => item.join(''));

    const strLength = str.length / 2;
    
    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < confArr.length; j++) {
            str = str.replace(confArr[j], '');
        }
    } 
    
    return str.length === 0;
}
