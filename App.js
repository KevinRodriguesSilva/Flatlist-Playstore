
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao
        Logo='md-game-controller' texto="jogos" cor="blue"
        Logo2='apps' texto2="aplicativos" cor2="red">
      </Botao>
      <Botao
        Logo='md-game-controller' texto="filmes" cor="pink"
        Logo2='apps' texto2="musicas" cor2="darkgreen">
      </Botao>

     </View>
  );
}
