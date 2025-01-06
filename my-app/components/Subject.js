import { PaperProvider, Text } from "react-native-paper";
import { ScrollView, View, StyleSheet, Image, Button } from "react-native";


export default function Subject({ route }) {
    const {subjects} =route.params;

    const average=subjects.reduce ((sum,subject)=>sum+subject.mark,0)/subjects.length;


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
                <Text style={styles.title}>Computer Science</Text>
               <Text style={styles.subtitle}>
                    {subjects.length} | Average {Math.round(average)}
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
                    subjects.map((subject,index)=>(
                        <View style={styles.tableRow} key={index}>
                           <Text style={styles.tableCell}>{subject.name}</Text>
                           <Text style={styles.tableCell}>{subject.mark}</Text>
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
      padding: 8,
      alignItems: "center",
      marginBottom: 10,
    },
    image: { width: 120, height: 120 },
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
  });
  