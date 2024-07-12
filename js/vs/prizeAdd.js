// -- 獎金跳動 -- //
let ar0 = 1023183.2; //原本金額
let ar = 1033200.55; //新金額
anime({
    targets: ".bonus",
    innerHTML: [ar0, ar],
    easing: 'steps(35)',
    duration: 2500,
    round: 20,
});

let pz0 = 600; //原本金額
let pz1 = 26601.66; //新金額
anime({
    targets: ".teamA h1",
    innerHTML: [pz0, pz1],
    easing: "steps(35)",
    duration: 2000,
    round: 20,
});
let aw0 = 1200.22; //原本金額
let aw1 = 1208.66; //新金額
anime({
    targets: ".teamB h1",
    innerHTML: [aw0, aw1],
    easing: "steps(35)",
    duration: 2000,
    round: 20,
});