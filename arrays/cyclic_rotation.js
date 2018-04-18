/**
 * 
 * @param {Array<number>} A 
 * @param {number} K 
 */
function solution(A, K) {
    if (Array.isArray(A) && (K == 0 || A.length === 0)) {
        return A;
    }
    A.unshift(A.pop());
    return solution(A, K - 1);
}

console.log(solution([], 3));