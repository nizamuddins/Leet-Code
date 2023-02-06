var reverseWords = function(s) {
    s = s.split(" ").reverse().join(" ").replace(/\s+/g, ' ').trim();
    return s
};