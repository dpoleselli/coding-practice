
def product_array(start):
	total = 1
	final = []
	zeros = 0
	for value in start:
		if value != 0:
			total = total * value
		else:
			zeros += 1
			if zeros > 1:
				break

	for value in start:
		new_value = value
		if zeros > 1:
			new_value = 0
		elif value == 0:
			new_value = total
		elif zeros == 1:
			new_value = 0
		elif len(start) != 1:
			new_value = total/value
		final.append(new_value)

	return final