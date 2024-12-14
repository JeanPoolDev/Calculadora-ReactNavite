import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { Text, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  doubleSize?: boolean;
}


const CalculatorBottom = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 170 : 75,
      })}
      onPress={() => {
        Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        )
        onPress()
      }}
    >
      <Text style={{
        ...globalStyles.buttonText,
        color: blackText ? 'black' : 'white'
      }} >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorBottom;