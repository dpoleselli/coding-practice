# coding-practice

This directory is for practicing a variety of different coding problems from [Daily Coding Problem](https://www.dailycodingproblem.com/). 

## Description

Each problem below from [Daily Coding Problem](https://www.dailycodingproblem.com/) was solved without help using a variety of different languages and in a reasonable time frame. Some of the problems may include multiple commits which indicate attempts to improve the space/time complexity from a previous attempt.

### Product Array

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

**Solution:**
```bash
python -c 'import productarray; print(productarray.product_array(<starting array>))'
```
or 
```bash
python productarray_test.py
```

### Add To k?

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

**Solution:**
```bash
javac AddToK.java && java AddToK <list or numbers> <k>
```
or 
```bash
javac AddToKTest.java && java AddToKTest
```


### Sentence Array

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

**Solution**
```bash
node sentenceList.js
```
