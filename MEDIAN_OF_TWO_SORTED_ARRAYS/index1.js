// median

const num11 = [5,4]
const num22 = [2, 3];;
var findMedianSortedArrays = function (nums1, nums2) {
    let array = [];

    nums1.forEach((a) => {
        array.push(a);
    })
    nums2.forEach((a) => {
        array.push(a);
    })
    array.sort((a,b)=>{
        return a-b;
    })
    let n = array.length;
    let median
    if (array.length === 1) {

        median = array[0];
    } else if (array.length % 2 !== 0) {
        median = (n + 1) / 2

    } else {
        let nums11 = nums1[nums1.length - 1];
        let nums22 = nums2[nums2.length - nums2.length]
        if (nums1.length === 0) {
            median = (nums2[0] + nums2[1]) / 2
        } else if (nums2.length === 0) {
            median = (nums1[0] + nums1[1]) / 2

        } else {
            median = (nums11 + nums22) / 2

        }

    }
    if (median < 0) {
        median = -(median) - 0.5

    }
    console.log(array)
    return median
};

const median = findMedianSortedArrays(num11, num22);
console.log(median)