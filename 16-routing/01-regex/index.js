// Regular Expressions

// JavaScript, like many languages, has built-in support for regular expressions
// (regexes). They are powerful and popular, but also error-prone, being so
// terse. Their syntax and some character semantics differ slightly based on
// platform; we’ll focus on regexes as they appear in JavaScript. They are
// useful for many things - especially validation of front-end input and
// routing.

// To make a JavaScript regex, you surround it with slashes (//) instead of
// quotes (""):
const example = /a regex/;

// In JavaScript, you then can use regexes with match.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
const st = 'this is a test';
const result1 = st.match(/this/);
console.log(result1);
// → [ 'this', index: 0, input: 'this is a test', groups: undefined ]
const result2 = st.match(/is/);
console.log(result2);
// → [ 'is', index: 2, input: 'this is a test', groups: undefined ]

// If you want to match ALL occurrences, use matchAll together with the g
// ("global") suffix after the slashes - this returns an iterator.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
const result3 = st.matchAll(/is/g);
console.log(result3);

// You can iterate over the results of matchAll with a for...of loop.
for (const match of result3) {
  console.log(match);
}
// Or, use the spread operator to get the matches in a list:
const result4 = st.matchAll(/is/g);
console.log([...result4]);

// match a range of characters with []
st.match(/i[ns]/); // finds an i followed by either an n or an s

// you can also have a range of characters with -, which is often useful:
st.match(/[a-zA-Z]/); // finds an alpha character, lower or upper case
st.match(/[a-z]/); // finds an alpha character, lower case only
st.match(/[0-9]/); // finds a number

// a number of repetitions with {}:
st.match(/[0-9]{8}/); // matches a SPIRE ID (8 digits)
st.match(/[0-9]{8,10}/); // matches between 8 and 10 digits

// match arbitrary characters with "."
st.match(/t.i/); // finds any match with a t, then one char, then an i

// match any number of repetitions with * (0 or more)
//   '*' goes after the thing you want repeated 0 or more
st.match(/t.*s/); // finds max matching starting with t and ending with an s
// 'ts' is a match, so is 'tss', 'tas', 'tabcs', etc.

// match one or more repetitions with + (1 or more)
//   '+' goes after the thing you want repeated 1 time or more
st.match(/t.+s/); // finds max matching starting with t and ending with an s
// 'ts' is NOT a match, but 'tss', 'tas', 'tabcs', etc. are.

// match zero or one repetitions with ? (0 or 1)
//   '?' goes after the thing you want repeated 0 or 1 times
st.match(/t.?s/); // finds max matching starting with t and ending with an s
// 'ts' is a match, so is 'tas', 'tbs', etc. NOT 'tsss'

// match the start and end with ^ (start) and $ (end)
st.match(/^this/); // only matches this if it is at the start
st.match(/test$/); // only matches test if it is at the end
st.match(/^h..p$/); // only matches a string that is just help or hoop

// Another thing: escaping with \
// if you want to match a character that is part of regex syntax
// (like . * ? / [ ), you have to put a \ before it
st.match(/\.\./); // matches two dots (not two arbitrary characters!)
// foo ← NO
// foo.oo. ← NO
// f..o..o ← YES

// Last thing: matching this OR that
// If you want to match either of two things, you can use the pipe character
// (|) to separate them.
st.match(/th.*|.*is/); // finds anthing starting with th or ending with st

const n = '1000';
console.log(n.match(/^([1-9][0-9]{0,2}|1000)$/));
