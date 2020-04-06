import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import MyHome from "./../componants/myhome";
import C1 from "./../componants/c1";
import C2 from "./../componants/c2";
import My_tabs from "./../tabs/my_tabs";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#201465",
          height: "30%",
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}> Profile</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}
export default function My_drawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MyHome} />
      <Drawer.Screen name="List a business" component={C1} />
      <Drawer.Screen name="Create and Join Community" component={C2} />
      <Drawer.Screen name="My Business" component={My_tabs} />
    </Drawer.Navigator>
  );
}