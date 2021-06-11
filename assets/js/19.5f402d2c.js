(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(e,a,n){"use strict";n.r(a);var t=n(44),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"var-val"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#var-val"}},[e._v("#")]),e._v(" "),n("code",[e._v("var")]),e._v(" & "),n("code",[e._v("val")])]),e._v(" "),n("blockquote",[n("p",[e._v("When an identifier holds data, you must decide whether it can be reassigned.")])]),e._v(" "),n("p",[e._v("You create "),n("em",[e._v("identifiers")]),e._v(" to refer to elements in your program. The most basic decision for a data identifier is whether it can change its contents during program execution, or if it can only be assigned once. This is controlled by two keywords:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("var")]),e._v(", short for "),n("em",[e._v("variable")]),e._v(", which means you can reassign its contents.")]),e._v(" "),n("li",[n("code",[e._v("val")]),e._v(", short for "),n("em",[e._v("value")]),e._v(", which means you can only initialize it; you cannot reassign it.")])]),e._v(" "),n("p",[e._v("You define a "),n("code",[e._v("var")]),e._v(" like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var identifier = initialization\n")])])]),n("p",[e._v("The "),n("code",[e._v("var")]),e._v(" keyword is followed by the identifier, an equals sign and then the initialization value. The identifier begins with a letter or an underscore, followed by letters, numbers and underscores. Upper and lower case are distinguished (so "),n("code",[e._v("thisvalue")]),e._v(" and "),n("code",[e._v("thisValue")]),e._v(" are different).")]),e._v(" "),n("p",[e._v("Here are some "),n("code",[e._v("var")]),e._v(" definitions:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// VarAndVal/Vars.kt\n\nfun main() {\n  var whole = 11              // [1]\n  var fractional = 1.4        // [2]\n  var words = "Twas Brillig"  // [3]\n  println(whole)\n  println(fractional)\n  println(words)\n}\n/* Output:\n11\n1.4\nTwas Brillig\n*/\n')])])]),n("p",[e._v("In this book we mark lines with commented numbers in square brackets so we can refer to them in the text like this:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" Create a "),n("code",[e._v("var")]),e._v(" named "),n("code",[e._v("whole")]),e._v(" and store "),n("code",[e._v("11")]),e._v(" in it.")]),e._v(" "),n("li",[n("strong",[e._v("[2]")]),e._v(" Store the “fractional number” "),n("code",[e._v("1.4")]),e._v(" in the "),n("code",[e._v("var fractional")]),e._v(".")]),e._v(" "),n("li",[n("strong",[e._v("[3]")]),e._v(" Store some text (a "),n("code",[e._v("String")]),e._v(") in the "),n("code",[e._v("var words")]),e._v(".")])]),e._v(" "),n("p",[e._v("Note that "),n("code",[e._v("println()")]),e._v(" can take any single value as an argument.")]),e._v(" "),n("p",[e._v("As the name "),n("em",[e._v("variable")]),e._v(" implies, a "),n("code",[e._v("var")]),e._v(" can vary. That is, you can change the data stored in a "),n("code",[e._v("var")]),e._v(". We say that a "),n("code",[e._v("var")]),e._v(" is "),n("em",[e._v("mutable")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// VarAndVal/AVarIsMutable.kt\n\nfun main() {\n  var sum = 1\n  sum = sum + 2\n  sum += 3\n  println(sum)\n}\n/* Output:\n6\n*/\n")])])]),n("p",[e._v("The assignment "),n("code",[e._v("sum = sum + 2")]),e._v(" takes the current value of "),n("code",[e._v("sum")]),e._v(", adds two, and assigns the result back into "),n("code",[e._v("sum")]),e._v(".")]),e._v(" "),n("p",[e._v("The assignment "),n("code",[e._v("sum += 3")]),e._v(" means the same as "),n("code",[e._v("sum = sum + 3")]),e._v(". The "),n("code",[e._v("+=")]),e._v(" operator takes the previous value stored in "),n("code",[e._v("sum")]),e._v(" and increases it by "),n("code",[e._v("3")]),e._v(", then assigns that new result back to "),n("code",[e._v("sum")]),e._v(".")]),e._v(" "),n("p",[e._v("Changing the value stored in a "),n("code",[e._v("var")]),e._v(" is a useful way to express changes. However, when the complexity of a program increases, your code is clearer, safer and easier to understand if the values represented by your identifiers cannot change—that is, they cannot be reassigned. We specify an unchanging identifier using the "),n("code",[e._v("val")]),e._v(" keyword instead of "),n("code",[e._v("var")]),e._v(". A "),n("code",[e._v("val")]),e._v(" can only be assigned once, when it is created:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("val identifier = initialization\n")])])]),n("p",[e._v("The "),n("code",[e._v("val")]),e._v(" keyword comes from "),n("em",[e._v("value")]),e._v(", indicating something that cannot change—it is "),n("em",[e._v("immutable")]),e._v(". Choose "),n("code",[e._v("val")]),e._v(" instead of "),n("code",[e._v("var")]),e._v(" whenever possible. The "),n("code",[e._v("Vars.kt")]),e._v(" example at the beginning of this atom can be rewritten using "),n("code",[e._v("val")]),e._v("s:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// VarAndVal/Vals.kt\n\nfun main() {\n  val whole = 11\n  // whole = 15 // Error   // [1]\n  val fractional = 1.4\n  val words = "Twas Brillig"\n  println(whole)\n  println(fractional)\n  println(words)\n}\n/* Output:\n11\n1.4\nTwas Brillig\n*/\n')])])]),n("ul",[n("li",[n("strong",[e._v("[1]")]),e._v(" Once you initialize a "),n("code",[e._v("val")]),e._v(", you can’t reassign it. If we try to reassign "),n("code",[e._v("whole")]),e._v(" to a different number, Kotlin complains, saying “Val cannot be reassigned.”")])]),e._v(" "),n("p",[e._v("Choosing descriptive names for your identifiers makes your code easier to understand and often reduces the need for comments. In "),n("code",[e._v("Vals.kt")]),e._v(", you have no idea what "),n("code",[e._v("whole")]),e._v(" represents. If your program is storing the number 11 to represent the time of day when you get coffee, it’s more obvious to others if you name it "),n("code",[e._v("coffeetime")]),e._v(" and easier to read if it’s "),n("code",[e._v("coffeeTime")]),e._v(" (following Kotlin style, we make the first letter lowercase).")]),e._v(" "),n("ul",[n("li",[e._v("-")])]),e._v(" "),n("p",[n("code",[e._v("var")]),e._v("s are useful when data must change as the program is running. This sounds like a common requirement, but turns out to be avoidable in practice. In general, your programs are easier to extend and maintain if you use "),n("code",[e._v("val")]),e._v("s. However, on rare occasions it’s too complex to solve a problem using only "),n("code",[e._v("val")]),e._v("s. For that reason, Kotlin gives you the flexibility of "),n("code",[e._v("var")]),e._v("s. However, as you spend more time with "),n("code",[e._v("val")]),e._v("s you’ll discover that you almost never need "),n("code",[e._v("var")]),e._v("s and that your programs are safer and more reliable without them.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Exercises and solutions can be found at www.AtomicKotlin.com.")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);