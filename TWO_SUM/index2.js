let arr = [2, 3, 1, 5, 4];
let jersy = [1, 2, 3, 4, 5];
let val1 = 0;
let flag = 0;
for (let i = 0; i < arr.length + 2; i++) {
    if (arr[i] !== jersy[i]) {
        let func = myfunc(arr, jersy)
        console.log(func);
        flag = 1;
        break;
    }

}
if (flag === 0) {
    val1++;
    console.log(val1)
}

function myfunc(array, jersey) {

    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j < jersey.length; j++) {

            if (jersey[j] === array[i]) {
                let next = jersey[i];
                jersey[i] = jersey[j];
                jersey[j] = next;
                val1++;
                break;
            }
        }
        if (i === array.length) {
            jersey.sort((a, b) => {
                return a - b;
            })
            val1++;
        }
    }

    return val1;
}
console.log(jersy)