package measurement;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;

public class Measurement {

    public static void main(String[] args) {
        try {
            // Delay execution for 3 seconds
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Map<String, String> linkedHashMap = new LinkedHashMap<>();
        int numElements = 1000000;

        // Insert elements 
        for (int i = 0; i < numElements; i++) {
            linkedHashMap.put(UUID.randomUUID().toString(), "Value " + i);
        }

        // Access elements
        for (String key : linkedHashMap.keySet()) {
            String value = linkedHashMap.get(key);
        }

        // Remove elements 
        for (String key : linkedHashMap.keySet()) {
            linkedHashMap.remove(key);
        }
    }
}
