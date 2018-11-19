;
the project works with npm via internal npm reference
registry = http: //s-tfs1:8080/tfs/RD/_packaging/web-projects/npm/registry
    always - auth = true

function getFunctionName(name) {
    var tmp = name.callee.toString();
    var re = /function\s*(\w*)/i;
    // var re = /(?<=prototype\.)(.+?)(?=\=)/i;
    var matches = re.exec(tmp);
    return matches[1];
}