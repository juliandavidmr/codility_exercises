/**
 * @param {Array<number>} A
 */
function solution(A) {
	let min = Number.MAX_SAFE_INTEGER,
		left = 0,
		end, res;
	const sum = (vec) => vec.reduce((a, b) => a + b, 0);
	const total = sum(A);
	for (let index = 0; index < A.length; index++) {
		left += A[index];
		res = Math.abs(left - (total - left));
		if (res < min) {
			min = res;
		}
	}
	return min;
}

console.log(solution([3, 1, 2, 4, 3]))