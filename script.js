const n = 20;
const array = [];
const array_for_selection = [];
init();
init_for_selection();

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
        if (isSwapped == false) {
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
        bar.classList.add("barForBubble");
        if (move && move.includes(i)) {
            bar.style.backgroundColor = "red";
        }
        barGraph.appendChild(bar);
    }
}




//Selection Sort
//Time Complexity -O(n^2)

function init_for_selection() {
    for (let i = 0; i < n; i++) {
        array_for_selection[i] = Math.random();
    }
    showBars_for_selection();
}

function sort_by_selection() {
    const copy_for_selection = [...array_for_selection]
    const moves_for_selection = selectionSort(copy_for_selection);
    animate_for_selection(moves_for_selection);
}

function animate_for_selection(moves_for_selection) {
    if (moves_for_selection.length == 0) {
        showBars_for_selection();
        return;
    }
    const SelectionMove = moves_for_selection.shift();
    const k = SelectionMove[0];
    const l = SelectionMove[1];
    [array_for_selection[k], array_for_selection[l]] = [array_for_selection[l], array_for_selection[k]];
    showBars_for_selection(SelectionMove);
    setTimeout(function () {
        animate_for_selection(moves_for_selection);
    }, 200);
}

function showBars_for_selection(SelectionMove) {
    selection.innerHTML = "";
    for (let i = 0; i < array_for_selection.length; i++) {
        const bar1 = document.createElement('div');
        bar1.style.height = array_for_selection[i] * 100 + "%";
        bar1.classList.add("barForSelection");
        if (SelectionMove && SelectionMove.includes(i)) {
            bar1.style.backgroundColor = "red";
        }
        selection.appendChild(bar1);
    }
}

function selectionSort(arr1) {
    const moves = [];
    const n = arr1.length;
    let min_idx;
    for (let i = 0; i < n - 1; i++) {
        min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr1[j] < arr1[min_idx])
                min_idx = j;
        }
        moves.push([i, min_idx]);
        let temp = arr1[min_idx];
        arr1[min_idx] = arr1[i];
        arr1[i] = temp;
    }
    return moves;
}




































// Insertion Sort
//Time Complexity -O(n^2)

function insertionSort(arr) {
    const n = arr.length;
    let key, j;
    for (let i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}





















console.log(array);