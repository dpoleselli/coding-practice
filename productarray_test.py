import unittest
import productarray

class ProductArrayTest(unittest.TestCase):

    def test_example(self):
        self.assertEqual(productarray.product_array([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24])

    def test_second_example(self):
        self.assertEqual(productarray.product_array([3, 2, 1]), [2, 3, 6])

    def test_empty_array(self):
        self.assertEqual(productarray.product_array([]), [])

    def test_one_element(self):
        self.assertEqual(productarray.product_array([5]), [5])

    def test_with_one_zero(self):
        self.assertEqual(productarray.product_array([5, 4, 3, 2, 1, 0]), [0, 0, 0, 0, 0, 120])

    def test_with_multiple_zeros(self):
        self.assertEqual(productarray.product_array([5, 0, 3, 0, 1, 0]), [0, 0, 0, 0, 0, 0])

    def test_negative_values(self):
        self.assertEqual(productarray.product_array([-1, 2, 3, 4, -5]), [-120, 60, 40, 30, -24])

if __name__ == '__main__':
    unittest.main()