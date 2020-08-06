import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        height: 60,
        width: '100%',
        flexDirection: 'row'
    },
    subContainer: {
        flex: 1
    },
    columnContainer: {
        flexDirection: 'column',
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row',
        flex: 1
    },
    rowContainerNew: {
        flex: 1,
        flexDirection: 'row'
    },
    selectVehicle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
        color: 'gray',
        fontSize: 16
    },
    km: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        flex: 0.5,
        fontWeight: 'bold'
    },
    hub: {
        textAlignVertical: 'top',
        flex: 0.5,
        textAlign: 'center',
        color: 'gray'
    },
    separator: {
        width: 0.5,
        backgroundColor: 'gray'
    },
    idle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold'
    },
    currentStatus: {
        textAlign: 'center',
        textAlignVertical: 'bottom',
        flex: 0.5,
        fontWeight: 'normal',
        color: 'gray',
        fontSize: 16
    },
    hour: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'bottom',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    nextBreak: {
        textAlignVertical: 'top',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 14,
        color: 'gray'
    },
    startDrivingContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: '#dbfee5',
        borderRadius: 10,
        width: 250,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 25
    },
    startButton: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        marginTop: 10
    },
    startDrivingImage: {
        width: 45,
        height: 45,
        alignSelf: 'center',
    },
    startDriverText: {
        textAlignVertical: 'center',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    middleContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: '#fcf3b3',
        borderRadius: 10,
        height: 80,
        alignSelf: 'center'
    },
    middleContainerBlue: {
        margin: 20,
        flex: 1,
        backgroundColor: '#dbf0ff',
        borderRadius: 10,
        height: 80,
        alignSelf: 'center'
    },
    middleImage: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    middleText: {
        textAlign: 'center',
        textAlignVertical: 'top',
        flex: 1,
        fontWeight: '800',
        fontSize: 14,
        color: 'black'
    },
    eodContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: '#fee7e9',
        borderRadius: 10,
        width: 250,
        alignSelf: 'center'
    },
    eodImage: {
        width: 50,
        height: 45,
        alignSelf: 'center',
        marginTop: 10
    },
    eodText: {
        textAlignVertical: 'center',
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5
    },
    footerDetails: {
        flex: 0.4,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    footerDetailLineOne: {
        flex: 1,
        width: '100%',
        color: 'gray',
        marginLeft: 20
    },
    footerLineTwo: {
        flex: 1,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
        borderBottomColor: '#e6b1a3',
        borderBottomWidth: 1,
        marginBottom: 5,
        marginRight: 20
    },
    footerContainer: {
        flex: 0.4,
        backgroundColor: 'white'
    },
    modelContainer: {
        width: 300,
        height: 400,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 150,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 10,
        flexDirection: 'column',
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        elevation: 20,
        padding: 10,
    },
    modalHeader: {
        height: 60,
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    dateTimeContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column'
    },
    dateTimeLabel: {
        marginLeft: 10,
        marginRight: 5,
        color: 'gray',
        fontSize: 14,
        flex: 1,
        marginTop: 10
    },
    modalInputTextContainer: {
        marginLeft: 10,
        marginRight: 5,
        color: 'gray',
        fontSize: 14,
        fontWeight: "400",
        color: "black",
        height: 30,
        padding: 0,
        paddingLeft: 10,
        flex: 1,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e6b1a3'
    },
    modalRow: {
        flex: 1,
        width: '100%'
    },
    buttonRow: {
        flex: 1,
        width: '100%',
        marginTop: 20
    },
    locationLabel: {
        marginLeft: 10,
        marginRight: 5,
        color: 'gray',
        fontSize: 14,
        flex: 1,
        marginTop: 10
    },
    startButtonContainer: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: '#f95a32',
        width: 250,
        height: 50
    },
    startButtonTexet: {
        fontSize: 22,
        color: 'white',
        flex: 1,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    cancelButtonContainer: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        width: 250,
        height: 60
    },
    startDriverDetails: {
        flex: 1,
        flexDirection: 'column',
        width: 220,
        margin: 10,
        marginRight: 10
    },
    cancelButtonText: {
        fontSize: 18,
        color: '#f95a32',
        flex: 1,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    headerImage: {
        width: '100%',
        height: 140
    }
});
export default styles;
