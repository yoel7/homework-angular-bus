function crLop(a, b, fun) {
    var arr = []
    do {                  //  למה דווקא את זה
        arr.push(a)
        if (b) {
            if (a==b) break  //   מה יקרה אם נוריד את השורה הזאת
            if (a < b)  a++
            else a-- 
        } else break
    } while (a< 100000)
    if (fun) {
        lopF(arr, fun);console.log(`ש 10`);
    } else {
        lopF(arr, print);console.log(`ש 12`);
    }
}
function lopF(ar, f) {
    for (let i = 0; i < ar.length; i++) {
        f(ar[i]);
    }
}
function print(item) {
    console.log(item);
}
crLop(5)
