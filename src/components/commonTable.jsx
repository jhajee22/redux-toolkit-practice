

const CommonTable = ({ data, columns }) => {
 
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          {columns?.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((row, index) => (
          <tr key={row.id || index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
