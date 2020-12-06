import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#728C81'
    },
    content: {
        flexDirection: 'column',
        // justifyContent: 'center',
        marginHorizontal: '2.5%',
        marginVertical: '2.5%',
        flex: 1
    },
    list: {
        backgroundColor: '#FFF',
        marginHorizontal: '2.5%'
    },
    title: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF'
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 20
    },
    text:{
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 18,
        color: '#FFF',
        marginTop: 20

    },
    input: {
        backgroundColor: "#FFF",
        marginBottom: 15
    },
    button: {
        backgroundColor: '#1b322c',
    },
    buttonText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF'
    },
    link:{
        color: '#FFF',
        marginTop: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 10,
        backgroundColor: '#1b322c'
    }
});


export default globalStyles;