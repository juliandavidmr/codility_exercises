function solution(N) {
    n = Number(N);
    n = (n >>> 0).toString(2);

    var re = /0+/g, match, max = 0;
    
    do {
        match = re.exec(n);
        if (match && match[0].length > max) {
            max = match[0].length;
        }
    } while (match);
    return max;
}

console.log(solution(1610612737))