import { pdf } from "@react-pdf/renderer";
import Resume from "../pdf/Resume";

export const helpers = {
  chunkArray: <T>(arr: T[], size: number): T[][] => {
    const res: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  },
  downloadPdf: async () => {
    const blob = await pdf(Resume()).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  },
};
