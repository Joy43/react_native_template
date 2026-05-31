import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useRouter } from 'expo-router';
import { useColorScheme } from '@/app/hook/Usecolorscheme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  rightAction,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();
  const router = useRouter();

  return (
    <View className={`flex-row items-center justify-between px-4 py-3 ${
      isDark ? 'bg-neutral-900' : 'bg-white'
    } ${className}`}>
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDark ? colors.text.primary : colors.text.primary}
            />
          </TouchableOpacity>
        )}
        <Text className={`text-xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </Text>
      </View>
      
      {rightAction && <View>{rightAction}</View>}
    </View>
  );
};