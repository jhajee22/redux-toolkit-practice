
import { useState } from "react";
import{toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ExamplePage = ()=>{

const[answer,setAnswer] = useState('');
const[status,setStatus] = useState('typing');
const[error,setError] = useState(null);
const[attempts,setAttempts] = useState(0);
const correctAnswer = "New Delhi";

// if(status ==='success'){
// return <h1>That's Right</h1>

// }

const handleSubmit = async (e)=>{

e.preventDefault();
setStatus('submitting');

try{


 await submitForm(answer);
setStatus('success');
toast.success("Correct Answer! 🎉",{position:"top-right",autoClose:2000,});
setAttempts(0);

}catch(err){
setStatus('typing');
setError(err);
toast.error("Wrong Answer ❌");
setAttempts((prev) => prev + 1);
}
}

const handleTextAreaChange = (e)=>{
setAnswer(e.target.value);
setError(null);
setStatus("typing");

}

return (
  <div>
    <ToastContainer />
    <h2>India Quiz</h2>
    <p>What is the Capital Of India?</p>

    <form onSubmit={handleSubmit}>
      <textarea
        value={answer}
        onChange={handleTextAreaChange}
        disabled={status === "submitting"}
      />
      <br />
      <button
        type="submit"
        disabled={answer.length === 0 || status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      {error !== null && <div className="error-box"> ❌{error.message}</div>}
      <p>Wrong Attempts: {attempts}</p>
{attempts >=3 &&(
<p>Correct Answer: {correctAnswer}</p>

)}
      {/* {status ==="success" &&(
<div className="success-box"> ✅ That's Right!</div>

)} */}
    </form>
  </div>
);
};

function submitForm(answer){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
let shouldError = answer.trim().toLowerCase() !=='new delhi'
if(shouldError){
reject(new Error('Wrong Answer! Try Again'));

}else{

resolve();

}



},1500);


});



}

export default ExamplePage;