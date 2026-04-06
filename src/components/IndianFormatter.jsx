

const IndianNumberFormatter =()=>{
const [value,setValue] = useState("");
const [error,setError] = useState("");

handleOnChange = (e)=>{

const inputValue = e.target.value;
let dotCount = 0;
let isValid = true;
for(let i = 0;i<inputValue.length;i++){
const char = inputValue[i];
if(char >= "0" && char <= "9"){
continue;
}
if(char ==="."){

dotCount++;
if(dotCount >1){
isValid = false;
break;

}
if(isValid){
setValue(inputValue);
setError("");
}else{
setError("Only decimal and one decimal point are allowed")}

}
}

}
return(

<div>
<input
type="text"
value ={value}
onChange={handleOnChange}
placeholder="Enter a number"
/>
<p>Typed Value:{value}</p>
{error && <p style =  {{ color:"red"}}>{error}</p>}
</div>)

}