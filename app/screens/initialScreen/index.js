
import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import { Rating } from 'react-native-ratings';
import FooterBar from '../../component/footer';

export default class initialScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            timeAndDate: '',
            Location: '',
            CurrentHuboReading: ''
        };
    }

    _resetData() {
        this.setState({
            isVisible: false,
            timeAndDate: '',
            Location: '',
            CurrentHuboReading: ''
        });
    }

    _modalVisibility() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const {
            isVisible,
            timeAndDate,
            Location,
            CurrentHuboReading
        } = this.state;

        let startDriverViewDetails = null;
        if (timeAndDate) {
            startDriverViewDetails = (
                <View style={styles.startDriverDetails}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ flex: 1 }}>{"Time and Date : " + this.state.timeAndDate}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ flex: 1 }}>{"Location : " + this.state.Location}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ flex: 1 }}>{"Current Hubo Reading :" + this.state.CurrentHuboReading}</Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Image style={styles.headerImage} resizeMode='stretch' source={require('./../../assets/header.png')} />
                <View style={styles.header}>
                    <View style={styles.subContainer}>
                        <View style={styles.columnContainer}>
                            <View style={styles.rowContainer}>
                                <Text style={styles.selectVehicle}>Select Vehicle</Text>
                            </View>
                            <Text style={styles.km}>114,0000km</Text>
                            <Text style={styles.hub}>Hubometer</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.subContainer}>
                        <View style={styles.columnContainer}>
                            <View style={styles.rowContainer}>
                                <Text style={styles.idle}>Idle</Text>
                            </View>
                            <Text style={styles.currentStatus}>Current Status</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={10}
                                showRating={false}
                            />
                        </View>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.subContainer}>
                        <View style={styles.columnContainer}>
                            <Text style={styles.hour}>3h</Text>
                            <Text style={styles.nextBreak}>Next Break due</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.startDrivingContainer}>
                        {startDriverViewDetails != null ? startDriverViewDetails : (
                            <TouchableOpacity style={styles.startButton} onPress={() => this._modalVisibility()}>
                                <Image resizeMode={'center'} style={styles.startDrivingImage} source={require('./../../assets/hand_click.png')} />
                            </TouchableOpacity>
                        )}
                        {startDriverViewDetails == null ? (<Text style={styles.startDriverText}>STRAT DRIVING</Text>) : null}

                    </View>
                </View>
                <View style={styles.rowContainerNew}>
                    <View style={styles.middleContainer}>
                        <Image resizeMode={'center'} style={styles.middleImage} source={require('./../../assets/bag_work.png')} />
                        <Text style={styles.middleText}>STRAT OTHER WORK</Text>
                    </View>
                    <View style={styles.middleContainerBlue}>
                        <Image resizeMode={'center'} style={styles.middleImage} source={require('./../../assets/rest.png')} />
                        <Text style={styles.middleText}>STRAT REST</Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.eodContainer}>
                        <Image resizeMode={'center'} style={styles.eodImage} source={require('./../../assets/end_time.png')} />
                        <Text style={styles.eodText}>END OF DAY</Text>
                    </View>
                </View>
                <View style={styles.footerDetails}>
                    <Text style={styles.footerDetailLineOne}>
                        Driver's Latest Remarks:
                    </Text>
                    <Text style={styles.footerLineTwo}>
                        Gate access code is 8237452
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <FooterBar />
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    opacity={10}
                    backfaceVisibility={'hidden'}
                    visible={isVisible}
                    onRequestClose={console.log('close')}>
                    <View style={styles.modelContainer}>
                        <Text style={styles.modalHeader}>Start Driving</Text>
                        <View style={styles.dateTimeContainer}>
                            <Text style={styles.dateTimeLabel}>Time and Date</Text>
                            <TextInput style={styles.modalInputTextContainer}
                                value={timeAndDate}
                                onChangeText={value =>
                                    this.setState({ timeAndDate: value })
                                } />
                        </View>
                        <View style={styles.modalRow}>
                            <Text style={styles.locationLabel}>Location</Text>
                            <TextInput style={styles.modalInputTextContainer}
                                value={Location}
                                onChangeText={value =>
                                    this.setState({ Location: value })
                                } />
                        </View>
                        <View style={styles.modalRow}>
                            <Text style={styles.locationLabel}>Current Hubo Reading</Text>
                            <TextInput style={styles.modalInputTextContainer}
                                value={CurrentHuboReading}
                                onChangeText={value =>
                                    this.setState({ CurrentHuboReading: value })
                                } />
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                onPress={() => this._modalVisibility()}
                                style={styles.startButtonContainer}>
                                <Text style={styles.startButtonTexet}> START</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalRow}>
                            <TouchableOpacity
                                onPress={() => this._modalVisibility()}
                                style={styles.cancelButtonContainer}>
                                <Text style={styles.cancelButtonText}> CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        )
    }
}