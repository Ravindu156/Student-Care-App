import { PaperProvider, Text } from "react-native-paper";
import { ScrollView, View, StyleSheet, Image, Button } from "react-native";
import { courses, marks, subjects } from "./StudentDb";


export default function Subject({ route }) {
    const {user} =route.params;
    
    const course_id = user.course_id;
    
    const course = courses.find((course) => course_id === course.id)
    console.log(course.name);

    const subs = subjects.filter((subject) => subject.course_id === course.id)
    const len = subs.length;
    console.log(subs);
    
    let sum = 0;
    let subMarks = [];
    for (let i = 0; i<len; i++) {
        let subject = subs[i];  
        const mark = marks.find((mark) => mark.subject_id === subject.id && mark.student_id === user.id);
        sum+=mark.marks  
        
        subMarks.push({name: subject.name, marks: mark.marks});
    }
    const average = (sum/len).toFixed(2);
    console.log(subMarks);
    
    


   // const average=user.reduce((sum,subject)=>sum+subject.mark,0)/subjects.length;


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
          <View style={styles.card}>
                <Text style={styles.title}>{course.name}</Text>
    
               <Text style={styles.subtitle}>
                    {len} Subjects | Average: {average}
               </Text>

            <Text style={styles.sectionTitle}>Marks Information</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={[styles.tableHeader,styles.tableCell]}>
                        Subject
                    </Text>
                    <Text style={[styles.tableHeader,styles.tableCell]}>
                       Marks
                    </Text>
                </View>
               {
                    subMarks.map((subject,index)=>(
                        <View style={styles.tableRow} key={index}>
                           <Text style={styles.tableCell}>{subject.name}</Text>
                           <Text style={styles.tableCell}>{subject.marks}</Text>
                        </View>
                    ))

                }
            </View>
          
               


          </View>
         
        </View>
        <View style={styles.footer}>
                    <Text style={styles.footerText}>UOV © 2024</Text>
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
    headerText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    imagepad: {
      alignItems: "center",
      marginBottom: 10,
    },
    image: { width: "70%", height: 100, resizeMode: 'contain' },
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
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#4A148C",
      marginBottom: 5,
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#4A148C",
      marginBottom: 10,
    },
    table: {
      width: "100%",
      marginVertical: 10,
    },
    tableRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 5,
    },
    tableHeader: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#4A148C",
    },
    tableCell: {
      fontSize: 14,
      color: "#333",
      flex: 1,
    },
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
    button: { marginTop: 20, width: "50%" },
    count: {
        color: 'black',
    }
  });
  