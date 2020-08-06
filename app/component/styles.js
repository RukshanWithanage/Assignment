import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopLeftRadius: 10,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        borderTopRightRadius: 10
    },
    imageContainer: {
        flex: 1
    },
    imageView: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    }
});
export default styles;
