
import { StyleSheet, Text, View, FlatList} from "react-native";
import Dados from "./dados/jogos.js";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <View>
      <Botao
        Logo='md-game-controller' texto="jogos" cor="blue"
        Logo2='apps' texto2="aplicativos" cor2="red">
      </Botao>
      <Botao
        Logo='md-game-controller' texto="filmes" cor="pink"
        Logo2='apps' texto2="musicas" cor2="darkgreen">
      </Botao>
      </View> 
      <View>
        <FlatList
          horizontal={true}
          data={Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

            <Jogos
              titulo = {item.nome}
              imagem = {item.imagem}
              valor = {item.valor}
            />   
          )}
        />
      </View>
    </View>
  );    
}
