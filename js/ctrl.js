keypair = {
    81:"#c4",
    50:"#cs4",
    87:"#d4",
    51:"#ds4",
    69:"#e4",
    82:"#f4",
    53:"#fs4",
    84:"#g4",
    54:"#gs4",
    89:"#a4",
    55:"#as4",
    85:"#b4",
    73:"#c5",
    57:"#cs5",
    79:"#d5",
    48:"#ds5",
    80:"#e5",
    219:"#f5",
    187:"#fs5",
    221:"#g5",
 
    90:"#c2",
    83:"#cs2",
    88:"#d2",
    68:"#ds2",
    67:"#e2",
    86:"#f2",
    71:"#fs2",
    66:"#g2",
    72:"#gs2",
    78:"#a2",
    74:"#as2",
    77:"#b2",
    188:"#c3",
    76:"#cs3",
    190:"#d3",
    186:"#ds3",
    191:"#e3"
}
$("html").keydown(function(event) {
    
    $(keypair[event.which]).addClass("pressed");
    console.log("as");
});
$("html").keyup(function(event) {
    $(keypair[event.which]).removeClass("pressed");
    console.log("as");
});
