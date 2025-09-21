"use strict";
function random(list) {
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
if (!$("#random_start"))
    throw new Error("找不到開始按鈕");
if (!$("#randomtext"))
    throw new Error("找不到h1元素");
var h1el = $("#randomtext");
$("#random_start").on("click", function () {
    const val = $("#random_list").val();
    if (typeof val !== "string") {
        throw new Error("random_list.val 不是字串");
    }
    const list = val; // ✅ 現在 TS 知道這是字串了
    h1el.text(random(list.split(",")));
});
//# sourceMappingURL=random.js.map