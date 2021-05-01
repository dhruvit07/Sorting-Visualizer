function Merge_Sort() {
    delay = 0;

    merge_partition(0, a_size - 1);

    enable_btn();
    remove_class(algo_btn_arr[4]);
}

function merge(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_size[q++];
            change_color(divs[q - 1], div_size[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = div_size[p++];
            change_color(divs[p - 1], div_size[p - 1], "red");//Color update
        }
        else if (div_size[p] < div_size[q]) {
            Arr[k++] = div_size[p++];
            change_color(divs[p - 1], div_size[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = div_size[q++];
            change_color(divs[q - 1], div_size[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        div_size[start++] = Arr[t];
        change_color(divs[start - 1], div_size[start - 1], "#09E37A");//Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        change_color(divs[mid], div_size[mid], "#E8FF13");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge(start, mid, end);

    }
}