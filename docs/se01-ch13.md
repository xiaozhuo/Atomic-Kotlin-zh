# The `in` Keyword

> The `in` keyword tests whether a value is within a range.

```
// InKeyword/MembershipInRange.kt

fun main() {
  val percent = 35
  println(percent in 1..100)
}
/* Output:
true
*/
```

In [Booleans](javascript:void(0)), you learned to check bounds explicitly:

```
// InKeyword/MembershipUsingBounds.kt

fun main() {
  val percent = 35
  println(0 <= percent && percent <= 100)
}
/* Output:
true
*/
```

`0 <= x && x <= 100` is logically equivalent to `x in 0..100`. IntelliJ IDEA suggests automatically replacing the first form with the second, which is easier to read and understand.

The `in` keyword is used for both iteration and membership. An `in` inside the control expression of a `for` loop means iteration, otherwise `in` checks membership:

```
// InKeyword/IterationVsMembership.kt

fun main() {
  val values = 1..3
  for (v in values) {
    println("iteration $v")
  }
  val v = 2
  if (v in values)
    println("$v is a member of $values")
}
/* Output:
iteration 1
iteration 2
iteration 3
2 is a member of 1..3
*/
```

The `in` keyword is not limited to ranges. You can also check whether a character is a part of a `String`. The following example uses `in` instead of `hasChar()` from the previous atom:

```
// InKeyword/InString.kt

fun main() {
  println('t' in "kotlin")
  println('a' in "kotlin")
}
/* Output:
true
false
*/
```

Later in the book you’ll see that `in` works with other types, as well.

Here, `in` tests whether a character belongs to a range of characters:

```
// InKeyword/CharRange.kt

fun isDigit(ch: Char) = ch in '0'..'9'

fun notDigit(ch: Char) =
  ch !in '0'..'9'               // [1]

fun main() {
  println(isDigit('a'))
  println(isDigit('5'))
  println(notDigit('z'))
}
/* Output:
false
true
true
*/
```

- **[1]** `!in` checks that a value doesn’t belong to a range.

You can create a `Double` range, but you can only use it to check for membership:

```
// InKeyword/FloatingPointRange.kt

fun inFloatRange(n: Double) {
  val r = 1.0..10.0
  println("$n in $r? ${n in r}")
}

fun main() {
  inFloatRange(0.999999)
  inFloatRange(5.0)
  inFloatRange(10.0)
  inFloatRange(10.0000001)
}
/* Output:
0.999999 in 1.0..10.0? false
5.0 in 1.0..10.0? true
10.0 in 1.0..10.0? true
10.0000001 in 1.0..10.0? false
*/
```

Floating-point ranges can only be created using `..` because `until` would mean excluding a floating-point number as an endpoint, which doesn’t make sense.

You can check whether a `String` is a member of a range of `String`s:

```
// InKeyword/StringRange.kt

fun main() {
  println("ab" in "aa".."az")
  println("ba" in "aa".."az")
}
/* Output:
true
false
*/
```

Here Kotlin uses alphabetic comparison.

***Exercises and solutions can be found at www.AtomicKotlin.com.***