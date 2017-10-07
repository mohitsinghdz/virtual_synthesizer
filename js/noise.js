//generates sound
ac = new(window.AudioContext || window.webkitAudioContext)();         
audioCtx = new(window.AudioContext || window.webkitAudioContext)();
ac2 = new(window.AudioContext || window.webkitAudioContext)();

show(); //display function for osc1
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

  delay = document.getElementById("delay").value / 10;
  document.getElementById("delayout").innerHTML= delay;
}

show2();  //display function for osc2
function show2() {
  
  switch (document.getElementById("tIn2").value * 1) {
    case 0: type2 = 'sine'; break;
    case 1: type2 = 'square'; break;
    case 2: type2 = 'sawtooth'; break;
    case 3: type2 = 'triangle'; break;
  }
  document.getElementById("tOut2").innerHTML = type2;

  volume2 = document.getElementById("vIn2").value / 100;
  document.getElementById("vOut2").innerHTML = volume2;

  delay2 = document.getElementById("delay2").value / 10;
  document.getElementById("delayout2").innerHTML= delay2;
}

show3();  //display function for osc3
function show3() {
  
  switch (document.getElementById("tIn3").value * 1) {
    case 0: type3 = 'sine'; break;
    case 1: type3 = 'square'; break;
    case 2: type3 = 'sawtooth'; break;
    case 3: type3 = 'triangle'; break;
  }
  document.getElementById("tOut3").innerHTML = type3;

  volume3 = document.getElementById("vIn3").value / 100;
  document.getElementById("vOut3").innerHTML = volume3;

  delay3 = document.getElementById("delay3").value / 10;
  document.getElementById("delayout3").innerHTML= delay3;
}

//Notes frequency distribution  

scale={
   81:261.63,
   50:277.18,
   87:293.66,
   51:311.13,
   69:329.63,
   82:349.23,
   53:369.99,
   84:392.00,
   54:415.30,
   89:440.00,
   55:466.16,
   85:493.88,
   73:523.25,
   57:554.37,
   79:587.33,
   48:622.25,
   80:659.25,
   219:698.46,
   187:783.99,
   221:830.61,

   90:130.81,
   83:138.59,
   88:146.83,
   68:155.56,
   67:164.81,
   86:174.61,
   71:185.00,
   66:196.00,
   72:207.65,
   78:220.00,
   74:233.08,
   77:246.94,
   188:261.63,
   76:277.18,
   190:293.66,
   186:311.13,
   191:329.63

}

//var gainNode = ac.createGain();
//gainNode.gain.value = 0;
  

function playNote(freq){
    
    var osc1 = ac.createOscillator();
    osc1.start();
    var gainNode = ac.createGain();
    gainNode.gain.value = 0;
    osc1.connect(gainNode);
    gainNode.connect(ac.destination);
    osc1.type=type;
    
    osc1.frequency.setValueAtTime(freq, ac.currentTime);

	gainNode.gain.value = volume;
	gainNode.gain.setTargetAtTime(0, ac.currentTime,delay);
  
  setTimeout(
    function() {

      osc1.stop();
      delete osc1;
    },
    5000
  );

}

function playNote2(freq){
    
    var osc2 = audioCtx.createOscillator();
    osc2.start();
    var gainNode2 = audioCtx.createGain();
    gainNode2.gain.value = 0;
    osc2.connect(gainNode2);
    gainNode2.connect(audioCtx.destination);
    osc2.type=type2;
    
    osc2.frequency.setValueAtTime(freq, audioCtx.currentTime);

	gainNode2.gain.value = volume2;
	gainNode2.gain.setTargetAtTime(0, audioCtx.currentTime,delay2);
  setTimeout(
    function() {

      osc2.stop();
      delete osc2;
    },
    5000
  );
}

function playNote3(freq){
    
    var osc3 = ac2.createOscillator();
    osc3.start();
    var gainNode3 = ac2.createGain();
    gainNode3.gain.value = 0;
    osc3.connect(gainNode3);
    gainNode3.connect(ac2.destination);
    osc3.type=type3;
    
    osc3.frequency.setValueAtTime(freq, ac2.currentTime);

	gainNode3.gain.value = volume3;
	gainNode3.gain.setTargetAtTime(0, ac2.currentTime,delay3);
  setTimeout(
    function() {

      osc3.stop();
      delete osc3;
    },
    5000
  );
}

window.addEventListener("keydown",function(event){
 playNote(scale[event.keyCode]);
 playNote2(scale[event.keyCode]);
  playNote3(scale[event.keyCode]);
 
 console.log(event.keyCode);
 //beep(400);
/* if(event.keyCode==81)
 {
var x = document.getElementById("c4");
x.className += " pressed";
 }
 */
 
},true);





function beep(freq) {
    
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = freq;
  oscillator.type = type;

  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    },
    duration
  );
};

