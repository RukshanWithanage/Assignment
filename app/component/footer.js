import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

class FooterBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image
                            resizeMode={'center'}
                            style={styles.imageView}
                            source={require('../assets/orange_lorry.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image
                            resizeMode={'center'}
                            style={styles.imageView}
                            source={require('../assets/navigation.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image
                            resizeMode={'center'}
                            style={styles.imageView}
                            source={require('../assets/book.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image
                            resizeMode={'center'}
                            style={styles.imageView}
                            source={require('../assets/settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



export default FooterBar;