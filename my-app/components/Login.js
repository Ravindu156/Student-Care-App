import { PaperProvider} from "react-native-paper";
import { Text ,ScrollView,View} from "react-native";
export default function Login(){
    return(
        <PaperProvider>
          <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text>
                        HIIII
                    </Text>


                </View>




          </ScrollView>





        </PaperProvider>





    );













}

const styles=StyleSheet.create({
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },


})
