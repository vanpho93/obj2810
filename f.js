console.log(Math.random());
console.log(Math.round(1.6));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));

function getRandom() {
    const r = Math.random() * 100;
    return Math.floor(r);
}

for(let i = 0; i < 100; i++) console.log(getRandom());

function veHinh1(n) {
    for(let i = 0; i < n; i++) {
        let s = '';
        for(let j = 0; j <= i; j++) {
            s += '*';
        }
        console.log(s);
    }
}

function veHinh1(n) {
    for(let s = '*'; s.length <= n; s += '*') console.log(s);
}

/*

*
**
***
****

*/