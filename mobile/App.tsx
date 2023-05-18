import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native'

import blurbg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NlWLogo from './src/assets/nlw-spacetime.svg'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })
  if (!hasLoadFonts) {
    return null
  }
  return (
    <ImageBackground
      source={blurbg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      {/* <Text className="font-title text-5xl text-gray-50">Olá Marcos</Text> */}

      <StyledStripes className="absolute left-2" />
      <View className=" flex-1 items-center justify-center gap-6">
        <NlWLogo />
        <View className="space-y-2">
          <Text className="leadind-tight text-center font-title text-2xl text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-50">
            {' '}
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="text-center font-alt text-sm uppercase">
            CADASTRAR lembranças
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        className="text-center font-body text-sm leading-relaxed text-gray-200
      "
      >
        Feito com amor Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
