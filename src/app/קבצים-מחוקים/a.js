function crLop(a, b, fun) {
    var arr = [];
    do { //  למה דווקא את זה
        arr.push(a);
        if (b) {
            if (a == b)
                break; //   מה יקרה אם נוריד את השורה הזאת
            if (a < b)
                a++;
            else
                a--;
        }
        else
            break;
    } while (a < 100000);
    if (fun) {
        lopF(arr, fun);
    }
    else {
        lopF(arr, print);
    }
}
function lopF(ar, f) {
    for (var i = 0; i < ar.length; i++) {
        f(ar[i]);
    }
}
function print(item) {
    console.log(item);
}
crLop(5);
crLop(5, 10);
crLop(10, 5);
// var aa=[1,2,3];
// console.log(typeof aa);
