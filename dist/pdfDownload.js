const { jsPDF } = window.jspdf;
export const gerarPDF = () => {
    const elemento = document.querySelector("#resultados");
    html2canvas(elemento, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("simulacao-investimentos.pdf");
    });
};
