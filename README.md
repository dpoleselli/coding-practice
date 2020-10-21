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

