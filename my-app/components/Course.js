import { PaperProvider, Text, Button } from "react-native-paper";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import {courses} from "./StudentDb";


export default function Course({ route,navigation }) {
  const { user } = route.params;

  const selectedCourse = courses.find(course => user.course_id === course.id);

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

          {selectedCourse ? (
            <View style={styles.card}>
              <Text style={styles.courseTitle}>{selectedCourse.name}</Text>
              <Text style={styles.courseDetails}>Code: {selectedCourse.course_code}</Text>
              <Text style={styles.courseDetails}>Department: {selectedCourse.department}</Text>
              <Text style={styles.courseDetails}>Duration: {selectedCourse.duration}</Text>
              <Text style={styles.courseDetails}>Description: {selectedCourse.description}</Text>
            </View>
          ) : (
            <Text style={styles.noCoursesText}>No Course Found</Text>
          )}

           <View style={styles.footer}>
                          <Text style={styles.footerText}>UOV © 2024</Text>
          </View>
          
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A148C",
    marginBottom: 5,
  },
  courseDetails: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  noCoursesText: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
    marginTop: 20,
  },

});
