import { useCallback, useState } from "react";

export const useSpeachSynthesisApi = () => {
  const [volume, setVolume] = useState(0.5)
  const [rate, setRate] = useState(1)

  let msg = new SpeechSynthesisUtterance();
  // msg.rate = rate
  // msg.volume = volume

  const speak = useCallback((text) => {
    msg.text = text;
    msg.lang = 'pt-BR';

    function speak() {
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(msg);
    }
    speak();
  }, []);

  const pause = useCallback(() => {
    function pause() {
      window.speechSynthesis.pause();
    }
    pause();
  }, []);

  const resume = useCallback(() => {
    function resume() {
      window.speechSynthesis.resume();
    }
    resume();
  }, []);

  const changeRate = useCallback((value) => {
    setRate(value)
    msg.rate = value
  }, []);

  const changeVolume = useCallback((value) => {
    setVolume(value)
    msg.volume = value
  }, []);

  return {
    rate,
    volume,
    speak,
    pause,
    resume,
    changeRate,
    changeVolume
  }
}