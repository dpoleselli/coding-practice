import java.util.Arrays;

public class AddToK {

	public static void main(String []args) {
		//convert a string input from the command line into an array of ints
		String[] input = args[0].replaceAll("[\\[\\]]", "").split(",");
		int[] numbers = new int[input.length];
		for(int i = 0; i < input.length; i++) {
			numbers[i] = Integer.parseInt(input[i]);
		}

		int k = Integer.parseInt(args[1]);

		System.out.println(addToK(numbers, k));
   	}

   	static boolean addToK(int[] numbers, int k) {
   		Arrays.sort(numbers); 

		for(int i = 0; i < numbers.length - 1; i++) {
			int z = i + 1;
			int x = numbers[i] + numbers[z];
			if(x > k) {
				return false;
			}
			while(x < k && z < numbers.length) {
				x = numbers[i] + numbers[z];
				z++;
			}
			if(x == k) {
				return true;
			}
		}
		return false;
   	}
}
