const capitalizeWord = (word) => {
    const firstChar = word.toUpperCase().charAt(0);
    const newWord = firstChar + word.toLowerCase().slice(1);
    return newWord;
}

export default capitalizeWord;