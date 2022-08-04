let list11 = [1, 3, 2];
let list22 = [1, 5, 4];

list11.sort((a, b) => {
    return a - b;
})

list22.sort((a, b) => {
    return a - b;
})
var mergeTwoLists = function (list1, list2) {

    let list = [];
    for (let i = 0; i, i < list1.length; i++) {

        list.push(list1[i]);
        for (let j = i; j < list2.length; j++) {
            list.push(list2[j]);
            break;

        }
    }
    list.sort((a, b) => {
        return a - b;
    })
    return list;

};

let lists = mergeTwoLists(list11, list22)
console.log(lists)