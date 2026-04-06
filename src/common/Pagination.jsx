
import React,{useState} from "react";
const Pagination = ({currentPage,itemsPerPage,totalRecords,onPageChange,onItemsPerPageChange,})=>{
const totalPages = Math.ceil(totalRecords/itemsPerPage);

const startRecord = totalRecords === 0 ? 0 :(currentPage - 1)*itemsPerPage + 1;
const endRecord = Math.min(currentPage*itemsPerPage,totalRecords);

const handlePrev = ()=>{
if(currentPage > 1){
onPageChange(currentPage - 1);
}
}

const handleNext = ()=>{
if(currentPage < totalPages){
onPageChange(currentPage + 1);
}
}

const handleItemsPerPageChange = (e)=>{

onItemsPerPageChange(Number(e.target.value));

onPageChange(1);



}




return (
  <div>
    <p>
      Showing {startRecord} to {endRecord} of {totalRecords} entries
    </p>
<p>
Page {currentPage} of {totalPages || 1}
</p>
<button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
<button onClick={handleNext} disabled={currentPage === totalPages || totalRecords===0}>Next</button>

<select value={itemsPerPage} onChange={handleItemsPerPageChange} >
<option value = {5}></option>
<option value = {10}>10</option>
<option value = {20}>20</option>
<option value = {50}>50</option>

</select>

  </div>
);
}


export default Pagination;