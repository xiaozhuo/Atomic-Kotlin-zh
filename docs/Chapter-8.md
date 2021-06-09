# String Templates

> A *`String` template* is a programmatic way to generate a `String`.

If you put a `$` before an identifier name, the `String` template will insert that identifier’s contents into the `String`:

```
// StringTemplates/StringTemplates.kt

fun main() {
  val answer = 42
  println("Found $answer!")     // [1]
  println("printing a $1")      // [2]
}
/* Output:
Found 42!
printing a $1
*/
```

- **[1]** `$answer` substitutes the value of `answer`.
- **[2]** If what follows the `$` isn’t recognizable as a program identifier, nothing special happens.

You can also insert values into a `String` using concatenation (`+`):

```
// StringTemplates/StringConcatenation.kt

fun main() {
  val s = "hi\n" // \n is a newline character
  val n = 11
  val d = 3.14
  println("first: " + s + "second: " +
    n + ", third: " + d)
}
/* Output:
first: hi
second: 11, third: 3.14
*/
```

Placing an expression inside `${}` evaluates it. The return value is converted to a `String` and inserted into the resulting `String`:

```
// StringTemplates/ExpressionInTemplate.kt

fun main() {
  val condition = true
  println(
    "${if (condition) 'a' else 'b'}")  // [1]
  val x = 11
  println("$x + 4 = ${x + 4}")
}
/* Output:
a
11 + 4 = 15
*/
```

- **[1]** `if(condition) 'a' else 'b'` is evaluated and the result is substituted for the entire `${}` expression.

When a `String` must include a special character, such as a quote, you can either escape that character with a `\` (*backslash*), or use a `String` literal in triple quotes:

```
// StringTemplates/TripleQuotes.kt

fun main() {
  val s = "value"
  println("s = \"$s\".")
  println("""s = "$s".""")
}
/* Output:
s = "value".
s = "value".
*/
```

With triple quotes, you insert a value of an expression the same way you do it for a single-quoted `String`.

***Exercises and solutions can be found at www.AtomicKotlin.com.***