import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Platform,StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LibraryDetails = () => {
  const navigation = useNavigation();
  const data = [
    { name: "Book1", available: "Yes" },
    { name: "Book2", available: "Yes" },
    { name: "Book3", available: "Yes" },
    { name: "Book4", available: "No" },
  ];

  return (
    <View style={styles.mainCont}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Library Details</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.headerCell, { width: 100 }]}>Book</Text>
            <Text style={[styles.cell, styles.headerCell, { width: 150 }]}>Available</Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Request</Text>
          </View>
          {data.map((item, rowIndex) => (
            <View key={rowIndex}>
              <View style={styles.row}>
                <Text style={[styles.cell, styles.bodyCell, { width: 100 }]}>{item.name}</Text>
                <Text style={[styles.cell, styles.bodyCell, { width: 120 }]}>{item.available}</Text>
                <View style={[styles.cell, styles.btnContainer, { flex: 1 }]}>
                  <TouchableOpacity style={[styles.button, styles.takeButton]}>
                    <Text style={styles.buttonText}>Take</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.returnButton]}>
                    <Text style={styles.buttonText}>Return</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.separator} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#585E97',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  scrollView: {
    paddingHorizontal: 2,
  },
  table: {
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    padding: 8,
    alignItems: 'center', 
  },
  cell: {
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  headerCell: {
    backgroundColor: "#E7EFF3",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  bodyCell: {
    backgroundColor: "#FFF",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 18,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  button: {
    height: 25,
    paddingHorizontal: 15,
    marginRight:5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  takeButton: {
    backgroundColor: "#88C53B",
  },
  returnButton: {
    backgroundColor: "#FFAA47",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default LibraryDetails;
