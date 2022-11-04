import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';




type Props = {
    name: string;
    onRemove: () => void;
}


export function Participant({name, onRemove}: Props) {
    return (

        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={styles.tarefa}>{name}</Text>
            </View>
            <View style={styles.container2}>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    <Ionicons name="md-trash" size={18} color="white" />
                    </Text>
            </TouchableOpacity>
            </View>
        </View>



    )
};


const styles = StyleSheet.create({

    container: {
        
        minHeight: 56,
        backgroundColor: 'rgb(53, 51, 51)',
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,

    },

    tarefa:{
        color: '#fff',
        fontSize: 16,

    },

    button: {
        width: 26,
        height: 26,
        borderRadius: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
  
      },
    
      buttonText: {
        color: 'white',
        fontSize: 30,
        
      },

      container1:{
        width: '80%',
      },
      container2:{
        width: '10%',
      },


});