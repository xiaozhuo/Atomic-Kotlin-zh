# Booleans

> [`if` Expressions](javascript:void(0)) demonstrated the “not” operator `!`, which negates a `Boolean` value. This atom introduces more *Boolean Algebra*.

We start with the operators “and” and “or”:

- `&&` (and): Produces `true` only if the `Boolean` expression on the left of the operator and the one on the right are both `true`.
- `||` (or): Produces `true` if either the expression on the left or right of the operator is `true`, or if both are `true`.

In this example, we determine whether a business is open or closed, based on the `hour`:

```
// Booleans/Open1.kt

fun isOpen1(hour: Int) {
  val open = 9
  val closed = 20
  println("Operating hours: $open - $closed")
  val status =
    if (hour >= open && hour <= closed) // [1]
      true
    else
      false
  println("Open: $status")
}

fun main() = isOpen1(6)
/* Output:
Operating hours: 9 - 20
Open: false
*/
```

`main()` is a single function call, so we can use an expression body as described in [Functions](javascript:void(0)).

The `if` expression in **[1]** Checks whether `hour` is between the opening time and closing time, so we combine the expressions with the `Boolean` `&&` (and).

The `if` expression can be simplified. The result of the expression `if(cond) true else false` is just `cond`:

```
// Booleans/Open2.kt

fun isOpen2(hour: Int) {
  val open = 9
  val closed = 20
  println("Operating hours: $open - $closed")
  val status = hour >= open && hour <= closed
  println("Open: $status")
}

fun main() = isOpen2(6)
/* Output:
Operating hours: 9 - 20
Open: false
*/
```

Let’s reverse the logic and check whether the business is currently closed. The “or” operator `||` produces `true` if at least one of the conditions is satisfied:

```
// Booleans/Closed.kt

fun isClosed(hour: Int) {
  val open = 9
  val closed = 20
  println("Operating hours: $open - $closed")
  val status = hour < open || hour > closed
  println("Closed: $status")
}

fun main() = isClosed(6)
/* Output:
Operating hours: 9 - 20
Closed: true
*/
```

`Boolean` operators enable complicated logic in compact expressions. However, things can easily become confusing. Strive for readability and specify your intentions explicitly.

Here’s an example of a complicated `Boolean` expression where different evaluation order produces different results:

```
// Booleans/EvaluationOrder.kt

fun main() {
  val sunny = true
  val hoursSleep = 6
  val exercise = false
  val temp = 55

  // [1]:
  val happy1 = sunny && temp > 50 ||
    exercise && hoursSleep > 7
  println(happy1)

  // [2]:
  val sameHappy1 = (sunny && temp > 50) ||
    (exercise && hoursSleep > 7)
  println(sameHappy1)

  // [3]:
  val notSame =
    (sunny && temp > 50 || exercise) &&
      hoursSleep > 7
  println(notSame)
}
/* Output:
true
true
false
*/
```

The `Boolean` expressions are `sunny`, `temp > 50`, `exercise`, and `hoursSleep > 7`. We read `happy1` as “It’s sunny *and* the temperature is greater than 50 *or* I’ve exercised *and* had more than 7 hours of sleep.” But does `&&` have precedence over `||`, or the opposite?

The expression in **[1]** uses Kotlin’s default evaluation order. This produces the same result as the expression in **[2]** because, without parentheses, the “ands” are evaluated first, then the “or”. The expression in **[3]** uses parentheses to produce a different result. In **[3]**, we’re only happy if we get at least 7 hours of sleep.

***Exercises and solutions can be found at www.AtomicKotlin.com.***