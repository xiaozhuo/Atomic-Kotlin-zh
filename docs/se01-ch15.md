# Summary 1

> This atom summarizes and reviews the atoms in Section I, starting at [Hello, World!](javascript:void(0)) and ending with [Expressions & Statements](javascript:void(0)).

If you’re an experienced programmer, this should be your first atom. New programmers should read this atom and perform the exercises as a review of Section I.

If anything isn’t clear to you, study the associated atom for that topic (the sub-headings correspond to atom titles).

### Hello, World!

Kotlin supports both `//` single-line comments, and `/*`-to-`*/` multiline comments. A program’s entry point is the function `main()`:

```
// Summary1/Hello.kt

fun main() {
  println("Hello, world!")
}
/* Output:
Hello, world!
*/
```

The first line of each example in this book is a comment containing the name of the atom’s subdirectory, followed by a `/` and the name of the file. You can find all the extracted code examples via *AtomicKotlin.com*.

`println()` is a standard library function which takes a single `String` parameter (or a parameter that can be converted to a `String`). `println()` moves the cursor to a new line after displaying its parameter, while `print()` leaves the cursor on the same line.

Kotlin does not require a semicolon at the end of an expression or statement. Semicolons are only necessary to separate multiple expressions or statements on a single line.

### `var` & `val`, Data Types

To create an unchanging identifier, use the `val` keyword followed by the identifier name, a colon, and the type for that value. Then add an equals sign and the value to assign to that `val`:

```
val identifier: Type = initialization
```

Once a `val` is assigned, it cannot be reassigned.

Kotlin’s *type inference* can usually determine the type automatically, based on the initialization value. This produces a simpler definition:

```
val identifier = initialization
```

Both of the following are valid:

```
val daysInFebruary = 28
val daysInMarch: Int = 31
```

A `var` (variable) definition looks the same, using `var` instead of `val`:

```
var identifier1 = initialization
var identifier2: Type = initialization
```

Unlike a `val`, you can modify a `var`, so the following is legal:

```
var hoursSpent = 20
hoursSpent = 25
```

However, the *type* can’t be changed, so you get an error if you say:

```
hoursSpent = 30.5
```

Kotlin infers the `Int` type when `hoursSpent` is defined, so it won’t accept the change to a floating-point value.

### Functions

*Functions* are *named subroutines*:

```
fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType {
  // Lines of code ...
  return result
}
```

The `fun` keyword is followed by the function name and the parameter list in parentheses. Each parameter must have an explicit type because Kotlin cannot infer parameter types. The function itself has a type, defined in the same way as for a `var` or `val` (a colon followed by the type). A function’s type is the type of the returned result.

The function signature is followed by the function body contained within curly braces. The `return` statement provides the function’s return value.

You can use an abbreviated syntax when the function consists of a single expression:

```
fun functionName(arg1: Type1, arg2: Type2, ...): ReturnType = result
```

This form is called an *expression body*. Instead of an opening curly brace, use an equals sign followed by the expression. You can omit the return type because Kotlin infers it.

Here’s a function that produces the cube of its parameter, and another that adds an exclamation point to a `String`:

```
// Summary1/BasicFunctions.kt

fun cube(x: Int): Int {
  return x * x * x
}

fun bang(s: String) = s + "!"

fun main() {
  println(cube(3))
  println(bang("pop"))
}
/* Output:
27
pop!
*/
```

`cube()` has a block body with an explicit `return` statement. `bang()` is an expression body producing the function’s return value. Kotlin infers `bang()`’s return type to be `String`.

### Booleans

For Boolean algebra, Kotlin provides operators such as:

- `!` (not) logically negates the value (turns `true` to `false` and vice-versa).
- `&&` (and) returns `true` only if *both* conditions are `true`.
- `||` (or) returns `true` if at least one of the conditions is `true`.

```
// Summary1/Booleans.kt

fun main() {
  val opens = 9
  val closes = 20
  println("Operating hours: $opens - $closes")
  val hour = 6
  println("Current time: " + hour)

  val isOpen = hour >= opens && hour <= closes
  println("Open: " + isOpen)
  println("Not open: " + !isOpen)

  val isClosed = hour < opens || hour > closes
  println("Closed: " + isClosed)
}
/* Output:
Operating hours: 9 - 20
Current time: 6
Open: false
Not open: true
Closed: true
*/
```

`isOpen`’s initializer uses `&&` to test whether both conditions are `true`. The first condition `hour >= opens` is `false`, so the result of the entire expression becomes `false`. The initializer for `isClosed` uses `||`, producing `true` if at least one of the conditions is `true`. The expression `hour < opens` is `true`, so the whole expression is `true`.

### `if` Expressions

Because `if` is an expression, it produces a result. This result can be assigned to a `var` or `val`. Here, you also see the use of the `else` keyword:

```
// Summary1/IfResult.kt

fun main() {
  val result = if (99 < 100) 4 else 42
  println(result)
}
/* Output:
4
*/
```

Either branch of an `if` expression can be a multiline block of code surrounded by curly braces:

```
// Summary1/IfExpression.kt

fun main() {
  val activity = "swimming"
  val hour = 10

  val isOpen = if (
    activity == "swimming" ||
    activity == "ice skating") {
    val opens = 9
    val closes = 20
    println("Operating hours: " +
      opens + " - " + closes)
    hour >= opens && hour <= closes
  } else {
    false
  }
  println(isOpen)
}
/* Output:
Operating hours: 9 - 20
true
*/
```

A value defined inside a block of code, such as `opens`, is not accessible outside the scope of that block. Because they are defined *globally* to the `if` expression, `activity` and `hour` are accessible inside the `if` expression.

The result of an `if` expression is the result of the last expression of the chosen branch. Here, it’s `hour >= opens && hour <= closes` which is `true`.

### String Templates

You can insert a value within a `String` using `String` templates. Use a `$` before the identifier name:

```
// Summary1/StrTemplates.kt

fun main() {
  val answer = 42
  println("Found $answer!")            // [1]
  val condition = true
  println(
    "${if (condition) 'a' else 'b'}")  // [2]
  println("printing a $1")             // [3]
}
/* Output:
Found 42!
a
printing a $1
*/
```

- **[1]** `$answer` substitutes the value contained in `answer`.
- **[2]** `${if(condition) 'a' else 'b'}` evaluates and substitutes the result of the expression inside `${}`.
- **[3]** If the `$` is followed by anything unrecognizable as a program identifier, nothing special happens.

Use triple-quoted `String`s to store multiline text or text with special characters:

```
// Summary1/ThreeQuotes.kt

fun json(q: String, a: Int) = """{
  "question" : "$q",
  "answer" : $a
}"""

fun main() {
  println(json("The Ultimate", 42))
}
/* Output:
{
  "question" : "The Ultimate",
  "answer" : 42
}
*/
```

You don’t need to escape special characters like `"` within a triple-quoted `String`. (In a regular `String` you write `\"` to insert a double quote). As with normal `String`s, you can insert an identifier or an expression using `$` inside a triple-quoted `String`.

### Number Types

Kotlin provides integer types (`Int`, `Long`) and floating point types (`Double`). A whole number constant is `Int` by default and `Long` if you append an `L`. A constant is `Double` if it contains a decimal point:

```
// Summary1/NumberTypes.kt

fun main() {
  val n = 1000    // Int
  val l = 1000L   // Long
  val d = 1000.0  // Double
  println("$n $l $d")
}
/* Output:
1000 1000 1000.0
*/
```

An `Int` holds values between -231 and +231-1. Integral values can overflow; for example, adding anything to `Int.MAX_VALUE` produces an overflow:

```
// Summary1/Overflow.kt

fun main() {
  println(Int.MAX_VALUE + 1)
  println(Int.MAX_VALUE + 1L)
}
/* Output:
-2147483648
2147483648
*/
```

In the second `println()` statement we append `L` to `1`, forcing the whole expression to be of type `Long`, which avoids the overflow. (A `Long` can hold values between -263 and +263-1).

When you divide an `Int` with another `Int`, Kotlin produces an `Int` result, and any remainder is truncated. So `1/2` produces `0`. If a `Double` is involved, the `Int` is *promoted* to `Double` before the operation, so `1.0/2` produces `0.5`.

You might expect `d1` in the following to produce `3.4`:

```
// Summary1/Truncation.kt

fun main() {
  val d1: Double = 3.0 + 2 / 5
  println(d1)
  val d2: Double = 3 + 2.0 / 5
  println(d2)
}
/* Output:
3.0
3.4
*/
```

Because of evaluation order, it doesn’t. Kotlin first divides `2` by `5`, and integer math produces `0`, yielding an answer of `3.0`. The same evaluation order *does* produce the expected result for `d2`. Dividing `2.0` by `5` produces `0.4`. The `3` is promoted to a `Double` because we add it to a `Double` (`0.4`), which produces `3.4`.

Understanding evaluation order helps you to decipher what a program does, both with logical operations (Boolean expressions) and with mathematical operations. If you’re unsure about evaluation order, use parentheses to force your intention. This also makes it clear to those reading your code.

### Repetition with `while`

A `while` loop continues as long as the controlling *Boolean-expression* produces `true`:

```
while (Boolean-expression) {
  // Code to be repeated
}
```

The *Boolean expression* is evaluated once at the beginning of the loop and again before each further iteration.

```
// Summary1/While.kt

fun testCondition(i: Int) = i < 100

fun main() {
  var i = 0
  while (testCondition(i)) {
    print(".")
    i += 10
  }
}
/* Output:
..........
*/
```

Kotlin infers `Boolean` as the result type for `testCondition()`.

The short versions of assignment operators are available for all mathematical operations (`+=`, `-=`, `*=`, `/=`, `%=`). Kotlin also supports the increment and decrement operators `++` and `--`, in both prefix and postfix form.

`while` can be used with the `do` keyword:

```
do {
  // Code to be repeated
} while (Boolean-expression)
```

Rewriting `While.kt`:

```
// Summary1/DoWhile.kt

fun main() {
  var i = 0
  do {
    print(".")
    i += 10
  } while (testCondition(i))
}
/* Output:
..........
*/
```

The sole difference between `while` and `do-while` is that the body of the `do-while` always executes at least once, even if the Boolean expression produces `false` the first time.

### Looping & Ranges

Many programming languages index into an iterable object by stepping through integers. Kotlin’s `for` allows you to take elements directly from iterable objects like ranges and `String`s. For example, this `for` selects each character in the `String` `"Kotlin"`:

```
// Summary1/StringIteration.kt

fun main() {
  for (c in "Kotlin") {
    print("$c ")
    // c += 1 // error:
    // val cannot be reassigned
  }
}
/* Output:
K o t l i n
*/
```

`c` can’t be explicitly defined as either a `var` or `val`—Kotlin automatically makes it a `val` and infers its type as `Char` (you can provide the type explicitly, but in practice this is rarely done).

You can step through integral values using *ranges*:

```
// Summary1/RangeOfInt.kt

fun main() {
  for (i in 1..10) {
    print("$i ")
  }
}
/* Output:
1 2 3 4 5 6 7 8 9 10
*/
```

Creating a range with `..` includes both bounds, but `until` excludes the top endpoint: `1 until 10` is the same as `1..9`. You can specify an increment value using `step`: `1..21 step 3`.

### The `in` Keyword

The same `in` that provides `for` loop iteration also allows you to check membership in a range. `!in` returns `true` if the tested value *isn’t* in the range:

```
// Summary1/Membership.kt

fun inNumRange(n: Int) = n in 50..100

fun notLowerCase(ch: Char) = ch !in 'a'..'z'

fun main() {
  val i1 = 11
  val i2 = 100
  val c1 = 'K'
  val c2 = 'k'
  println("$i1 ${inNumRange(i1)}")
  println("$i2 ${inNumRange(i2)}")
  println("$c1 ${notLowerCase(c1)}")
  println("$c2 ${notLowerCase(c2)}")
}
/* Output:
11 false
100 true
K true
k false
*/
```

`in` can also be used to test membership in floating-point ranges, although such ranges can only be defined using `..` and not `until`.

### Expressions & Statements

The smallest useful fragment of code in most programming languages is either a *statement* or an *expression*. These have one basic difference:

- *A statement changes state.*
- *An expression expresses.*

That is, an expression produces a result, while a statement does not. Because it doesn’t return anything, a statement must change the state of its surroundings (that is, create a *side effect*) to do anything useful.

Almost everything in Kotlin is an expression:

```
val hours = 10
val minutesPerHour = 60
val minutes = hours * minutesPerHour
```

In each case, everything to the right of the `=` is an expression, which produces a result that is assigned to the identifier on the left.

Functions like `println()` don’t seem to produce a result, but because they are still expressions, they must return *something*. Kotlin has a special `Unit` type for these:

```
// Summary1/UnitReturn.kt

fun main() {
  val result = println("returns Unit")
  println(result)
}
/* Output:
returns Unit
kotlin.Unit
*/
```

Experienced programmers should go to [Summary 2](javascript:void(0)) after working the exercises for this atom.

***Exercises and solutions can be found at www.AtomicKotlin.com.***