//Function will perform the Bubble Sort

function Bubble_Sort() {

    var i, temp, j;
    disable_btn();
    for (i = 0; i < a_size-1; i++) {

        for (j = 0; j < a_size - i; j++) {
            change_color(divs[j], div_size[j], "#38ff13");


            if (div_size[j] > div_size[j + 1]) {
                change_color(divs[j], div_size[j], "");
                change_color(divs[j + 1], div_size[j + 1], "red");

                temp = div_size[j];
                div_size[j] = div_size[j + 1];
                div_size[j + 1] = temp;


                change_color(divs[j], div_size[j], "red");
                change_color(divs[j + 1], div_size[j + 1], "red");
            }

            change_color(divs[j], div_size[j], "#4870FF");
        }
        change_color(divs[j], div_size[j], "#09e37a");

    }
    change_color(divs[0], div_size[0], "#09e37a");
   
    remove_class(algo_btn_arr[1]);
}
