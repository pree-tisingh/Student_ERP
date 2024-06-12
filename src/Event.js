import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import logo from "../assets/img/logoSchool.png";
import holi from "../assets/img/holi.jpg";
import diwali from "../assets/img/diwali.jpg";

const EventDetails = ({ item }) => {
  const getImageForEvent = (eventName) => {
    switch (eventName) {
      case "Holi Event":
        return holi;
      case "Diwali Event":
        return diwali;
      default:
        return null;
    }
  };

  return (
    <View style={styles.eventDetailContainer}>
      <View style={styles.eventHeader}>
        <Image source={logo} style={styles.eventLogo} resizeMode="contain" />
        <View style={styles.eventInfo}>
          <Text style={styles.eventName}>{item.eventName}</Text>
          <Text style={styles.postTime}>{item.postTime}</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Image
        source={getImageForEvent(item.eventName)}
        style={styles.eventImage}
      />
      <Text style={styles.eventDesc}>{item.eventDesc}</Text>
    </View>
  );
};

const Events = () => {
  const navigation = useNavigation();

  const eventData = [
    {
      id: 1,
      eventName: "Holi Event",
      postTime: "2 hours ago",
      eventDesc:
        "We are excited to invite you to our Back to School Night on Thursday, September 8th from 6:00 pm to 8:00 pm.",
    },
    {
      id: 2,
      eventName: "Diwali Event",
      postTime: "2 hours ago",
      eventDesc:
        "We are excited to invite you to our Back to School Night on Thursday, September 8th from 6:00 pm to 8:00 pm.",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Events</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContent}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.schoolName}>DAV School</Text>
          <Text style={styles.location}>
            <Ionicons name="location-sharp" size={18} color="red" /> 5676 Raipur
            chhattisgarh india
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.totalEventsBtn}>
              <Text style={styles.totalEvent}>95 Events</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eventsContainer}>
          {eventData.map((item, index) => (
            <EventDetails item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingTop: "10%",
    paddingHorizontal: "8%",
    width: "100%",
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  headerContent: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: "90%",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  totalEventsBtn: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  totalEvent: {
    color: "#453CAC",
    fontSize: 14,
  },
  eventsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    width: "100%",
  },
  eventDetailContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  eventHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  eventLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: "contain",
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 12,
    color: "gray",
  },
  eventImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  eventDesc: {
    fontSize: 14,
    color: "#767BAA",
    paddingLeft: 7,
    paddingRight: 7,
  },
});

export default Events;
