# Number Types

> Different types of numbers are stored in different ways.

If you create an identifier and assign an integer value to it, Kotlin infers the `Int` type:

```
// NumberTypes/InferInt.kt

fun main() {
  val million = 1_000_000  // Infers Int
  println(million)
}
/* Output:
1000000
*/
```

For readability, Kotlin allows underscores within numerical values.

The basic mathematical operators for numbers are the ones available in most programming languages: addition (`+`), subtraction (`-`), division (`/`), multiplication (`*`) and modulus (`%`), which produces the remainder from integer division:

```
// NumberTypes/Modulus.kt

fun main() {
  val numerator: Int = 19
  val denominator: Int = 10
  println(numerator % denominator)
}
/* Output:
9
*/
```

Integer division truncates its result:

```
// NumberTypes/IntDivisionTruncates.kt

fun main() {
  val numerator: Int = 19
  val denominator: Int = 10
  println(numerator / denominator)
}
/* Output:
1
*/
```

If the operation had rounded the result, the output would be `2`.

The order of operations follows basic arithmetic:

```
// NumberTypes/OpOrder.kt

fun main() {
  println(45 + 5 * 6)
}
/* Output:
75
*/
```

The multiplication operation `5 * 6` is performed first, followed by the addition `45 + 30`.

If you want `45 + 5` to happen first, use parentheses:

```
// NumberTypes/OpOrderParens.kt

fun main() {
  println((45 + 5) * 6)
}
/* Output:
300
*/
```

Now let’s calculate *body mass index* (BMI), which is weight in kilograms divided by the square of the height in meters. If you have a BMI of less than `18.5`, you are underweight. Between `18.5` and `24.9` is normal weight. BMI of `25` and higher is overweight. This example also shows the preferred formatting style when you can’t fit the function’s parameters on a single line:

```
// NumberTypes/BMIMetric.kt

fun bmiMetric(
  weight: Double,
  height: Double
): String {
  val bmi = weight / (height * height)  // [1]
  return if (bmi < 18.5) "Underweight"
    else if (bmi < 25) "Normal weight"
    else "Overweight"
}

fun main() {
  val weight = 72.57 // 160 lbs
  val height = 1.727 // 68 inches
  val status = bmiMetric(weight, height)
  println(status)
}
/* Output:
Normal weight
*/
```

- **[1]** If you remove the parentheses, you divide `weight` by `height` then multiply that result by `height`. That’s a much larger number, and the wrong answer.

`bmiMetric()` uses `Double`s for the weight and height. A `Double` holds very large and very small floating-point numbers.

Here’s a version using English units, represented by `Int` parameters:

```
// NumberTypes/BMIEnglish.kt

fun bmiEnglish(
  weight: Int,
  height: Int
): String {
  val bmi =
    weight / (height * height) * 703.07 // [1]
  return if (bmi < 18.5) "Underweight"
    else if (bmi < 25) "Normal weight"
    else "Overweight"
}

fun main() {
  val weight = 160
  val height = 68
  val status = bmiEnglish(weight, height)
  println(status)
}
/* Output:
Underweight
*/
```

Why does the result differ from `bmiMetric()`, which uses `Double`s? When you divide an integer by another integer, Kotlin produces an integer result. The standard way to deal with the remainder during integer division is *truncation*, meaning “chop it off and throw it away” (there’s no rounding). So if you divide `5` by `2` you get `2`, and `7/10` is zero. When Kotlin calculates `bmi` in expression **[1]**, it divides `160` by `68 * 68` and gets zero. It then multiplies zero by `703.07` to get zero.

To avoid this problem, move `703.07` to the front of the calculation. The calculations are then forced to be `Double`:

```
val bmi = 703.07 * weight / (height * height)
```

The `Double` parameters in `bmiMetric()` prevent this problem. Convert computations to the desired type as early as possible to preserve accuracy.

All programming languages have limits to what they can store within an integer. Kotlin’s `Int` type can take values between -231 and +231-1, a constraint of the `Int` 32-bit representation. If you sum or multiply two `Int`s that are big enough, you’ll overflow the result:

```
// NumberTypes/IntegerOverflow.kt

fun main() {
  val i: Int = Int.MAX_VALUE
  println(i + i)
}
/* Output:
-2
*/
```

`Int.MAX_VALUE` is a predefined value which is the largest number an `Int` can hold.

The overflow produces a result that is clearly incorrect, as it is both negative and much smaller than we expect. Kotlin issues a warning whenever it detects a potential overflow.

Preventing overflow is your responsibility as a developer. Kotlin can’t always detect overflow during compilation, and it doesn’t prevent overflow because that would produce an unacceptable performance impact.

If your program contains large numbers, you can use `Long`s, which accommodate values from -263 to +263-1. To define a `val` of type `Long`, you can specify the type explicitly or put `L` at the end of a numeric literal, which tells Kotlin to treat that value as a `Long`:

```
// NumberTypes/LongConstants.kt

fun main() {
  val i = 0          // Infers Int
  val l1 = 0L        // L creates Long
  val l2: Long = 0   // Explicit type
  println("$l1 $l2")
}
/* Output:
0 0
*/
```

By changing to `Long`s we prevent the overflow in `IntegerOverflow.kt`:

```
// NumberTypes/UsingLongs.kt

fun main() {
  val i = Int.MAX_VALUE
  println(0L + i + i)              // [1]
  println(1_000_000 * 1_000_000L)  // [2]
}
/* Output:
4294967294
1000000000000
*/
```

Using a numeric literal in both **[1]** and **[2]** forces `Long` calculations, and also produces a result of type `Long`. The location where the `L` appears is unimportant. If one of the values is `Long`, the resulting expression is `Long`.

Although they can hold much larger values than `Int`s, `Long`s still have size limitations:

```
// NumberTypes/BiggestLong.kt

fun main() {
  println(Long.MAX_VALUE)
}
/* Output:
9223372036854775807
*/
```

`Long.MAX_VALUE` is the largest value a `Long` can hold.

***Exercises and solutions can be found at www.AtomicKotlin.com.***