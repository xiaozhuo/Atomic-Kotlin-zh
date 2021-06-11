# `if` Expressions

> An *`if` expression* makes a choice.

The `if` keyword tests an expression to see whether it’s `true` or `false` and performs an action based on the result. A true-or-false expression is called a *Boolean*, after the mathematician George Boole who invented the logic behind these expressions. Here’s an example using the `>` (greater than) and `<` (less than) symbols:

```
// IfExpressions/If1.kt

fun main() {
  if (1 > 0)
    println("It's true!")
  if (10 < 11) {
    println("10 < 11")
    println("ten is less than eleven")
  }
}
/* Output:
It's true!
10 < 11
ten is less than eleven
*/
```

The expression inside the parentheses after the `if` must evaluate to `true` or `false`. If `true`, the following expression is executed. To execute multiple lines, place them within curly braces.

We can create a Boolean expression in one place, and use it in another:

```
// IfExpressions/If2.kt

fun main() {
  val x: Boolean = 1 >= 1
  if (x)
    println("It's true!")
}
/* Output:
It's true!
*/
```

Because `x` is `Boolean`, the `if` can test it directly by saying `if(x)`.

The Boolean `>=` operator returns `true` if the expression on the left side of the operator is *greater than or equal* to that on the right. Likewise, `<=` returns `true` if the expression on the left side is *less than or equal* to that on the right.

The `else` keyword allows you to handle both `true` and `false` paths:

```
// IfExpressions/If3.kt

fun main() {
  val n: Int = -11
  if (n > 0)
    println("It's positive")
  else
    println("It's negative or zero")
}
/* Output:
It's negative or zero
*/
```

The `else` keyword is only used in conjunction with `if`. You are not limited to a single check—you can test multiple combinations by combining `else` and `if`:

```
// IfExpressions/If4.kt

fun main() {
  val n: Int = -11
  if (n > 0)
    println("It's positive")
  else if (n == 0)
    println("It's zero")
  else
    println("It's negative")
}
/* Output:
It's negative
*/
```

Here we use `==` to check two numbers for equality. `!=` tests for inequality.

The typical pattern is to start with `if`, followed by as many `else if` clauses as you need, ending with a final `else` for anything that doesn’t match all the previous tests. When an `if` expression reaches a certain size and complexity you’ll probably use a `when` expression instead. `when` is described later in the book, in [`when` Expressions](javascript:void(0)).

The “not” operator `!` tests for the opposite of a Boolean expression:

```
// IfExpressions/If5.kt

fun main() {
  val y: Boolean = false
  if (!y)
    println("!y is true")
}
/* Output:
!y is true
*/
```

To verbalize `if(!y)`, say “if not y.”

The entire `if` is an expression, so it can produce a result:

```
// IfExpressions/If6.kt

fun main() {
  val num = 10
  val result = if (num > 100) 4 else 42
  println(result)
}
/* Output:
42
*/
```

Here, we store the value produced by the entire `if` expression in an intermediate identifier called `result`. If the condition is satisfied, the first branch produces `result`. If not, the `else` value becomes `result`.

Let’s practice creating functions. Here’s one that takes a Boolean parameter:

```
// IfExpressions/TrueOrFalse.kt

fun trueOrFalse(exp: Boolean): String {
  if (exp)
    return "It's true!"          // [1]
  return "It's false"            // [2]
}

fun main() {
  val b = 1
  println(trueOrFalse(b < 3))
  println(trueOrFalse(b >= 3))
}
/* Output:
It's true!
It's false
*/
```

The Boolean parameter `exp` is passed to the function `trueOrFalse()`. If the argument is passed as an expression, such as `b < 3`, that expression is first evaluated and the result is passed to the function. `trueOrFalse()` tests `exp` and if the result is `true`, line **[1]** is executed, otherwise line **[2]** is executed.

- **[1]** `return` says, “Leave the function and produce this value as the function’s result.” Notice that `return` can appear anywhere in a function and does not have to be at the end.

Rather than using `return` as in the previous example, you can use the `else` keyword to produce the result as an expression:

```
// IfExpressions/OneOrTheOther.kt

fun oneOrTheOther(exp: Boolean): String =
  if (exp)
    "True!" // No 'return' necessary
  else
    "False"

fun main() {
  val x = 1
  println(oneOrTheOther(x == 1))
  println(oneOrTheOther(x == 2))
}
/* Output:
True!
False
*/
```

Instead of two expressions in `trueOrFalse()`, `oneOrTheOther()` is a single expression. The result of that expression is the result of the function, so the `if` expression becomes the function body.

​      ***Exercises and solutions can be found at www.AtomicKotlin.com.\***