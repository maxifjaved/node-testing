# node-issues debugging

```
main file: index.js
script path : exec_console_log_stack_issue.js

========================================

console.log('i am from the top line -- just for debugging -- need to be ignore in final stdout');

function sum(x, y) {
	return x + y;
}
console.log(sum(20, 30));

//as final output it should print 50
//but it always print
/**
 *
 * `i am from the top line -- just for debugging -- need to be ignore in final stdout
 * 50
 * `
 */
 
 ```
