var myTimeout;

export default async function speak(text) {

  let utterance;
  const voices = await getVoices();

  window.speechSynthesis.cancel();
  myTimeout = setTimeout(myTimer, 500);

  utterance = new SpeechSynthesisUtterance((text));

  utterance.voice = voices[16];
  utterance.lang = voices[16].lang;

  utterance.onend =  function() { clearTimeout(myTimeout); }
  window.speechSynthesis.speak(utterance);

  return speechSynthesis.speak(utterance);
}


function myTimer() {
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
    myTimeout = setTimeout(myTimer, 10000);
}

const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}
  