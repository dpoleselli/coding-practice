import sys

def product_array(start):
	total = 1
	final = []
	for value in start:
		total = total * value

	for value in start:
		new_value = total/value if len(start) != 1 else value
		final.append(new_value)

	return final