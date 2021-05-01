function Quick_Sort() {
    delay = 0;
disable_btn();
    quick(0, a_size - 1);

    enable_btn();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_size[start];
    change_color(divs[start], div_size[start], "#E8FF13");//Color update

    for (var j = start + 1; j <= end; j++) {

        if (div_size[j] < piv) {
            change_color(divs[j], div_size[j], "#e8ff13");//Color update

            change_color(divs[i], div_size[i], "red");//Color update
            change_color(divs[j], div_size[j], "red");//Color update

            var temp = div_size[i];
            div_size[i] = div_size[j];
            div_size[j] = temp;

            change_color(divs[i], div_size[i], "red");//Height update
            change_color(divs[j], div_size[j], "red");//Height update

            change_color(divs[i], div_size[i], "#4870FF");//Height update
            change_color(divs[j], div_size[j], "#4870FF");//Height update

            i += 1;
        }
    }
    change_color(divs[start], div_size[start], "red");//Color update
    change_color(divs[i - 1], div_size[i - 1], "red");//Color update

    var temp = div_size[start];
    div_size[start] = div_size[i - 1];
    div_size[i - 1] = temp;

    change_color(divs[start], div_size[start], "red");//Height update
    change_color(divs[i - 1], div_size[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        change_color(divs[t], div_size[t], "#09e37a");//Color update
    }


    return i - 1;
}
function quick(start, end) {
    if (start < end) {

        var piv_pos = quick_partition(start, end);
        quick(start, piv_pos - 1);
        quick(piv_pos + 1, end);
    }
}