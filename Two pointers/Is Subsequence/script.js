const isSubsequence = (s, t) => {
    if (s.length > t.length) return false;
    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
      if (s[subsequence] === t[i]) {
        subsequence++;
      }
    };
    return subsequence === s.length;
};

// Алгоритм проверяет, является ли строка s подпоследовательностью строки t, т.е. можно ли получить s, удаляя некоторые (или ни одного) символы из t, не меняя порядок символов.

// Один указатель (i) проходит по строке t.

// Второй указатель (subsequence) проходит по строке s.

// Если символы совпадают — subsequence++.

// В конце проверяется: если subsequence === s.length, значит s полностью встретилась в t в нужном порядке.