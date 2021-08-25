import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from './Convert';

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Bengali",
    value: "bn",
  },
  {
    label: "Gujrati",
    value: "gu",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Indonesian",
    value: "id",
  },
  {
    label: "Punjabi",
    value: "pa",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'>Output
        <Convert language={language} text={text}/>
      </h3>
    </div>
  );
};

export default Translate;
