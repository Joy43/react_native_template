import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';


interface VoiceAIButtonProps {
  onPress: () => void;
  isListening?: boolean;
}

export const VoiceAIButton: React.FC<VoiceAIButtonProps> = ({
  onPress,
  isListening = false,
}) => {
  const { isDark } = useColorScheme();
  const [pulseAnim] = useState(new Animated.Value(1));

  React.useEffect(() => {
    if (isListening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isListening]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="items-center"
    >
      <Animated.View
        className={`w-16 h-16 rounded-full items-center justify-center ${
          isListening ? 'bg-error-500' : isDark ? 'bg-primary-400' : 'bg-primary-500'
        }`}
        style={{ transform: [{ scale: pulseAnim }] }}
      >
        <Ionicons
          name={isListening ? 'mic' : 'mic-outline'}
          size={28}
          color="#ffffff"
        />
      </Animated.View>
      
      <Text className={`mt-2 text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
        {isListening ? 'Listening...' : 'Voice Command'}
      </Text>
    </TouchableOpacity>
  );
};