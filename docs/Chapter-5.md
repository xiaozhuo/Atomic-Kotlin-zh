# Data Types

> Data can have different *types*.

To solve a math problem, you write an expression:

```
5.9 + 6
```

You know that adding those numbers produces another number. Kotlin knows that too. You know that one is a fractional number (`5.9`), which Kotlin calls a `Double`, and the other is a whole number (`6`), which Kotlin calls an `Int`. You know the result is a fractional number.

A *type* (also called *data type*) tells Kotlin how you intend to use that data. A type provides a set of values from which an expression may take its values. A type defines the operations that can be performed on the data, the meaning of the data, and how values of that type can be stored.

Kotlin uses types to verify that your expressions are correct. In the above expression, Kotlin creates a new value of type `Double` to hold the result.

Kotlin tries to adapt to what you need. If you ask it to do something that violates type rules it produces an error message. For example, try adding a `String` and a number:

```
// DataTypes/StringPlusNumber.kt

fun main() {
  println("Sally" + 5.9)
}
/* Output:
Sally5.9
*/
```

Types tell Kotlin how to use them correctly. In this case, the type rules tell Kotlin how to add a number to a `String`: by appending the two values and creating a `String` to hold the result.

Now try multiplying a `String` and a `Double` by changing the `+` in `StringPlusNumber.kt` to a `*`:

```
"Sally" * 5.9
```

Combining types this way doesn’t make sense to Kotlin, so it gives you an error.

In [`var` & `val`](javascript:void(0)), we stored several types. Kotlin figured out the types for us, based on how we used them. This is called *type inference*.

We can be more verbose and specify the type:

```
val identifier: Type = initialization
```

You start with the `val` or `var` keyword, followed by the identifier, a colon, the type, an `=`, and the initialization value. So instead of saying:

```
val n = 1
var p = 1.2
```

You can say:

```
val n: Int = 1
var p: Double = 1.2
```

We’ve told Kotlin that `n` is an `Int` and `p` is a `Double`, rather than letting it infer the type.

Here are some of Kotlin’s basic types:

```
// DataTypes/Types.kt

fun main() {
  val whole: Int = 11              // [1]
  val fractional: Double = 1.4     // [2]
  val trueOrFalse: Boolean = true  // [3]
  val words: String = "A value"    // [4]
  val character: Char = 'z'        // [5]
  val lines: String = """Triple quotes let
you have many lines
in your string"""                  // [6]
  println(whole)
  println(fractional)
  println(trueOrFalse)
  println(words)
  println(character)
  println(lines)
}
/* Output:
11
1.4
true
A value
z
Triple quotes let
you have many lines
in your string
*/
```

- **[1]** The `Int` data type is an *integer*, which means it only holds whole numbers.
- **[2]** To hold fractional numbers, use a `Double`.
- **[3]** A `Boolean` data type only holds the two special values `true` and `false`.
- **[4]** A `String` holds a sequence of characters. You assign a value using a double-quoted `String`.
- **[5]** A `Char` holds one character.
- **[6]** If you have many lines and/or special characters, surround them with triple-double-quotes (this is a *triple-quoted `String`*).

Kotlin uses type inference to determine the meaning of mixed types. When mixing `Int`s and `Double`s during addition, for example, Kotlin decides the type for the resulting value:

```
// DataTypes/Inference.kt

fun main() {
  val n = 1 + 1.2
  println(n)
}
/* Output:
2.2
*/
```

When you add an `Int` to a `Double` using type inference, Kotlin determines that the result `n` is a `Double` and ensures that it follows all the rules for `Double`s.

Kotlin’s type inference is part of its strategy of doing work for the programmer. If you leave out the type declaration, Kotlin can usually infer it.

***Exercises and solutions can be found at www.AtomicKotlin.com.***