import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";

import MontserratRegular from "../fonts/Montserrat/static/Montserrat-Regular.ttf";
import MontserratMedium from "../fonts/Montserrat/static/Montserrat-Medium.ttf";
import MontserratBold from "../fonts/Montserrat/static/Montserrat-Bold.ttf";
import PdfHeader from "./components/Header";
import PdfLeftColumn from "./components/LeftColumn";
import PdfRightColumn from "./components/RightColumn";

Font.register({
  family: "Montserrat",
  fonts: [
    { src: MontserratRegular, fontWeight: "normal" },
    { src: MontserratMedium, fontWeight: 500 },
    { src: MontserratBold, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#d1d5dc",
    fontFamily: "Montserrat",
    fontSize: "14px",
  },
  flexRow: { display: "flex", flexDirection: "row" },
  // HEADER
  header: {
    width: "100%",
    height: "16.7%",
    backgroundColor: "#00d492",
    display: "flex",
    flexDirection: "row",
  },
  headerLink: {
    textDecoration: "underline",
    color: "black",
    display: "flex",
    alignSelf: "flex-start",
  },

  leftColumn: {
    width: "25%",
    padding: 15,
  },
  rightColumn: {
    width: "75%",
    padding: 15,
    paddingTop: 45,
  },
});
export default function Resume() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfHeader styles={styles} />
        <View style={styles.flexRow}>
          <PdfLeftColumn styles={styles} />
          <PdfRightColumn styles={styles} />
        </View>
      </Page>
    </Document>
  );
}
