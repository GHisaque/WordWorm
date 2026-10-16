import dict from "./dictionary.json" with { type: "json" };

const sw = document.getElementById("startsWith");
const ew = document.getElementById("endsWith");
const inot = document.getElementById("isNot");
const len = document.getElementById("length");
const out = document.getElementById("output");

function list_to_clean_newlined_string(list) {
    let str = "";
    list.forEach((value, id) => {
        if (id < list.length) str += value + "<br>";
        else str += value;
    });
    return str;
}

function get_words_that_are_not() {
    return inot.value.split(",").map(e => e.trim().toLowerCase());
}

let timeout = null;

function findNewList() {
    const oldL = dict;
    let newL = [];

    oldL.forEach(e => {
        if ((len.value === "" || e.length === parseInt(len.value)) && (sw.value === "" || e.startsWith(sw.value)) && (ew.value === "" || e.endsWith(ew.value)) && (inot.value === "" || !get_words_that_are_not().includes(e))) {
            newL.push(e);
        }
    });
    
    return newL;
}

function updateOutput() {
    let list = findNewList();
    out.innerHTML = list_to_clean_newlined_string(list);
}

sw.addEventListener("keyup", updateOutput);
len.addEventListener("keyup", updateOutput);
ew.addEventListener("keyup", updateOutput);
inot.addEventListener("keyup", updateOutput);