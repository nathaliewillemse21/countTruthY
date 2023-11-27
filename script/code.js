let form = document.getElementById("truthyForm");

form.addEventListener("input", function() {
    countTruthyValues();
});

function countTruthyValues() {
 let input1 = document.getElementById("input1").value;
 let input2 = document.getElementById("input2").value;
 let input3 = document.getElementById("input3").value;

    
    let truthyCount = [input1, input2, input3].filter(Boolean).length;

    document.getElementById("truthyCount").innerHTML = "Number of Truthy Values: " + truthyCount;
}