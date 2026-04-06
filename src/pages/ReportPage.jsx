import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { fetchReport } from "../features/reportSlice";
import { exportCSV } from "../utils/exportCSV";
import CommonTable from "../components/commonTable";
import { exportExcel } from "../utils/exportExcel";
import Pagination from "../common/Pagination";

const ReportPage = () =>{
const dispatch = useDispatch();
const { data, loading, error, currentReportType } = useSelector(
  (state) => state.report, // state.report  = report slice ka data
);

const [currentPage,setCurrentPage] = useState(1);
const[itemsPerPage,setItemsPerPage] = useState(10);
const totalRecords = data.length;
const paginatedData = data.slice(
(currentPage - 1) * itemsPerPage,
currentPage * itemsPerPage
);

//Page load par thunk dispatch hoga
// render body me dispatch nahi kiya
// useEffect me kiya, taaki repeated loop na bane
useEffect(()=>{
dispatch(
  fetchReport({
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    reportType: "Posts Report",
  }),
);
},[dispatch]);

const columns = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "body", label: "Body" },
];

return (
  <div>
    <button onClick={() => exportExcel(data, "report.xlsx")}>
      Export Excel
    </button>

    {!loading && !error && (
      <div>
        <button onClick={() => exportCSV(data, "posts-report.csv")}>
          Export CSV
        </button>

        <p>Current Report: {currentReportType}</p>
        <CommonTable data={paginatedData} columns={columns} />
<Pagination
currentPage={currentPage}
itemsPerPage={itemsPerPage}
totalRecords={totalRecords}
onPageChange={setCurrentPage}
onItemsPerPageChange={setItemsPerPage}

/>
      </div>
    )}

    {/* <h1>Report Page</h1> */}
    {/* loading true hone par loading message show hoga */}
    {/* {loading && <p>Loading...</p>}
    {error && <p>Error:{error}</p>}
    {!loading && !error && (
      <div>
        <p>Current Report:{currentReportType}</p>

        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>

          <tbody> */}
            {/* data.slice(0, 10) kyu lagaya? Table में सिर्फ first 10 records
            दिखाने के लिए (limit लगाने के लिए) 👉 क्यों useful है? performance
            better UI clean testing आसान */}

            {/* {paginatedData.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
  //   )}
  // </div>
);

};

export default ReportPage;