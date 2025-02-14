
interface Window {
    jspdf: any;
    html2canvas: any;
}

const { jsPDF }: any = (window as unknown as Window).jspdf;
declare const html2canvas: any;

export const gerarPDF = () => {
    const elemento = document.querySelector("#resultados");

    html2canvas(elemento, { scale: 2 }).then((canvas: { toDataURL: (arg0: string) => any; height: number; width: number; }) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 190; // Largura proporcional ao A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Mantém propor
        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("simulacao-investimentos.pdf");
    });
};