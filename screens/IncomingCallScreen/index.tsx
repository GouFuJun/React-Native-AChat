import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Pressable, SafeAreaView, StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import commonStyles from '../../common/style';
import styles from './style';

import { FontAwesome, MaterialCommunityIcons } from '../../common/icons';
import { dangerColor, successColor } from '../../constants/theme';

export default function IncomingCallScreen () {

    return (
        <>
            <StatusBar barStyle="light-content" />
            <LinearGradient
                colors={['rgba(255,50,50,0.5)', '#rgba(50,255,50,0.4)', 'rgba(25,25,255,0.6)']}
                start={{x: -0.5, y: 0.1}}
                end={{x: 1.5, y: 0.8}}
                style={commonStyles.flex}
            >
                <View style={[commonStyles.flex, {paddingTop: StatusBar.currentHeight, position: 'relative', zIndex:1}]}>
                    <Text style={styles.name}>From wang</Text>
                    <Text style={styles.phone}>+ 86 188****2121</Text>
                </View>
                <BlurView blurAmount={50} blurType="dark" style={[commonStyles.flex]} />
                <View style={[commonStyles.row, styles.buttonContainer, {position: 'relative', zIndex: 1}]}>
                    <Pressable style={[styles.button, {backgroundColor: dangerColor}]}>
                        <MaterialCommunityIcons name="phone-hangup" size={32} color="white" />
                    </Pressable>
                    <Pressable style={[styles.button, {backgroundColor: successColor}]}>
                        <FontAwesome name="share" size={24} color="white" />
                    </Pressable>
                </View>
                <SafeAreaView />
            </LinearGradient>
        </>
    );
}

