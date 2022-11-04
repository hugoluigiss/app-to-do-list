
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Participant } from './components/tarefa';

export default function App() {

  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefaName, setTarefaName] = useState('');


  function handleParticipantAdd() {
    
    if(tarefaName == ''){
      return Alert.alert('Digite algo', 'Não foi possivel indentificar um texto, porfavor digite e depois adicione.')
      
    }

    setTarefas(prevState =>[...prevState, tarefaName ]);
    setTarefaName('');
  }

  function handleParticipantRemove(name: string) {
    

    Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
      {
        text: 'Confirmar',
        onPress: () => {
          setTarefas(prevState => prevState.filter(tarefas => tarefas !== name))
        }
        
      },
      {
        text: 'Cancelar',
       
      }
    ])

  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.image} source={require('./assets/todoLogo.png')} />

      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#6B6B6B"
          onChangeText={setTarefaName}
          value={tarefaName}
        />
        <TouchableOpacity style={styles.button}  onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerContador}>
        <View style={styles.criadas}>
          <Text style={styles.tituloCriadas}>Criadas</Text><Text style={styles.numeroContador}>{tarefas.length}</Text>
        </View>
        <View style={styles.concluidas}>
          <Text style={styles.tituloConcluidos}>Concluídas</Text><Text style={styles.numeroContador}>0</Text>
        </View>
      </View>

      <View style={styles.divisor}></View>

      <FlatList
        
        data={tarefas}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style = {styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer
            </Text>
            
          )}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    height: "100%",
    width: '100%',
  },
  containerHeader: {
    backgroundColor: '#0D0D0D',
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 150,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  button: {
    backgroundColor: '#4EA8DE',
    height: 60,
    width: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
  input: {
    backgroundColor: '#333333',
    color: "white",
    paddingLeft: 15,
    fontSize: 17,
    height: 60,
    width: "70%",
    borderRadius: 5,
  },
  containerContador: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 30,
    alignItems: 'center',

  },
  criadas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  concluidas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCriadas: {
    color: '#4EA8DE',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
  tituloConcluidos: {
    color: '#8284FA',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },

  numeroContador:{
    backgroundColor: '#333333',
    color: 'white',
    padding: 5,
  },
  divisor:{
    margin: 30,
    flexDirection: 'row',
    textAlign: "center",
    borderBottomColor: '#333333',
    borderBottomWidth: 2,
    
  },
  listEmptyText:{
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
});
