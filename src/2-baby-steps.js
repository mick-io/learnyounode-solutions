const sum = process.argv.slice(2).reduce((acc, n) => acc + parseInt(n), 0);
console.log(sum);
