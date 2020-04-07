export default async function speak(text) {
  console.log('foi :');
  let utterance;
  const voices = await getVoices();

  utterance = new SpeechSynthesisUtterance((text));

  utterance.voice = voices[16];
  utterance.lang = voices[16].lang;

  return speechSynthesis.speak(utterance);
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
  