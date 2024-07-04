function formatNumber(e) {
    // format number 1000000 to 1,234,567
    return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function formatCurrency(input, blur) {
    var input_val = input.toString();
    console.log(typeof input_val);
    // don't validate empty input
    if (input_val === "") {
        return;
    }
    // original length
    var original_len = input_val.length;
    // initial caret position
    // var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {
        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = left_side + "." + right_side; //---可加$
    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = input_val; //---可加$

        // final formatting
        // if (blur === "blur") {
        //   input_val += ".00";
        // }
    }
    input = input_val;
    return input;
}
let ar0 = 1003183.99; //原本金額
let ar = 1003283.99; //新金額
anime({
    targets: ".bonus",
    innerHTML: [ar0, ar],
    easing: "linear",
    duration: 1000,
    round: 1000,
    complete: function () {
        // let fn = formatCurrency(ar, "blur");
        // document.querySelector(".bonus").innerHTML = fn;
    },
});
anime({
    targets: ".bonus",
    innerHTML: [ar0, ar],
    easing: "linear",
    duration: 1000,
    round: 1000,
});
let pz0 = 1000000; //原本金額
let pz1 = 1000600; //新金額
anime({
    targets: ".crazy-time .award",
    innerHTML: [pz0, pz1],
    easing: "linear",
    duration: 1000,
    round: 1000,
});
let aw0 = 1200000; //原本金額
let aw1 = 1208600; //新金額
anime({
    targets: ".jackpot .award",
    innerHTML: [aw0, aw1],
    easing: "linear",
    duration: 1000,
    round: 1000,
});