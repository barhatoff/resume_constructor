import { Text, View } from "@react-pdf/renderer";
import { constant } from "../../constants/constant";
import type { EmploymentHistoryElem } from "../../types/types";

type PdfElemProps = {
  employer: string;
  range: string;
  workdone: { title: string; content: string }[];
};

export default function PdfRightColumn({ styles }: { styles: any }) {
  const PdfEmploymentElem = ({ employer, range, workdone }: PdfElemProps) => {
    return (
      <View style={{ marginTop: 20, paddingRight: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 10 }}>{employer}</Text>
        <Text style={{ fontSize: 9, marginTop: 2 }}>{range}</Text>
        <View style={{ marginTop: 10 }}>
          {workdone.map((elem, i) => (
            <View
              key={`employment_elem_${i}`}
              style={{ flexDirection: "row", paddingLeft: 20, marginTop: 10 }}
            >
              <Text style={{ marginRight: 8, fontSize: 10 }}>•</Text>
              <Text style={{ fontSize: 10 }}>
                <Text
                  style={{
                    fontWeight: "medium",
                  }}
                >
                  {elem.title}
                </Text>
                <Text> {elem.content}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rightColumn}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Education</Text>
        <Text style={{ fontWeight: 500, marginTop: 10, fontSize: 10 }}>
          {constant.education.university}
        </Text>
        <Text style={{ fontSize: 8, marginTop: 2 }}>
          {constant.education.dateRange}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500, marginTop: 45 }}>
          Employment History
        </Text>
        {constant.employment_history.map(
          (elem: EmploymentHistoryElem, i: number) => (
            <PdfEmploymentElem
              employer={elem.employer}
              range={elem.range}
              workdone={elem.workdone}
              key={`employment_elem_${i}`}
            />
          )
        )}
      </View>
    </View>
  );
}
