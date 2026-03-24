
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";
export const exportExcel = async (list, fileName = "report.xlsx") => {
  if (!list.length) return;

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Report");

  // Headers
  worksheet.addRow(Object.keys(list[0]));

  // Rows
  list.forEach((item) => {
    worksheet.addRow(Object.values(item));
  });

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, fileName);
};
