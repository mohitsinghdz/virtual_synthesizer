
audioCtx = new(window.AudioContext || window.webkitAudioContext)();

show();

function show() {
  
  switch (document.getElementById("tIn").value * 1) {
    case 0: type = 'sine'; break;
    case 1: type = 'square'; break;
    case 2: type = 'sawtooth'; break;
    case 3: type = 'triangle'; break;
  }
  document.getElementById("tOut").innerHTML = type;

  volume = document.getElementById("vIn").value / 100;
  document.getElementById("vOut").innerHTML = volume;

  duration = document.getElementById("dIn").value;
  document.getElementById("dOut").innerHTML = duration + ' ms';
}

/*function beep(freq) {
    freq=100;
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = freq;
  oscillator.type = type;

  //oscillator.start();

  //setTimeout(
  //  function() {
  //    oscillator.stop();
  //  },
  //  duration
  //);
//};
//*/

var ac = new AudioContext();
var osc1 = ac.createOscillator();
var osc2 = audioCtx.createOscillator();
var osc3 = ac.createOscillator();
var osc4 = ac.createOscillator();
var osc5 = ac.createOscillator();
var osc6 = ac.createOscillator();
var gainNode = ac.createGain();
/*scale={
   81:
   50:
   87:
   51:
   69:
   82:
   53:
   84:
   54:
   89:
   55:
   85:
   73:
   57:
   79:
   48:
   80:

   90:
   83:
   88:
   68:
   67:
   86:
   71:
   66:
   72:
   78:
   74:
   77:
   44:
   76:
   46:
   59:
   47:

}*/
//console.log(scale[45]);
/*arr1=[0,0,0,0,0,0]
osc1.type = type;
osc2.type = type;
osc3.type = type;
osc4.type = type;
osc5.type = type;
osc6.type = type;
*/
gainNode.gain.value = 0;
dur=50; //gain offset
osc1.connect(gainNode);
osc2.connect(gainNode);
osc3.connect(gainNode);
osc4.connect(gainNode);
osc5.connect(gainNode);
osc6.connect(gainNode);
//gainNode.connect(ac.destination);

function playNote(freq)
{   if(arr1[0]==0)
    {
        arr1[0]=1;
	osc1.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime,0.2);
    setTimeout(
    function() {
      arr1[0]=0;
    },
    dur
  );
    }
    if(arr1[1]==0)
    {
        arr1[1]=1;
	osc2.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
     setTimeout(
    function() {
      arr1[1]=0;
    },
    dur
  );
    }
    if(arr1[2]==0)
    {
        arr1[2]=1;
	osc3.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
     setTimeout(
    function() {
      arr1[2]=0;
    },
    dur
  );
    }
    if(arr1[3]==0)
    {
        arr1[3]=1;
	osc4.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
    }
    if(arr1[4]==0)
    {
        arr1[4]=1;
	osc5.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
    }
    if(arr1[5]==0)
    {
        arr1[5]=1;
	osc6.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
    }

}
/*window.addEventListener("keydown",function(event){
 if(event.keyCode=='90')
 {  //console.log(event);
   beep(60);
   
   //alert("yo");
    
	//gainNode.gain.value = 1
	//gainNode.gain.setTargetAtTime(0, ac.currentTime,0.2);
 }

  if(event.keyCode=='89')
 {  beep(200);
    //osc2.frequency.setValueAtTime(freq, ac.currentTime);

	//gainNode.gain.value = 1
	//gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
 }

 if(event.keyCode=='88')
    { 
                beep(300);
    }  
 
},true);*/

osc1.start();

window.addEventListener("keydown",function(event){
 
 osc1.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = 1
},true);

window.addEventListener("keyup",function(event){
 
 gainNode.gain.setTargetAtTime(0, ac.currentTime, 0.2);
 
},true);

/*window.onload = function()
{
    var audio = new AudioContext(),
    osc = audio.createOscillator(),
    position=0,
    scale = {
    a:220.00,
    b:246.94,
    c:261.63,

    d:293.66,

    e:329.63,
    f:349.23,
    g:392.00,
    a1:440
},

song = "a1-a1-a1-f-ca-f-ca-e-e-e-f-ca-f-ca-";



 setInterval(play, 1000 / 4);

    function createOscillator(freq) {
        var osc = audio.createOscillator();

        osc.frequency.value = freq;
        osc.type = "square";
        osc.connect(audio.destination);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(audio.destination);
        }, 1000 / 4)
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }
};*/