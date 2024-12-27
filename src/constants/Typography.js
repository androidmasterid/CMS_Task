import { StyleSheet } from "react-native";
import Fonts from "./fonts";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "./dimentions";
import { dpWidth } from "../utilities/SizeInDp";

const Typography = StyleSheet.create({
  Semibold13: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(3),
    lineHeight: 20,
  },
  Semibold16: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(4),
    lineHeight: 20,
  },
  SemiBold20: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(7.6),
    lineHeight: 45,
  },
  Semibold24: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(6.1),
    lineHeight: 36,
  },
  Semibold28: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(7),
    lineHeight: 42,
  },

  Semibold32: {
    fontFamily: Fonts.SemiBold,
    fontSize: wp(8),
    lineHeight: 48,
  },
  Medium13: {
    fontFamily: Fonts.Medium,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Medium16: {
    fontFamily: Fonts.Medium,
    fontSize: wp(4),
    lineHeight: 24,
  },

  Bold14: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  Bold13: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3),
    lineHeight: 21,
  },

  Bold16: {
    fontFamily: Fonts.Bold,
    fontSize: wp(4),
    lineHeight: 21,
  },
  Bold20: {
    fontFamily: Fonts.Bold,
    fontSize: wp(5),
    lineHeight: 21,
  },

  Italic13: {
    fontFamily: Fonts.Italic,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Regular13: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Regular14: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  Regular12: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3),
    lineHeight: 21,
  },
  Regular18: {
    fontFamily: Fonts.Regular,
    fontSize: wp(4),
    lineHeight: 21,
  },
  Medium12: {
    fontFamily: Fonts.Medium,
    fontSize: wp(2.8),
    lineHeight: 21,
  },
  TostStyle: { zIndex: 3000, top: dpWidth(1) },
});

export default Typography;
