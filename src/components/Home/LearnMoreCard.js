import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import * as COLORS from '../../constants/colors';
import CTACard from '../../components/Misc/CTACard';

const {height, width} = Dimensions.get('window');

const LearnMoreCard = ({navigation}) => {
  return (
    <CTACard
      navigation={navigation}
      icon={'book'}
      text={'VIEW QUICK GUIDE TO BLAB'}
      subText={'Learn how to use Blab to the fullest!'}
      action={() => {
        navigation.navigate('WelcomeScreen');
      }}
    />
  );
};

export default LearnMoreCard;
