function sentenceList(dictionary, sentence) {
	if(!sentence || !dictionary) { return null } 

	result = []
	word = ''

	for(let i = 0; i < sentence.length; i++) {
		word += sentence[i]
		if(dictionary.includes(word)) {
			result.push(word)
			word = ''
		}
	}

	return result.length && !word ? result : null
}

let result = null

result = sentenceList(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox')
answer = ['the', 'quick', 'brown', 'fox']
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['bed', 'bath', 'bedbath', 'and', 'beyond'], 'bedbathandbeyond')
answer = ['bed', 'bath', 'and', 'beyond']
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['no', 'are', 'talkers', 'doers', 'good'], 'talkersarenogooddoers')
answer = ['talkers', 'are', 'no', 'good', 'doers']
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['bath', 'bed', 'beyond', 'and'], 'thequickbrownfox')
answer = null
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['but', 'not', 'almost'], 'almostbutnotquite')
answer = null
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(null, 'nodictionary')
answer = null
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['no', 'sentence'], '')
answer = null
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['does', 'not', 'have', 'capitals'], 'doesNotHaveCapitals')
answer = null
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)

result = sentenceList(['Capital', 'With', 'works', 'Letters', 'Extra', 'with'], 'worksWithCapitalLetters')
answer = ['works', 'With', 'Capital', 'Letters']
console.log(equal(result, answer) ? 'Passed' 
	: `Failed: expected ${answer}, but got ${result}`)


//helper function to assert that the result and answer arrays are equal
function equal(array1, array2) {
	return !array1 || !array2 ? !array1 && !array2 
		: (array1.length === array2.length 
			&& array1.every((value, index) => value === array2[index]))
}
