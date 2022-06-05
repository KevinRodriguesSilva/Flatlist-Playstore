import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Jogos({ titulo, valor, imagem}) {
    return (
    <TouchableOpacity style={estilo.containerJogos}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
    </TouchableOpacity>
    );

}

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        aligntItems: "center",
        justifytContent: "space-between",
        widht: 170,
        height: 300,
        marginLeft: 38
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width:200,
        height:200
    },
});






