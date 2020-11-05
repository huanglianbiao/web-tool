// nearleyc grammer.ne -o grammer.js

const { Parser, Grammar } = require("nearley");
const grammar = require("./grammer");

const parser = new Parser(Grammar.fromCompiled(grammar));

parser.feed("bar\n");

console.log(JSON.stringify(parser.results));
