import { StyleSheet } from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#728C81'
    },
    content: {
        flexDirection: 'column',
        marginHorizontal: '2.5%',
        // marginVertical: '2.5%',
        marginTop: 10,
        flex: 1,
    },
    contentSmall: {
        flexDirection: 'column',
        // justifyContent: 'center',
        marginHorizontal: '20%',
        marginVertical: '2.5%',
        flex: 1
    },
    durationCard:{
        width: '50%'
    },
    durationButton:{
        width: 40,
        height: 40
    }, 
    durationButtonText:{
        color: "#FFF",
        fontSize: 16
    }, 
    list: {
        backgroundColor: '#FFF',
        marginHorizontal: '2.5%',
    },
    footer: {
        backgroundColor: 'transparent', 
        elevation: 0,

    },
    topbarButton:{
        backgroundColor: 'transparent',
        marginHorizontal: 5,
        paddingHorizontal: 0,
        height: 50,
        width: 50,
        elevation: 0,
        justifyContent: 'center',
    },
    topBarIcon:{
        width: 25,
        fontSize: 25, 
        color:'#FFF'
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
        fontSize: 18,
        color: '#FFF',
        marginTop: 10

    },
    input: {
        backgroundColor: "#FFF",
        marginBottom: 15
    },
    durationInput:{
        height: 40,
        width: 70,
        borderWidth:1,
        marginHorizontal: 10,
        // textAlignVertical: 'center',
        textAlign: 'center',
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
        margin: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#1b322c'
    },
    ledBoard:{
        backgroundColor: "#000",
        borderWidth:2,
        width: 567,
        padding: 20,
        elevation:5,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 4
    },
    topLedsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    DigitDisplayContainer: {
        flexDirection: 'row',
        height: 142,
    },
    DigitDisplay: {
        width: 83,
        height: 142,
        marginRight: 13,
        marginLeft: 12,

    },
    topLedButton:{
        height:40,
        width: 14,
        borderRadius:0,
        marginRight: 13
    },
    verticalLedButton:{
        height:58,
        width:10,
        borderRadius:0,
        position: 'relative'
    },
    horizontalLedButton:{
        height:10,
        width:50,
        borderRadius:0,
        position: 'relative'
    },
    pointLedButton:{
        height:10,
        width:10,
        borderRadius:0,
        position: 'relative'
    },
    segmentA: {
        top: 0,
        left: 11,
    },
    segmentB: {
        top: -6,
        left: 63,
    },
    segmentC: {
        top: 0,
        left: 63,
    },
    segmentD: {
        top: -5,
        left: 11,
    },
    segmentE: {
        top: -70,
        left: -1,
    },
    segmentF: {
        top: -192,
        left: -1,
    },
    segmentG: {
        top: -194,
        left: 11,
    },
    segmentP: {
        top: -145,
        left: 80,
    },
    ledOn:{
        backgroundColor: 'red'
    },
    ledOff:{
        backgroundColor: '#622f2f'
    },
    smallLedBoard:{
        backgroundColor: "#000",
        borderWidth:2,
        width: 292,
        padding: 10,
        elevation:5,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius: 2
    },
    smallTopLedsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    smallTopLed:{
        height:20,
        width: 7,
        borderRadius:0,
        marginRight: 6.5
    },
    smallDigitDisplayContainer: {
        flexDirection: 'row',
    },
    smallDigitDisplay: {
        width: 41.5,
        height: 66,
        marginRight: 6.5,
        marginLeft: 6,
    },
    smallVerticalLed:{
        height:29,
        width:5,
        borderRadius:0,
        position: 'relative'
    },
    smallHorizontalLed:{
        height:5,
        width:25,
        borderRadius:0,
        position: 'relative'
    },
    smallPointLed:{
        height:5,
        width:5,
        borderRadius:0,
        position: 'relative'
    },
    smallSegmentA: {
        top: 0,
        left: 5.5,
    },
    smallSegmentB: {
        top: -3,
        left: 31.5,
    },
    smallSegmentC: {
        top: 0,
        left: 31.5,
    },
    smallSegmentD: {
        top: -2.5,
        left: 5.5,
    },
    smallSegmentE: {
        top: -35,
        left: -0.5,
    },
    smallSegmentF: {
        top: -96,
        left: -0.5,
    },
    smallSegmentG: {
        top: -96,
        left: 5.5,
    },
    smallSegmentP: {
        top: -72.5,
        left: 40,
    },
});


export default globalStyles;