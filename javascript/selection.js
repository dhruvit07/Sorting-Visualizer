function Selection_Sort() {
    delay = 0;
    disable_btn();

    for (var i = 0; i <= a_size; i++) {
        change_color(divs[i], div_size[i], "red");//Color update

        index_min = i;

        for (var j = i + 1; j <= a_size; j++) {
            change_color(divs[j], div_size[j], "#E8FF13");//Color update

            if (div_size[j] < div_size[index_min]) {
                if (index_min != i) {
                    change_color(divs[index_min], div_size[index_min], "#4870FF");//Color update
                }
                index_min = j;
                change_color(divs[index_min], div_size[index_min], "red");//Color update
            }
            else {
                change_color(divs[j], div_size[j], "#4870FF");//Color update
            }
        }

        if (index_min != i) {
            var temp = div_size[index_min];
            div_size[index_min] = div_size[i];
            div_size[i] = temp;

            change_color(divs[index_min], div_size[index_min], "red");//Height update
            change_color(divs[i], div_size[i], "red");//Height update
            change_color(divs[index_min], div_size[index_min], "#4870FF");//Color update
        }
        change_color(divs[i], div_size[i], "#09e37a");//Color update
    }
    change_color(divs[i], div_size[i], "#09e37a");//Color update

    enable_btn();
    remove_class(algo_btn_arr[2]);

}