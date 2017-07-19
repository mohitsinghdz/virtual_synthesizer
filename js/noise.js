
ac = new(window.AudioContext || window.webkitAudioContext)();
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

  delay = document.getElementById("delay").value / 10;
  document.getElementById("delayout").innerHTML= delay;
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
   219:
   187:
   221:
   
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

	gainNode.gain.value = 1
	gainNode.gain.setTargetAtTime(0, ac.currentTime,delay);

}

window.addEventListener("keydown",function(event){
 //playNote(scale[event.keyCode]);
 console.log(event.keyCode);
 //beep(400);
 
 
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

