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

function functionTest() {
    var message = arguments[2]; //Custom error messages are not accepted
    var result;
    try {
        result = arguments[0](arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
    } catch (err) {
        message = err.message;
    }
    var name = arguments[1];
    var expect = arguments[arguments.length - 1]; //The last parameter is the default error message
    addItemToTheResult(result, expect, name, message);
}

//global function: run test cases of relavant component
//Method of calling: runComponentTestCase('GlobalMenu',obj);
function runComponentTestCase(componentName, obj) {
    if (typeof(FMTest[componentName]) == "function") {
        FMTest[componentName] = new FMTest[componentName]();
    }
    for (item in FMTest[componentName]) {
        if (typeof FMTest[componentName][item] === 'function') {
            FMTest[componentName][item](obj);
        }
    }
}
