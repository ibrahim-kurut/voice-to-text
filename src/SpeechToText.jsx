import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaRegCopy } from "react-icons/fa";



const SpeechToText = () => {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [listening, setListening] = useState(false);
    const [language, setLanguage] = useState('en');

    if (!browserSupportsSpeechRecognition) {
        return <span>Your browser does not support speech recognition.</span>;
    }

    const handleListen = () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            SpeechRecognition.startListening({ continuous: true, language: language });
        }
        setListening(!listening);
    };


    //  copy text handlecls
    const copyText = () => {
        navigator.clipboard.writeText(transcript).then(() => {
            alert("The text has been copied");
        })
    };


    return (
        <div>
            <div>
                <label htmlFor="language"> choose the language : </label>
                <select
                    className=" text-lg rounded-md bg-gray-600"
                    id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="tr">Turkish</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>
            <div className="m-2">
                <button onClick={handleListen}
                    className="bg-gray-600 px-2 rounded-lg text-lg mr-3"
                >
                    {listening ? 'stop' : 'start'}
                </button>
                <button onClick={resetTranscript}
                    className="bg-gray-600 px-2 rounded-lg text-lg"
                > Reset</button>
            </div>
            {
                transcript.length > 0 ?
                    <div className="text-gray-300 border border-gray-700 rounded-md text-base p-2 w-[90%] m-auto">
                        {transcript}

                        <div
                            onClick={copyText}
                            className="flex justify-end p-2 cursor-pointer">
                            <FaRegCopy />
                        </div>
                    </div>
                    :
                    <div className="text-lg text-gray-600"> no text yet to write a text, click on start  and talk  </div>
            }

        </div>
    );
};

export default SpeechToText;
