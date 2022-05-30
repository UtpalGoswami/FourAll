import React, {useRef} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {colors} from '../constants';
const CodeScreen = ({
  setCodeOne,
  setCodeTwo,
  setCodeThree,
  setCodeFour,
  setCodeFive,
  setCodeSix,
}) => {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeOne(val.replace(/[^0-9]/g, ''));
          if (val) {
            ref_input2.current.focus();
          }
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        autoFocus={true}
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current.focus()}
        textAlign={'center'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeTwo(val.replace(/[^0-9]/g, ''));
          if (val) {
            ref_input3.current.focus();
          }
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => ref_input3.current.focus()}
        ref={ref_input2}
        textAlign={'center'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeThree(val.replace(/[^0-9]/g, ''));
          if (val) {
            ref_input4.current.focus();
          }
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => ref_input4.current.focus()}
        ref={ref_input3}
        textAlign={'center'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeFour(val.replace(/[^0-9]/g, ''));
          if (val) {
            ref_input5.current.focus();
          }
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => ref_input5.current.focus()}
        ref={ref_input4}
        textAlign={'center'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeFive(val.replace(/[^0-9]/g, ''));
          if (val) {
            ref_input6.current.focus();
          }
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => ref_input6.current.focus()}
        ref={ref_input5}
        textAlign={'center'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={val => {
          setCodeSix(val.replace(/[^0-9]/g, ''));
        }}
        secureTextEntry={false}
        maxLength={1}
        keyboardType="numeric"
        ref={ref_input6}
        textAlign={'center'}
      />
    </View>
  );
};
export default CodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInput: {
    width: 40,
    color: colors.black,
    fontSize: 14,
    fontWeight: '900',
    borderBottomColor: colors.authBtn,
    borderBottomWidth: 0.8,
  },
});
