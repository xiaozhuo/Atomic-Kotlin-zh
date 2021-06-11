# Expressions & Statements

> *Statements* and *expressions* are the smallest useful fragments of code in most programming languages.

There’s a basic difference: a statement has an effect, but produces no result. An expression always produces a result.

Because it doesn’t produce a result, a statement must change the state of its surroundings to be useful. Another way to say this is “a statement is called for its *side effects*” (that is, what it does *other* than producing a result). As a memory aid:

> *A statement changes state*.

One definition of “express” is “to force or squeeze out,” as in “to express the juice from an orange.” So

> *An expression expresses*.

That is, it produces a result.

The `for` loop is a statement in Kotlin. You cannot assign it because there’s no result:

```
// ExpressionsStatements/ForIsAStatement.kt

fun main() {
  // Can't do this:
  // val f = for(i in 1..10) {}
  // Compiler error message:
  // for is not an expression, and
  // only expressions are allowed here
}
```

A `for` loop is used for its side effects.

An expression produces a value, which can be assigned or used as part of another expression, whereas a statement is always a top-level element.

Every function call is an expression. Even if the function returns `Unit` and is called only for its side effects, the result can still be assigned:

```
// ExpressionsStatements/UnitReturnType.kt

fun unitFun() = Unit

fun main() {
  println(unitFun())
  val u1: Unit = println(42)
  println(u1)
  val u2 = println(0) // Type inference
  println(u2)
}
/* Output:
kotlin.Unit
42
kotlin.Unit
0
kotlin.Unit
*/
```

The `Unit` type contains a single value called `Unit`, which you can return directly, as seen in `unitFun()`. Calling `println()` also returns `Unit`. The `val u1` captures the return value of `println()` and is explicitly declared as `Unit` while `u2` uses type inference.

`if` creates an expression, so you can assign its result:

```
// ExpressionsStatements/AssigningAnIf.kt

fun main() {
  val result1 = if (11 > 42) 9 else 5

  val result2 = if (1 < 2) {
    val a = 11
    a + 42
  } else 42

  val result3 =
    if ('x' < 'y')
      println("x < y")
    else
      println("x > y")

  println(result1)
  println(result2)
  println(result3)
}
/* Output:
x < y
5
53
kotlin.Unit
*/
```

The first output line is `x < y`, even though `result3` isn’t displayed until the end of `main()`. This happens because evaluating `result3` calls `println()`, and the evaluation occurs when `result3` is defined.

Notice that `a` is defined inside the block of code for `result2`. The result of the last expression becomes the result of the `if` expression; here, it’s the sum of 11 and 42. But what about `a`? Once you leave the code block (move outside the curly braces), you can’t access `a`. It is *temporary* and is discarded once you exit the *scope* of that block.

The increment operator `i++` is also an expression, even if it looks like a statement. Kotlin follows the approach used by C-like languages and provides two versions of increment and decrement operators with slightly different semantics. The prefix operator appears before the operand, as in `++i`, and returns the value after the increment happens. You can read it as “first do the increment, then return the resulting value.” The postfix operator is placed after the operand, as in `i++`, and returns the value of `i` before the increment occurs. You can read it as “first produce the result, then do the increment.”

```
// ExpressionsStatements/PostfixVsPrefix.kt

fun main() {
  var i = 10
  println(i++)
  println(i)
  var j = 20
  println(++j)
  println(j)
}
/* Output:
10
11
21
21
*/
```

The decrement operator also has two versions: `--i` and `i--`. Using increment and decrement operators within other expressions is discouraged because it can produce confusing code:

```
// ExpressionsStatements/Confusing.kt

fun main() {
  var i = 1
  println(i++ + ++i)
}
```

Try to guess what the output will be, then check it.

***Exercises and solutions can be found at www.AtomicKotlin.com.***