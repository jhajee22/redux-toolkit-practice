
import React from "react";
const SearchFilter = ()=>{
const items = ["All","Active","Completed"];

return (


<div>
<input
type="text"
placeholder="Search Filter "
onChange={(e)=> setSearch(e.target.value)}
/>
<h2>List </h2>
{
items.map((item,index)=>(
<p key = {index}>{item}</p>
))}
</div>
);
};

export default SearchFilter;

