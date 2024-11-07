package measurement;

/** Add imports if needed here. Please don't change anything except that **/

public class Measurement {

    public static void main(String[] args) {

        long number = 5_000;
        System.out.println("Results with " + number + " is: " + factorial(number));
    }

    /** Here comes your code. Please do not modify the code above (except for needed imports) **/

    // Recursive factorial-like sum function
    public static long factorial(long n) {
        if (n <= 1) {
            return 1;
        }

        int myArray[] = new int[1_000_000]; /** Please use this CPU utilization part in your new code too (where applicable in a compareable loop **/

        return n + factorial(n - 1);  // Recursive call
    }

    /** End **/
}

