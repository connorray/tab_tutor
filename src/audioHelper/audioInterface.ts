import { YIN } from "pitchfinder";

// Create a pitch detector with the YIN algorithm
const pitchDetector = YIN({
  // threshold: 0.2, // Adjust the threshold as needed for pitch detection
  // threshold: 0.3,
  threshold: 0.5,
});

const context = new AudioContext();
const analyserNode = new AnalyserNode(context, { fftSize: 256 });

setupContext();

async function setupContext() {
  const guitar = await getGuitar();
  if (context.state === "suspended") {
    await context.resume();
  }
  const source = context.createMediaStreamSource(guitar);
  source.connect(analyserNode).connect(context.destination);
}

function getGuitar() {
  return navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
    },
  });
}

export async function detectPitchFromAudioStream() {
  try {
    // Request access to the user's microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create an AudioContext
    const audioContext = new AudioContext();

    // Create a MediaStreamAudioSourceNode to capture audio from the microphone
    const audioSourceNode = audioContext.createMediaStreamSource(stream);

    // Now you can process the audio captured from the guitar (or any audio input) through the audioSourceNode.
    // For example, you can apply audio effects, analyze the audio, or send it to other audio nodes.

    // For example, you can create a GainNode to control the volume:
    const gainNode = audioContext.createGain();
    audioSourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Adjust the volume level (0 to 1)
    gainNode.gain.value = 0.5;

    // Analyze audio data in real-time
    const bufferSize = 4096; // Adjust buffer size as needed
    const scriptProcessorNode = audioContext.createScriptProcessor(
      bufferSize,
      1,
      1
    );
    audioSourceNode.connect(scriptProcessorNode);
    scriptProcessorNode.connect(audioContext.destination);

    scriptProcessorNode.onaudioprocess = (event) => {
      const inputData = event.inputBuffer.getChannelData(0);
      // console.log("Audio Data:", inputData);
      const pitch = pitchDetector(inputData);

      // Get musical note from the pitch (frequency)
      const musicalNote = getMusicalNoteFromPitch(pitch);

      // console.log("Detected Pitch (Hz):", pitch);
      console.log("Musical Note:", musicalNote);
      return musicalNote;
    };
  } catch (error) {
    console.error("Error accessing audio input:", error);
    return "n/a";
  }
}

function getMusicalNoteFromPitch(frequency: any) {
  if (!frequency || isNaN(frequency)) return "N/A";

  // const noteIndex = 12 * (Math.log2(frequency / 440) % 1) + 57;
  const noteIndex = Math.round(12 * Math.log2(frequency / 440)) + 57;
  const noteName = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const octave = Math.floor(noteIndex / 12);
  const note = noteName[noteIndex % 12];

  return `${note}${octave}`;
}

// Function to start audio stream
export async function startAudioStream() {
  try {
    // Request access to the user's microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create an AudioContext
    const audioContext = new AudioContext();

    // Create a MediaStreamAudioSourceNode to capture audio from the microphone
    const audioSourceNode = audioContext.createMediaStreamSource(stream);

    // Now you can process the audio captured from the guitar (or any audio input) through the audioSourceNode.
    // For example, you can apply audio effects, analyze the audio, or send it to other audio nodes.

    // For example, you can create a GainNode to control the volume:
    const gainNode = audioContext.createGain();
    audioSourceNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Adjust the volume level (0 to 1)
    gainNode.gain.value = 0.5;
  } catch (error) {
    console.error("starting audio stream", error);
  }
}

// Call the function to start the audio stream
startAudioStream();
