
function testcalc(){
var val1= parseInt($("input[name='multiplier']:checked")[0].value);
var val2= parseInt($("#testinput")[0].value);
$('#testanswer').text(val1*val2);
}
