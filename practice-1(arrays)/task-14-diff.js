//Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.

function sortByLength(arr) {
    arr.sort();
    return arr;
}

console.log(sortByLength(["яблуко", "груша", "банан", "ківі", "апельсин", "ананас"])); 
// Відповідь: ["ківі", "груша", "яблуко", "банан", "ананас", "апельсин"]

console.log(sortByLength(["a", "bbb", "cc", "dddd", "ee"])); 
// Відповідь: ["a", "cc", "ee", "bbb", "dddd"]

console.log(sortByLength(["hello", "world", "hi", "JavaScript", "code"]));
// Відповідь: ["hi", "code", "hello", "world", "JavaScript"]

console.log(sortByLength(["one", "three", "two", "fourteen", "twelve"]));
// Відповідь: ["one", "two", "three", "twelve", "fourteen"]

console.log(sortByLength(["", "a", "ab", "abc", "abcd", "abcde"]));
// Відповідь: ["", "a", "ab", "abc", "abcd", "abcde"]