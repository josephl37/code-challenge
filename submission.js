const findSum = array => array.reduce((acc, cv) => {
    return acc + cv;
})

const findFrequency = array => {

    const result = {};
    let maxCount = null;
    let minCount = Number.POSITIVE_INFINITY;
    
for (let i = 0; i < array.length; i++) {
    
    let count = 0;

    for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;
        }
    }

    if (count > maxCount) {
        maxCount = count;
        result.most = array[i];
    }

    if (count < minCount) {
        minCount = count;
        result.least = array[i];
    }
 }
 return result;
};

const isPalindrome = str => {
    
    const intialString = str.toLowerCase();
    
    let arrString = intialString.split('');
    let revString = arrString.reverse();
    const backToString = revString.join('');

    if (intialString === backToString) {
        return true;
    } else {
        return false;
    }
};

const largestPair = array => {

    let maxProduct = 0;

for (let i = 0; i < array.length - 1; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1]

    product = currentNum * nextNum;

    if (product > maxProduct) {
        maxProduct = product;
    }
}
return maxProduct;
};

const removeParenth = str => {
    const firstSearch = '(';
    const secondSearch = ')';

    let s1 = str.indexOf(firstSearch);
    let s2 = str.indexOf(secondSearch) + 1;

    let word = str.substring(s1, s2);

    return str.replace(word, '');
};

const scoreScrabble = str => {
    let points = 0;

for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (/[aeioulnrst]/.test(letter)) {
        points ++;
    } else if (/[dg]/.test(letter)) {
        points += 2;
    } else if (/[bcmp]/.test(letter)) {
        points += 3;
    } else if (/[fhvwy]/.test(letter)) {
        points += 4;
    } else if (/[k]/.test(letter)) {
        points += 5;
    } else if (/[jx]/.test(letter)) {
        points += 8;
    } else if (/[qz]/.test(letter)) {
        points += 10;
    } else {
        points += 0;
    }
}
return points;
};
