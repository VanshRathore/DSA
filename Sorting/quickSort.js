function quickSort(arr, low, high){
    if (low< high){
        const pivotIndex = partision(arr, low, high);
        quickSort(arr, low ,pivotIndex-1);
        quickSort(arr, pivotIndex+1, high);
    }
}

function partision(arr, low , high){
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low ; j <= high; j++){
        if (arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];

        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const array = [64, 34, 25, 12, 22, 11, 90];
quickSort(array, 0, array.length - 1);
console.log(array);