# Repetition with `while`

> Computers are ideal for repetitive tasks.

The most basic form of repetition uses the `while` keyword. This repeats a block as long as the controlling *Boolean expression* is `true`:

```
while (Boolean-expression) {
  // Code to be repeated
}
```

The Boolean expression is evaluated once at the beginning of the loop and again before each further iteration through the block.

```
// RepetitionWithWhile/WhileLoop.kt

fun condition(i: Int) = i < 100  // [1]

fun main() {
  var i = 0
  while (condition(i)) {         // [2]
    print(".")
    i += 10                      // [3]
  }
}
/* Output:
..........
*/
```

- **[1]** The comparison operator `<` produces a `Boolean` result, so Kotlin infers `Boolean` as the result type for `condition()`.
- **[2]** The conditional expression for the `while` says: “repeat the statements in the body as long as `condition()` returns `true`.”
- **[3]** The `+=` operator adds `10` to `i` and assigns the result to `i` in a single operation (`i` must be a `var` for this to work). This is equivalent to:

```
i = i + 10
```

There’s a second way to use `while`, in conjunction with the `do` keyword:

```
do {
  // Code to be repeated
} while (Boolean-expression)
```

Rewriting `WhileLoop.kt` to use a `do-while` produces:

```
// RepetitionWithWhile/DoWhileLoop.kt

fun main() {
  var i = 0
  do {
    print(".")
    i += 10
  } while (condition(i))
}
/* Output:
..........
*/
```

The sole difference between `while` and `do-while` is that the body of the `do-while` always executes at least once, even if the Boolean expression initially produces `false`. In a `while`, if the conditional is `false` the first time, then the body never executes. In practice, `do-while` is less common than `while`.

The short versions of assignment operators are available for all the arithmetic operations: `+=`, `-=`, `*=`, `/=`, and `%=`. This uses `-=` and `%=`:

```
// RepetitionWithWhile/AssignmentOperators.kt

fun main() {
  var n = 10
  val d = 3
  print(n)
  while (n > d) {
    n -= d
    print(" - $d")
  }
  println(" = $n")

  var m = 10
  print(m)
  m %= d
  println(" % $d = $m")
}
/* Output:
10 - 3 - 3 - 3 = 1
10 % 3 = 1
*/
```

To calculate the remainder of the integer division of two natural numbers, we start with a `while` loop, then use the remainder operator.

Adding `1` and subtracting `1` from a number are so common that they have their own increment and decrement operators: `++` and `--`. You can replace `i += 1` with `i++`:

```
// RepetitionWithWhile/IncrementOperator.kt

fun main() {
  var i = 0
  while (i < 4) {
    print(".")
    i++
  }
}
/* Output:
....
*/
```

In practice, `while` loops are not used for iterating over a range of numbers. The `for` loop is used instead. This is covered in the next atom.

***Exercises and solutions can be found at www.AtomicKotlin.com.***