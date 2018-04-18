/**
 * 
 * @param {Array<number>} A 
 */
function solution(A) {
    A = A.sort();
    for (let i = 0; i < A.length; i+=2) {
        if (A[i] != A[i + 1]) {
            return A[i]
        }
    }
}

console.log(solution([42, 32, 5, 7, 3, 3, 1, 32, 5, 7, 42]));