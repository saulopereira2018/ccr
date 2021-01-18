const stopButton1 = document.querySelector('#stopButton1'),
  stopButton2 = document.querySelector('#stopButton2'),
  stopButton3 = document.querySelector('#stopButton3'),
  stopButton4 = document.querySelector('#stopButton4'),
  stopButton5 = document.querySelector('#stopButton5'),
  stopButton6 = document.querySelector('#stopButton6'),
  stopButton7 = document.querySelector('#stopButton7');
  
const c4 = 261.6,
	d4 = 293.7,
  e4 = 329.6,
  f4 = 349.2,
  g4 = 392.0,
  a4 = 440.0,
  b4 = 493.9;

  	
let context,
	oscillator,
  contextGain,
  x = 1,
  type = 'sine',
  frequency;

function start(){
	context = new AudioContext();
	oscillator = context.createOscillator();
  contextGain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start(0);
}

function stop(){
  start();
  contextGain.gain.exponentialRampToValueAtTime(
  	0.00001, context.currentTime + x
	)
}

stopButton1.addEventListener('click', function(){
        frequency = c4;
        window.navigator.vibrate(1569);      
  stop();

});
stopButton2.addEventListener('click', function(){
        frequency = d4;
        window.navigator.vibrate(1761);
  stop();
});
stopButton3.addEventListener('click', function(){
        frequency = e4;
        window.navigator.vibrate(1977);
  stop();
});
stopButton4.addEventListener('click', function(){
        frequency = f4;
        window.navigator.vibrate(2095);
  stop();
});
stopButton5.addEventListener('click', function(){
        frequency = g4;
        window.navigator.vibrate(2351);
  stop();
});
var button06 = stopButton6.addEventListener('click', function(){
        frequency = a4;
        window.navigator.vibrate(1584);
      
  stop();
});
stopButton7.addEventListener('click', function(){
        frequency = b4;
        window.navigator.vibrate(4930);
     
  stop();
});
pastorzinho.addEventListener('click', function(){
        button06();
     
  stop();
});
