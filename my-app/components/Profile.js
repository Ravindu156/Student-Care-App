import { Button, PaperProvider, Text} from "react-native-paper";
import { ScrollView, View, StyleSheet, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { courses } from "./StudentDb";
import MyTabs from "./MyTabs";

export default function Profile({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();
  
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text variant="headlineMedium">Uov Student Care</Text>
          </View>
          <View style={styles.imagepad}>
            <Image source={require("../assets/uovlogo.png")} style={styles.image} />
          </View>
          <View style={styles.whole}>
            <Image source={user.profile_pic} style={styles.profilePic} />
            <Text style={styles.text}>Contact Information</Text>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Phone: {user.phone}</Text>
            <Text style={styles.text}>Biological Information</Text>
            <Text style={styles.text}>Gender: {user.gender}</Text>
            <Text style={styles.text}>Blood Group: {user.blood_group}</Text>
            <Text style={styles.text}>Address: {user.address}</Text>
          </View>

           <View style={styles.footer}>
                            <Text style={styles.footerText}>UOV © 2024</Text>
            </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: { flexGrow: 1 },
  container: { flexDirection: "column", backgroundColor: "#fff", padding: 0 },
  header: {
    backgroundColor: "#500073",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  imagepad: {
    padding: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  image: { width: "80%", height: 70 },
  profilePic: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { color: "black", fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { color: "black" },
  whole: { alignItems: "center" },
  button: { marginTop: 20, width: "50%" },
  footer: {
    backgroundColor: "#500073",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
  },
});
