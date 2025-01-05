import { PaperProvider,Text } from "react-native-paper";
import {  ScrollView, View, StyleSheet,Image } from "react-native";

export default function Course({route,navigation}){

    const {course}=route.params;


return(
      <PaperProvider>
              <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.container}>
                      <View style={styles.header}>
                            <Text variant="headlineMedium">Uov Student Care</Text>
    
                      </View>
                      <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
    
                      </View>
                    <View style={styles.card}>
                    <Text>{course.course_code}</Text>
                    <Text>{course.department}</Text>
                    <Text>{course.duration}</Text>
                    <Text>{course.description}</Text>

                   
              
                    </View> 
                    <View style={styles.button}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    
    
    
                    </View>
    
    
    
    
              </ScrollView>
    
    
    
    
    
            </PaperProvider>
    






);
}

const styles=StyleSheet.create({
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    container:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 0,
    },
    header:{
        backgroundColor: '#500073',
        justifyContent: 'space-between',
        alignItems:'center',
        height:100,
        
       
    },
    imagepad:{
        padding: 8,
        alignItems: 'center',
       flex: 2,
       marginBottom: 10
    },
    image:{
       width:'80%',
        height:70,
    },
    card: {
        backgroundColor: "#f9f9f9",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        width: "90%",
        alignItems: "flex-start",
      },
  
})
