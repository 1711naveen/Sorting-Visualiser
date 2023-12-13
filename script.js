const n = 20;
const array = [];
init();

function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function bubbleSort(arr) {
    const moves = [];
    let len = arr.length;
    let isSwapped = false;
    for (let i = 0; i < len; i++) {
        isSwapped = false;

        for (let j = 0; j < (len - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                moves.push([j, j + 1]);
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return moves;
}

function sort() {
    const copy = [...array]
    const moves = bubbleSort(copy);
    animate(moves);
}

function stop() {
    alert('Code execution stopped!');
    return;
}

function animate(moves) {
    if (moves.length == 0) {
        showBars();
        return;
    }
    const move = moves.shift();
    const i = move[0];
    const j = move[1];
    [array[i], array[j]] = [array[j], array[i]];
    showBars(move);
    setTimeout(function () {
        animate(moves);
    }, 200);
}

function showBars(move) {
    barGraph.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement('div');
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar");
        if (move && move.includes(i)) {
            bar.style.backgroundColor = "red";
        }
        barGraph.appendChild(bar);
    }
}

// Insertion Sort
//Time Complexity -O(n^2)

function insertionSort(arr) {
    const n = arr.length;
    let key, j;
    for (let i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

//Selection Sort
//Time Complexity -O(n^2)

function selectionSort(arr, n) {
    let min_idx;
    for (let i = 0; i < n - 1; i++) {
        min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}































console.log(array);