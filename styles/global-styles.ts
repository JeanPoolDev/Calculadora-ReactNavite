import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: 400,
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    fontWeight: 400,
    textAlign: 'right',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },

  button: {
    height: 75,
    width: 75,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: 300,
    fontFamily: 'SpaceMono'
  }


})