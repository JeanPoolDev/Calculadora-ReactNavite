import CalculatorBottom from '@/components/CalculatorBottom';
import CustomText from '@/components/CustomText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      {/* {Resultados} */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <CustomText variant='h1'>
          50 x 500
        </CustomText>

        <CustomText variant='h2'>
          2500
        </CustomText>
      </View>

      {/* {Filas de botones} */}
      <View style={globalStyles.row}>
        <CalculatorBottom
          label='C'
          onPress={() => console.log('c')}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorBottom
          label='+/-'
          onPress={() => console.log('c')}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorBottom
          label='del'
          onPress={() => console.log('c')}
          blackText
          color={Colors.lightGray}
        />
        <CalculatorBottom
          label='÷'
          onPress={() => console.log('c')}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row} >
        <CalculatorBottom
          label='7'
          onPress={() => console.log('7')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='8'
          onPress={() => console.log('8')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='9'
          onPress={() => console.log('9')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='x'
          onPress={() => console.log('x')}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row} >
        <CalculatorBottom
          label='4'
          onPress={() => console.log('4')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='5'
          onPress={() => console.log('5')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='6'
          onPress={() => console.log('6')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='-'
          onPress={() => console.log('-')}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row} >
        <CalculatorBottom
          label='1'
          onPress={() => console.log('1')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='2'
          onPress={() => console.log('2')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='3'
          onPress={() => console.log('3')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='+'
          onPress={() => console.log('+')}
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row} >
        <CalculatorBottom
          label='0'
          doubleSize
          onPress={() => console.log('0')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='.'
          onPress={() => console.log('.')}
          color={Colors.darkGray}
        />
        <CalculatorBottom
          label='='
          onPress={() => console.log('=')}
          color={Colors.orange}
        />
      </View>


    </View>
  )
}

export default CalculatorApp;