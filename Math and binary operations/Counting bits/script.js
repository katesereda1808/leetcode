var countBits = function(n) {
    const ans = [];
    for(let i = 0; i <= n; i++) {
        const binary = i.toString(2); // перевод в бинарную строку
        const ones = binary.split('').filter(num => num === '1').length; // подсчет единиц
        ans.push(ones);
    }
    return ans;
};