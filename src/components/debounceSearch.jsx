
//Debounce search means applying debounce to a search input.
//Instead of calling search logic or API on every keystroke, we wait a little before searching.
import { useEffect,useState } from "react";
function SearchBox(){
const[query,setQuery] = useState("");
const[debouncedQuery,setDebouncedQuery] = useState("");


useEffect(()=>{
const timer = setTimeout(()=>{
setDebouncedQuery(query);

},500);

return ()=>clearTimeout(timer);
},[query]);


useEffect(()=>{
if(debouncedQuery.trim() !==""){
console.log("Search API call for:",debouncedQuery)
}


},[debouncedQuery])

return (

<div>
{/* In below input query stores value and setQuery updates value  */}
<input
type="text"
placeholder="Search..."
value={query}
onChange={(e)=> setQuery(e.target.value)}
// whenever user types update state 
/>
<p>Typing: {query}</p>
<p>Debounced Search : {debouncedQuery}</p>

</div>
)

}

export default SearchBox;



