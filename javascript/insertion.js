function Insertion_Sort() {
    delay = 0;

    for (var j = 0; j <= a_size; j++) {
        change_color(divs[j], div_size[j], "#E8FF13");//Color update

        var key = div_size[j];
        var i = j - 1;
        while (i >= 0 && div_size[i] > key) {
            change_color(divs[i], div_size[i], "red");//Color update
            change_color(divs[i + 1], div_size[i + 1], "red");//Color update

            div_size[i + 1] = div_size[i];

            change_color(divs[i], div_size[i], "red");//Height update
            change_color(divs[i + 1], div_size[i + 1], "red");//Height update

            change_color(divs[i], div_size[i], "turquoise");//Color update
            if (i == (j - 1)) {
                change_color(divs[i + 1], div_size[i + 1], "#E8FF13");//Color update
            }
            else {
                change_color(divs[i + 1], div_size[i + 1], "#E8FF13");//Color update
            }
            i -= 1;
        }
        div_size[i + 1] = key;

        for (var t = 0; t < j; t++) {
            change_color(divs[t], div_size[t], "#09E37A");//Color update
        }
    }
    change_color(divs[j - 1], div_size[j - 1], "#09E37A");//Color update

    enable_btn();
    remove_class(algo_btn_arr[3]);
}
