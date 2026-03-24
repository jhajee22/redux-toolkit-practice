export const exportCSV = (list,fileName="report.csv")=>{
  if (!list.length) return;
  const header = Object.keys(list[0]); // pehle item se field names nikaal rahe hain (jaise name, age, city)
  // ye headers table ke column banenge
  const rows = list.map((item) => Object.values(item)); // har item ke values nikaal rahe hain, ye rows banenge // form a array
  const csvContent = [header, ...rows].map((row) => row.join(",")).join("\n"); // // 👉 header + rows ko combine karke CSV format me convert kar rahe hain
  // 👉 har row ke values comma se join ho rahi hain
  // 👉 aur har row ko next line (\n) me daal rahe hain

const blob = new Blob([csvContent],{
type:"text/csv;charset=utf-8;",
});

const link = document.createElement("a");
link.href= URL.createObjectURL(blob);
link.download = fileName;
link.click();
}