import { PaperProvider,Text ,Divider,Button,TextInput} from "react-native-paper";
import {  ScrollView, View, StyleSheet,Image } from "react-native";

export default function Login(){
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
                <View style={styles.banner}>
                    <Text variant="headlineMedium">Student Login</Text>

                </View>

                <View style={styles.input}>
                    <TextInput label="username" mode="outlined" style={styles.inputText}/>

                </View>
                <View style={styles.input}>
                    <TextInput label="password" mode="outlined" style={styles.inputText}/>
                </View>

                <View style={styles.input}>
                     <Button mode='contained'  style={styles.button}>
                     <Text style={styles.buttonText}>Login</Text></Button>
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
    banner:{
        alignItems:'center',
        height:100,
        
    },
    input:{
        backgroundColor:'white',
    },
    inputText:{
        backgroundColor:'white',
        width:'80%',
        
        marginLeft:40,
    },button:{
        backgroundColor:'#500073',
        width:'80%',
        marginTop:40,
        marginLeft:40,
      
    },
    buttonText:{
        color:'white',
    }


})
