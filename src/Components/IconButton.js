import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const IconButton = ({
  onPress,
  iconName,
  iconColor,
  iconSize,
  iconStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        style={iconStyle}
        name={iconName}
        color={iconColor}
        size={iconSize}
      />
    </TouchableOpacity>
  )
}

// const styles = StyleSheet.create({})
