let search_strings = ["pickle"];
let classes_to_censor = ["title", "md"];

$(document).ready(function() {
    censorContent(classes_to_censor);
});

function censorContent(classes) {
    for (let c of classes) {
        let results = document.getElementsByClassName(c);
        for (let result of results) {
            for (let search_string of search_strings) {
                if (
                    result.innerText.toLowerCase().indexOf(search_string) >= 0
                ) {
                    result.innerHTML = "Hurr durr blah blah blah";
                    break;
                }
            }
        }
    }
}
