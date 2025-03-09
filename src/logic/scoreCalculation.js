export const calculateScore = (word, tileValues, multipliers) => {
    return word.split('').reduce((score, letter, index) => {
        const letterValue = tileValues[letter.toUpperCase()] || 0;
        return score + letterValue * (multipliers[index] || 1);
    }, 0);
};
