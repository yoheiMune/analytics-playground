/*

A/Bテストを行った結果が以下の場合に、有意が存在すると言えるのか？

◆結果
バリエーション | 訪問数 | コンバージョン率
--------------------------------------
A            | 1000  | 20%
B            | 1000  | 22.5%


これは下記のように言い換えて検証できる。
----------
表が出る確率が20%のコインを1000回投げて、表が出た数が225回（= 1000 * 22.5%）の確率が5%以下であるか
----------

以下プログラムの結果、p値=0.02〜0.03なので、バリエーションAの状態で、バリエーションBのコンバーションを出すことは不可能。
→つまり本A/Bテストでは、Bが良いということがわかる。

*/

var RAITO = 0.2;
var TIMES = 1000;
var BORDER = TIMES * 0.225;
var acheiveCount = 0;

for (var i = 0; i < TIMES; i++) {
    var amount = 0;
    for (var jj = 0; jj < TIMES; jj++) {
        var hit = Math.random();
        if (hit <= 0.2) {
            amount++;
        }
    }
    if (amount >= BORDER) {
        acheiveCount++;
    }
}

console.log('acheiveCount: ' + acheiveCount);
console.log('raito: ' + Math.floor(acheiveCount * 100000 / TIMES) / 1000 + '%');
