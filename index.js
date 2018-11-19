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

function addItemToTheResult(result, expect, name, message) {
    //If no message is passed, make the name as the default message
    var description;
    if (message) {
        description = message;
    } else {
        description = name;
    }

    //append test results to the page
    var item = document.createElement("li");
    item.setAttribute('data-result', result);
    item.setAttribute("data-functionName", name);
    item.setAttribute("data-expect", expect);
    item.setAttribute("data-message", description);

    //set the style of the results
    if (result == expect || diffObject(result, expect)) {
        item.setAttribute('class', "success");
    } else {
        item.setAttribute('class', "fail");
    }
    var str = "CaseName : " + name + " ; description : " + description + " ; result : " + result + " ; expect : " + expect;

    //to show the meassage in html
    item.innerHTML = "<p>" + str + "</p>";
    $(".resultItem")[0].appendChild(item);
}
