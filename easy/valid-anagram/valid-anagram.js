/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// оптимальное решение
// короткое и легкое
// время O(n log n)
// память O(n)

var isAnagram1 = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};

// решение без сортировки
// замороченное
// время O(n²)
// память O(n²)
// Если очень длинные строки (t.length = 100000), и ты делаешь много slice, то:
// создаётся много копий строки,
// они все разной длины,
// и висят в памяти какое-то время.
// ❗ Строки в JavaScript — иммутабельны: ты не можешь "удалить символ" — можно только создать новую без него.
// Поэтому в цикле с slice ты создаёшь много копий, и они висят в памяти, пока GC не уберёт их. Отсюда — неэффективность по памяти.

// супернеэффективный, пригодится если запрещена сортировка

 var isAnagram2 = function(s, t) {
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let indexInT = t.indexOf(char);

        if (indexInT >= 0) {
            t = t.slice(0, indexInT) + t.slice(indexInT + 1);
        } else {
            return false;
        }
    }
    return true;
};
