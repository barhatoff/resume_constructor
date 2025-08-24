import { View, Image, Link, Text } from "@react-pdf/renderer";
import LinkImg from "../../img/link.png";
import { helpers } from "../../helpers/helpers";
import { constant } from "../../constants/constant";

type PdfLinksProps = {
  links: { url: string; label: string }[];
};
type PdfSkillElementProps = {
  skill: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export default function PdfLeftColumn({ styles }: { styles: any }) {
  const PdfLinks = ({ links }: PdfLinksProps) => {
    let gropedLinks = helpers.chunkArray(links, 2);
    return (
      <View style={{ flexDirection: "row", fontSize: 10 }}>
        <Image
          src={LinkImg}
          style={{ width: 12, height: 12, marginRight: 5 }}
        />
        <View style={{ flexDirection: "column" }}>
          {gropedLinks.map((chunk, i) => (
            <View
              key={`link_group_${i}`}
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginBottom: 2,
                fontSize: 8,
              }}
            >
              {chunk.map((elem, i_chunk) => (
                <View
                  key={`link_${i_chunk}_group_${i}`}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Link
                    src={elem.url}
                    style={{ textDecoration: "underline", color: "black" }}
                  >
                    <Text>{elem.label}</Text>
                  </Link>
                  {i_chunk !== chunk.length - 1 && (
                    <Text style={{ marginLeft: 4, marginRight: 4 }}>•</Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  };
  const PdfSkillElement = ({ skill, level }: PdfSkillElementProps) => {
    const Skillbar = ({ level }: { level: number }) => {
      const array = new Array(5).fill(0);
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {array.map((_, index) => (
            <View
              key={`skill_elem_${index}`}
              style={{
                width: "18%",
                height: 3,
                borderRadius: 2,
                backgroundColor: index + 1 > level ? "#E0F2FE" : "#00d492",
              }}
            />
          ))}
        </View>
      );
    };

    return (
      <View style={{ marginTop: 12 }}>
        <Text style={{ fontSize: 8, marginBottom: 4 }}>- {skill}</Text>{" "}
        <Skillbar level={level} />
      </View>
    );
  };

  return (
    <View style={styles.leftColumn}>
      <PdfLinks
        links={[
          { url: constant.github_link, label: "github" },
          { url: constant.linkedin_link, label: "linkedin" },
        ]}
      />
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontWeight: 500, fontSize: 10 }}>Skills</Text>
        {constant.skills.map((elem, i) => (
          <PdfSkillElement
            skill={elem.skill}
            level={elem.level}
            key={`pdf_skill_element_${i}`}
          />
        ))}
      </View>
    </View>
  );
}
