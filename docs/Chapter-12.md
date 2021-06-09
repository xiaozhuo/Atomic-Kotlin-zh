# Looping & Ranges

> The `for` keyword executes a block of code for each value in a sequence.

The set of values can be a range of integers, a `String`, or, as you’ll see later in the book, a collection of items. The `in` keyword indicates that you are stepping through values:

```
for (v in values) {
  // Do something with v
}
```

Each time through the loop, `v` is given the next element in `values`.

Here’s a `for` loop repeating an action a fixed number of times:

```
// LoopingAndRanges/RepeatThreeTimes.kt

fun main() {
  for (i in 1..3) {
    println("Hey $i!")
  }
}
/* Output:
Hey 1!
Hey 2!
Hey 3!
*/
```

The output shows the index `i` receiving each value in the range from 1 to 3.

A *range* is an interval of values defined by a pair of endpoints. There are two basic ways to define ranges:

```
// LoopingAndRanges/DefiningRanges.kt

fun main() {
  val range1 = 1..10         // [1]
  val range2 = 0 until 10    // [2]
  println(range1)
  println(range2)
}
/* Output:
1..10
0..9
*/
```

- **[1]** Using `..` syntax includes both bounds in the resulting range.
- **[2]** `until` excludes the end. The output shows that `10` is not part of the range.

Displaying a range produces a readable format.

This sums the numbers from 10 to 100:

```
// LoopingAndRanges/SumUsingRange.kt

fun main() {
  var sum = 0
  for (n in 10..100) {
    sum += n
  }
  println("sum = $sum")
}
/* Output:
sum = 5005
*/
```

You can iterate over a range in reverse order. You can also use a `step` value to change the interval from the default of `1`:

```
// LoopingAndRanges/ForWithRanges.kt

fun showRange(r: IntProgression) {
  for (i in r) {
    print("$i ")
  }
  print("    // $r")
  println()
}

fun main() {
  showRange(1..5)
  showRange(0 until 5)
  showRange(5 downTo 1)          // [1]
  showRange(0..9 step 2)         // [2]
  showRange(0 until 10 step 3)   // [3]
  showRange(9 downTo 2 step 3)
}
/* Output:
1 2 3 4 5     // 1..5
0 1 2 3 4     // 0..4
5 4 3 2 1     // 5 downTo 1 step 1
0 2 4 6 8     // 0..8 step 2
0 3 6 9     // 0..9 step 3
9 6 3     // 9 downTo 3 step 3
*/
```

- **[1]** `downTo` produces a decreasing range.
- **[2]** `step` changes the interval. Here, the range steps by a value of two instead of one.
- **[3]** `until` can also be used with `step`. Notice how this affects the output.

In each case the sequence of numbers form an arithmetic progression. `showRange()` accepts an `IntProgression` parameter, which is a built-in type that includes `Int` ranges. Notice that the `String` representation of each `IntProgression` as it appears in output comment for each line is often different from the range passed into `showRange()`—the `IntProgression` is translating the input into an equivalent common form.

You can also produce a range of characters. This `for` iterates from `a` to `z`:

```
// LoopingAndRanges/ForWithCharRange.kt

fun main() {
  for (c in 'a'..'z') {
    print(c)
  }
}
/* Output:
abcdefghijklmnopqrstuvwxyz
*/
```

You can iterate over a range of elements that are whole quantities, like integers and characters, but not floating-point values.

Square brackets access characters by index. Because we start counting characters in a `String` at zero, `s[0]` selects the first character of the `String s`. Selecting `s.lastIndex` produces the final index number:

```
// LoopingAndRanges/IndexIntoString.kt

fun main() {
  val s = "abc"
  for (i in 0..s.lastIndex) {
    print(s[i] + 1)
  }
}
/* Output:
bcd
*/
```

Sometimes people describe `s[0]` as “the zeroth character.”

Characters are stored as numbers corresponding to their [ASCII codes](https://en.wikipedia.org/wiki/ASCII), so adding an integer to a character produces a new character corresponding to the new code value:

```
// LoopingAndRanges/AddingIntToChar.kt

fun main() {
  val ch: Char = 'a'
  println(ch + 25)
  println(ch < 'z')
}
/* Output:
z
true
*/
```

The second `println()` shows that you can compare character codes.

A `for` loop can iterate over `String`s directly:

```
// LoopingAndRanges/IterateOverString.kt

fun main() {
  for (ch in "Jnskhm ") {
    print(ch + 1)
  }
}
/* Output:
Kotlin!
*/
```

`ch` receives each character in turn.

In the following example, the function `hasChar()` iterates over the `String` `s` and tests whether it contains a given character `ch`. The `return` in the middle of the function stops the function when the answer is found:

```
// LoopingAndRanges/HasChar.kt

fun hasChar(s: String, ch: Char): Boolean {
  for (c in s) {
    if (c == ch) return true
  }
  return false
}

fun main() {
  println(hasChar("kotlin", 't'))
  println(hasChar("kotlin", 'a'))
}
/* Output:
true
false
*/
```

The next atom shows that `hasChar()` is unnecessary—you can use built-in syntax instead.

If you simply want to repeat an action a fixed number of times, you may use `repeat()` instead of a `for` loop:

```
// LoopingAndRanges/RepeatHi.kt

fun main() {
  repeat(2) {
    println("hi!")
  }
}
/* Output:
hi!
hi!
*/
```

`repeat()` is a standard library function, not a keyword. You’ll see how it was created much later in the book.

***Exercises and solutions can be found at www.AtomicKotlin.com.***