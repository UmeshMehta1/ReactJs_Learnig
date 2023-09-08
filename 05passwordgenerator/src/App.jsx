import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState("8");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [bgColor, setBgColor] = useState('blue');

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="01234567890";
    if(charAllowed) str +="!@#$%^&*-_+=[]{}~`";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    setBgColor('gray');

    setTimeout(() => {
      setBgColor('blue');
    }, 200);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
    
  },[length, numberAllowed,charAllowed, passwordGenerator])

 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h5 className="text-white shadow rounded text-center my-3">
          Password Generator
        </h5>
        <div className="flex rounded overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full outline-none py-1 px-3"
            ref={passwordRef}
          />
          
          <button onClick={copyPasswordToClipboard} style={{backgroundColor: bgColor}} className="outline-none  text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
        <div className="flex text-sm gap-x-1">  
          <input     //for range
            type="range"
            value={length}
            min={5}
            max={100}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label>length: {length}</label>
        </div>
          <div className="flex items-center gap-x-1">
            <input  // for checkbox and Number
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input   // for checkbox and character.
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


