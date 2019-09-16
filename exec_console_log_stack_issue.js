console.log('i am from the top line -- just for debugging -- need to be ignore in final stdout');

function sum(x, y) {
	return x + y;
}
const result = sum(20, 30)
console.log(result);


/**
 * final output should be send as stringify
 * so i can distinguish that i have to ignore this stdout or have to parse the
 * data
 */

const output = {
	message: 'success',
	json: true,
	data: {
		result: result
	}
}

console.log(JSON.stringify(output))



//as final output it should print 50
//but it always print
/**
 *
 * `i am from the top line -- just for debugging -- need to be ignore in final stdout
 * 50
 * `
 */


