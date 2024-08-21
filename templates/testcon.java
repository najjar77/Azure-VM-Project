package measurement;

public class Measurement {

    public static void main(String[] args) {
        try {
            // Delay execution for 3 seconds
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            // Handle interruption gracefully
            e.printStackTrace();
        }

        String[] ingredients = {
            "Tomatoes", "Cheese", "Basil", "Olive Oil", "Garlic", "Onion", 
            "Salt", "Pepper", "Mushrooms", "Spinach", "Bell Peppers", "Chicken", 
            "Beef", "Pork", "Bacon", "Sausage", "Shrimp", "Lobster", "Crab", 
            "Oregano", "Parsley", "Cilantro", "Thyme", "Rosemary", "Paprika", 
            "Cumin", "Chili Powder", "Red Pepper Flakes", "Balsamic Vinegar", 
            "Worcestershire Sauce", "Soy Sauce", "Mustard", "Mayonnaise", 
            "Ketchup", "Hot Sauce", "Lettuce", "Cucumber", "Carrot", "Zucchini",
            "Squash", "Potato", "Sweet Potato", "Leek", "Scallion", "Ginger",
            "Turmeric", "Saffron", "Cardamom", "Nutmeg", "Cinnamon", "Vanilla"
        };

        for (int i = 0; i < 500000; i++) {
            // Bad usage of .... CONTINUE
            String result = "";  // Initialize result for each iteration

            for (String ingredient : ingredients) {
                result += ingredient + " • ";
            }

            // Remove the extra bullet at the end
            if (result.length() > 0) {
                result = result.substring(0, result.length() - 3);
            }

            System.out.println(result);
        }
    }
}
