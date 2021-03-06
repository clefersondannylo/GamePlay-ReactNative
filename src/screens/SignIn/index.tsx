import React from 'react'
import { View, Text, Image } from 'react-native'

import IllustrationImage from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export function SignIn() {
  const navigation = useNavigation()
  function handleSignIn() {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImage}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
      </View>
    </View>
  )
}
