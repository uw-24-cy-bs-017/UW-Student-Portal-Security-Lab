const userInput = "2 + 2";

// BAD line
eval(userInput);

// SAFE line
JSON.parse('{"a": 1}');