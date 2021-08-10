import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet } from 'react-native';
import Globals from '../../../GlobalVariables';


const PrivacySelector = ({onChange, value}) => {
    const [isFocused5, setFocus5] = useState(false);
    return (
        <RNPickerSelect
            onValueChange={(value) => onChange('Privacy', value)}
            value={value}

            items={[
                { label: 'Public', value: 'Public' },
                { label: 'Private', value: 'Private' },
            ]}
            style={{inputIOS: {borderWidth: 1,
                borderColor: value !== null || isFocused5 ? '#7b7b7b' : '#C4C4C4',
                padding: Globals.HR(8),
                width: '88%',
                marginLeft: Globals.WR(20), 
                marginTop: Globals.HR(10),
                marginBottom: Globals.HR(10),
                flex: 1,
                fontSize: Globals.HR(14)}}}
            
            onOpen={() => setFocus5(true)}
            onClose={() => setFocus5(false)}
            placeholder={{
                label: 'Public/Private',
                value: null,
                
            }}
        />
    );
};

export default PrivacySelector;

const styles = StyleSheet.create({
    InputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#C4C4C4',
        padding: 8,
        width: '80%',
        margin: 10
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: 8,
        width: '80%',
        marginLeft: 20,
        marginTop: 10
    },
    inputAndroid: {
        borderWidth: 1,
        borderColor: '#C4C4C4',
        padding: 8,
        width: '80%',
        marginLeft: 20,
        marginTop: 10
    },
  });
