import { Pressable, View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native-web";
import { Modal } from "react-native";
import Word from "./Word";
import { WordState } from "./Word";


/**
 * 
 */
export default function GuessWarningPopup({visible, hintData, onYesPress, onNoPress, input}) {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text marginBottom={25}>Heads up: your answer didn't match the hints you were given, and is guaranteed to be incorrect.</Text>
                    <Word wordData={hintData} input={input} wordState={WordState.WarningDiagram}></Word>
                    <Text>Would you like to submit your answer anyway?</Text>
                    <View style={styles.buttonView}>
                        <Pressable style={styles.button} onPress={onNoPress} onborderColor="#843" backgroundColor="#fdc"><Text>No</Text></Pressable>
                        <Pressable style={styles.button} onPress={onYesPress} onborderColor="#384" backgroundColor="#cfd"><Text>Yes</Text></Pressable>
                    </View>
                    
                </View>
            </View>
        </Modal>
    );
}

let styles = StyleSheet.create({
    popup: {
        backgroundColor: "#ff6666",
        borderColor: "#ff0000",
        margin: 0,
        boxShadowOpacity:1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 10,
        marginLeft:25,
        marginRight:25,
    },
    modalView: {
        margin: 0,
        backgroundColor: 'white',
        borderColor: "#aaaaaa",
        borderWidth: 5,
        borderRadius: 20,
        padding: 10,
        flexDirection: "col",
        alignItems: 'center',
        boxShadowColor: '#000',
        boxShadowOffset: {
          width: 0,
          height: 2,
        },
        boxShadowOpacity: 0.25,
        boxShadowRadius: 4,
        elevation: 5,
    },
    buttonView: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 10,
    },


});