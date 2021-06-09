# Hello, World!

> “Hello, world!” is a program commonly used to demonstrate the basic syntax of programming languages.

We develop this program in several steps so you understand its parts.

First, let’s examine an empty program that does nothing at all:

```kotlin
// HelloWorld/EmptyProgram.kt

fun main() {
  // Program code here ...
}
```

The example starts with a *comment*, which is illuminating text that is ignored by Kotlin. `//` (two forward slashes) begins a comment that goes to the end of the current line:

```kotlin
// Single-line comment
```

Kotlin ignores the `//` and everything after it until the end of the line. On the following line, it pays attention again.

The first line of each example in this book is a comment starting with the name of the the subdirectory containing the source-code file (Here, `HelloWorld`) followed by the name of the file: `EmptyProgram.kt`. The example subdirectory for each atom corresponds to the name of that atom.

*keywords* are reserved by the language and given special meaning. The keyword `fun` is short for *function*. A function is a collection of code that can be executed using that function’s name (we spend a lot of time on functions throughout the book). The function’s name follows the `fun` keyword, so in this case it’s `main()` (in prose, we follow the function name with parentheses).

`main()` is actually a special name for a function; it indicates the “entry point” for a Kotlin program. A Kotlin program can have many functions with many different names, but `main()` is the one that’s automatically called when you execute the program.

The *parameter list* follows the function name and is enclosed by parentheses. Here, we don’t pass anything into `main()` so the parameter list is empty.

The *function body* appears after the parameter list. It begins with an opening brace (`{`) and ends with a closing brace (`}`). The function body contains *statements* and *expressions*. A statement produces an effect, and an expression yields a result.

`EmptyProgram.kt` contains no statements or expressions in the body, just a comment.

Let’s make the program display “Hello, world!” by adding a line in the `main()` body:

```kotlin
// HelloWorld/HelloWorld.kt

fun main() {
  println("Hello, world!")
}
/* Output:
Hello, world!
*/
```

The line that displays the greeting begins with `println()`. Like `main()`, `println()` is a function. This line *calls* the function, which executes its body. You give the function name, followed by parentheses containing one or more parameters. In this book, when referring to a function in the prose, we add parentheses after the name as a reminder that it is a function. Here, we say `println()`.

`println()` takes a single parameter, which is a `String`. You define a `String` by putting characters inside quotes.

`println()` moves the cursor to a new line after displaying its parameter, so subsequent output appears on the next line. You can use `print()` instead, which leaves the cursor on the same line.

Unlike some languages, you don’t need a semicolon at the end of an expression in Kotlin. It’s only necessary if you put more than one expression on a single line (this is discouraged).

For some examples in the book, we show the output at the end of the listing, inside a *multiline comment*. A multiline comment starts with a `/*` (a forward slash followed by an asterisk) and continues—including line breaks (which we call *newlines*)—until a `*/` (an asterisk followed by a forward slash) ends the comment:

```kotlin
/* A multiline comment
Doesn't care
about newlines */
```

It’s possible to add code on the same line *after* the closing `*/` of a comment, but it’s confusing, so people don’t usually do it.

Comments add information that isn’t obvious from reading the code. If comments only repeat what the code says, they become annoying and people start ignoring them. When code changes, programmers often forget to update comments, so it’s good practice to use comments judiciously, mainly for highlighting tricky aspects of your code.

***Exercises and solutions can be found at www.AtomicKotlin.com.***