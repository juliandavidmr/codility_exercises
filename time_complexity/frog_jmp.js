/**
 * 
 * @param {number} X Distancia actual
 * @param {number} Y Destino
 * @param {number} D Saltos
 */
function solution(X, Y, D) {
	let distance = Y - X;
	let breaks = parseInt(distance / D);
	
	if (distance % D != 0) {
		breaks++;
	}

	return breaks;
}

console.log(solution(10, 85, 30))