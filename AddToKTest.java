public class AddToKTest {

   public static void main(String []args) {
		System.out.println(true == AddToK.addToK(new int[]{10,15,3,7}, 17) ? "Passed" : "Failed");   	
		System.out.println(true == AddToK.addToK(new int[]{5,2,1,7,22}, 12) ? "Passed" : "Failed");
		System.out.println(false == AddToK.addToK(new int[]{5,2,1,7,22}, 11) ? "Passed" : "Failed");
		System.out.println(false == AddToK.addToK(new int[]{}, 12) ? "Passed" : "Failed");
		System.out.println(true == AddToK.addToK(new int[]{2125,2,131,72,2122}, 2127) ? "Passed" : "Failed");
		System.out.println(false == AddToK.addToK(new int[]{212,5,2,131,72,21,22,6431,12,23,56,345,34,32,124,197}, 100000) ? "Passed" : "Failed");
   	}
}