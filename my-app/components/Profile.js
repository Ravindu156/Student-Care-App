import { PaperProvider, Text } from "react-native-paper";
import { ScrollView, View, StyleSheet, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { courses } from "./StudentDb";

export default function Profile({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();

  const userCourseId = user.course_id; // Get the logged-in user's course ID

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
          <View style={styles.button}>
            <Button
              title="View Course"
              onPress={() => navigation.navigate("Course", { course_id: userCourseId, courses })}
            />
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
});
