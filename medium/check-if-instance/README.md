Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

 

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()".


----------
Solution

Intuition
In Javascript, inheritance is achieved with the prototype chain.We can get the prototype of an object with the
Object.getPrototypeOf(obj)
using this compare class prototype with objects prortotype.

Approach
We will Traverse the entire prototype chain until we find a match or else return False.

Complexity
Time complexity: O(n)
The time complexity of the function depends on the depth of the prototype chain of the object being checked.
In the worst case, when the prototype chain is very deep, the function may take O(n) time, where n is the depth of the prototype chain.
Space complexity:O(1)
The space complexity of the function is constant, as it does not use any additional data structures that grow with the size of the input.