import{useState,useEffect} from "react";
import { getQuotes } from "../../services/QuotesService";
import Pagination from "./Pagination";


//Pagination need to implement 
// Search Filter like 1 option muttiple opttion and all filter like it should returna all response 
function Quotes(){
// Store 2 error 3.Loaing
const[quotes,setQuotes] = useState([]);
const[Loading,setLOading] = useState(true);
const[error,setError] = useState("");
const [searchTerm,setSearchTerm] = useState("")
const [currentPage,setCurrentPage] = useState(1);
const itemsPerPage = 5;
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const filteredQuotes = quotes?.filter(
  (quote) =>
    quote.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote?.quote.toLowerCase().includes(searchTerm.toLowerCase()),
);
const currentQuotes = filteredQuotes.slice(startIndex,endIndex);
const totalPages = Math.max(1, Math.ceil(filteredQuotes.length / itemsPerPage));

useEffect(()=>{

const fetchData = async()=>{
setLOading(true);
try{
//get data from API
const response = await getQuotes();
//Stored in State
setQuotes(response);
}catch(error){
setError("Something went Wrong");
}finally{
setLOading(false);
}
};
fetchData();
setCurrentPage(1);
},[]);

useEffect(() => {
  setCurrentPage(1);
}, [searchTerm]);



if(Loading) return <p>Loading...</p>;
if(error) return <p>{error}</p> 
return (
  <div>
    <input
      type="text"
      placeholder="Search by Author"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <h2>Quotes Table</h2>
    <table border="1" cellPadding={"10"}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Quote</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {currentQuotes.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.id}</td>
            <td>{quote.quote}</td>
            <td>{quote.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  </div>
);
}

export default Quotes;