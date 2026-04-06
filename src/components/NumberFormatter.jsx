
import React, { useState } from "react";
const NumberFormatter = () =>{
const [value,setValue] = useState("");
const [error,setError] = useState("");
const handleChange = (e)=>{
const input = e.target.value;
// allow only numbers and optional decimal
if (/^\d*\.?\d*$/.test(input)){
setValue(input);
setError("");
}else{
setError("Only numbers are allowed ");
}

};

return (
  <div>
    <input
      type="text"
      value={value}
    //   onChange={(e) => setValue(e.target.value)} Inline Function 
onChange = {handleChange} // handler Function 
      placeholder="Enter a Number "
    />
    {/* value stores the current input entered by the user, and setValue is used to
    update that state whenever the input changes. */}
    <p>Typed Value:{value}</p>
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
);}

export default NumberFormatter;