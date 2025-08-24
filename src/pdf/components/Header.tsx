import { Image, Link, Text, View } from "@react-pdf/renderer";
import { constant } from "../../constants/constant";

export default function PdfHeader({ styles }: { styles: any }) {
  return (
    <View style={styles.header}>
      <View style={{ width: "25%" }}>
        <Image
          src={constant.photo_url}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </View>
      <View style={{ width: "75%", padding: 16 }}>
        <Text style={{ fontWeight: 500, fontSize: 18 }}>{constant.name}</Text>
        <Text style={{ fontSize: 9, marginTop: 8 }}>{constant.position}</Text>

        <View style={{ marginTop: 50, fontSize: 7 }}>
          <Text style={{ width: "100%" }}>{constant.city}</Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
            <Link src={`tel:${constant.phone}`} style={styles.headerLink}>
              {constant.phone}
            </Link>
            <Text
              style={{
                margin: "0 5 0 5",
              }}
            >
              •
            </Text>
            <Link
              src={`https://mail.google.com/mail/?view=cm&fs=1&to=${constant.email}`}
              style={styles.headerLink}
            >
              {constant.email}
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
