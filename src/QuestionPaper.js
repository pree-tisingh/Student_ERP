import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

const QuestionPaper = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSubjectChange = (value) => setSelectedSubject(value);
  const handleYearChange = (value) => setSelectedYear(value);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={25} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Exam Papers</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={25} color="#fff" style={styles.icon} />
          <Icon name="notifications" size={25} color="#fff" style={styles.icon} />
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedSubject}
            style={styles.dropdown}
            onValueChange={handleSubjectChange}
          >
            <Picker.Item label="Subject" value="" />
            <Picker.Item label="Mathematics" value="math" />
            <Picker.Item label="Science" value="science" />
            
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedYear}
            style={styles.dropdown}
            onValueChange={handleYearChange}
          >
            <Picker.Item label="Year" value="" />
            <Picker.Item label="2022-23" value="2022-23" />
            <Picker.Item label="2021-22" value="2021-22" />
           
          </Picker>
        </View>
      </View>
      <View style={styles.content}>
        <Image 
          source={require('../assets/img/exam12.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9B9B9',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#585E97',
    paddingHorizontal: 15,
    paddingVertical: 15,
    zIndex: 1000,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 70,
    paddingHorizontal: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#585E97',
    padding: 10,
    backgroundColor: '#fff',
    width: '49%',
  },
  dropdown: {
    width: '100%',
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '87%',  
    height: undefined, 
    aspectRatio: 3 / 4, 
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 30,
  },
  pickerItem: {
    color: '#3E4EDA',
  },
  button: {
    backgroundColor: '#4F5690',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '75%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default QuestionPaper;
