module.exports = function reverse(n) {
    const x = Math.abs(n)
    return x.toString().split("").reverse().join("").valueOf();
}
