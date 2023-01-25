import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00a94b',
    },
    header:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 300,
        marginTop: 32,
        borderBottomRightRadius: 80,
    },
    headerSingUp:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 200,
        marginTop: 32,
        borderBottomRightRadius: 80,
    },
    inputView:{
        marginTop: 20,
    },
    input:{
        //backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        marginTop: 12,
        marginStart: 14,
        marginEnd: 14,
        paddingEnd: 14,
        paddingStart: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 12,
        flexDirection: 'row',
    },
    bottomView:{
        marginTop: 12,
        marginStart: 14,
        marginEnd: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom:{
        backgroundColor: '#FFF',
        width: '80%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    content:{
        marginStart: 14,
        marginEnd: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBottom:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    bottomCad:{
        marginTop: 12,
    },
    textCad:{
        textTransform: 'uppercase',
        fontSize: 18,
    },
})