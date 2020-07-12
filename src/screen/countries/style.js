import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  title: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 25,
    marginVertical: 10,
    fontWeight: "bold",
  },
  item: {
    borderBottomColor: "transparent",
    marginVertical: 6,
    marginHorizontal: 15,
    borderRadius: 6,
    backgroundColor: "white",
    height: 65,
    padding: 10,
    fontSize: 18,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default style;
