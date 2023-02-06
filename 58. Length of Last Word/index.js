var lengthOfLastWord = function(s) {
    s = s.replace(/\s+/g," ").trim().split(" ");
    s = s[s.length-1];
    return s.length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))