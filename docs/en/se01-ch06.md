# Functions

> A *function* is like a small program that has its own name, and can be executed (*invoked*) by calling that name from another function.

A function combines a group of activities, and is the most basic way to organize your programs and to re-use code.

You pass information into a function, and the function uses that information to calculate and produce a result. The basic form of a function is:

```
fun functionName(p1: Type1, p2: Type2, ...): ReturnType {
  lines of code
  return result
}
```

`p1` and `p2` are the *parameters*: the information you pass into the function. Each parameter has an identifier name (`p1`, `p2`) followed by a colon and the type of that parameter. The closing parenthesis of the parameter list is followed by a colon and the type of result produced by the function. The lines of code in the *function body* are enclosed in curly braces. The expression following the `return` keyword is the result the function produces when it’s finished.

A parameter is how you define what is passed into a function—it’s the placeholder. An argument is the actual value that you pass into the function.

The combination of name, parameters and return type is called the *function signature*.

Here’s a simple function called `multiplyByTwo()`:

```
// Functions/MultiplyByTwo.kt

fun multiplyByTwo(x: Int): Int {  // [1]
  println("Inside multiplyByTwo") // [2]
  return x * 2
}

fun main() {
  val r = multiplyByTwo(5)        // [3]
  println(r)
}
/* Output:
Inside multiplyByTwo
10
*/
```

- **[1]** Notice the `fun` keyword, the function name, and the parameter list consisting of a single parameter. This function takes an `Int` parameter and returns an `Int`.
- **[2]** These two lines are the body of the function. The final line returns the value of its calculation `x * 2`  as the result of the function.
- **[3]** This line *calls* the function with an appropriate argument, and captures the result into `val r`. A function call mimics the form of its declaration: the function name, followed by arguments inside parentheses.

The function code is executed by calling the function, using the function name `multiplyByTwo()` as an abbreviation for that code. This is why functions are the most basic form of simplification and code reuse in programming. You can also think of a function as an expression with substitutable values (the parameters).

`println()` is also a function call—it just happens to be provided by Kotlin. We refer to functions defined by Kotlin as *library functions*.

If the function doesn’t provide a meaningful result, its return type is `Unit`. You can specify `Unit` explicitly if you want, but Kotlin lets you omit it:

```
// Functions/SayHello.kt

fun sayHello() {
  println("Hallo!")
}

fun sayGoodbye(): Unit {
  println("Auf Wiedersehen!")
}

fun main() {
  sayHello()
  sayGoodbye()
}
/* Output:
Hallo!
Auf Wiedersehen!
*/
```

Both `sayHello()` and `sayGoodbye()` return `Unit`, but `sayHello()` leaves out the explicit declaration. The `main()` function also returns `Unit`.

If a function is only a single expression, you can use the abbreviated syntax of an equals sign followed by the expression:

```
fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType = expression
```

A function body surrounded by curly braces is called a *block body*. A function body using the equals syntax is called an *expression body*.

Here, `multiplyByThree()` uses an expression body:

```
// Functions/MultiplyByThree.kt

fun multiplyByThree(x: Int): Int = x * 3

fun main() {
  println(multiplyByThree(5))
}
/* Output:
15
*/
```

This is a short version of saying `return x * 3` inside a block body.

Kotlin infers the return type of a function that has an expression body:

```
// Functions/MultiplyByFour.kt

fun multiplyByFour(x: Int) = x * 4

fun main() {
  val result: Int = multiplyByFour(5)
  println(result)
}
/* Output:
20
*/
```

Kotlin infers that `multiplyByFour()` returns an `Int`.

Kotlin can *only* infer return types for expression bodies. If a function has a block body and you omit its type, that function returns `Unit`.

- \-

When writing functions, choose descriptive names. This makes the code easier to read, and can often reduce the need for code comments. We can’t always be as descriptive as we would prefer with the function names in this book because we’re constrained by line widths.

***Exercises and solutions can be found at www.AtomicKotlin.com.***