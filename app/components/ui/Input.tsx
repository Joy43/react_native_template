import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
;
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  error,
  leftIcon,
  rightIcon,
  multiline = false,
  numberOfLines = 1,
  editable = true,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const borderColor = error 
    ? colors.error 
    : isFocused 
      ? colors.primary 
      : isDark 
        ? colors.border.medium 
        : colors.border.light;

  return (
    <View className={`mb-4 ${className}`}>
      {label && (
        <Text className={`mb-2 text-sm font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
          {label}
        </Text>
      )}
      
      <View 
        className={`flex-row items-center rounded-xl px-4 ${
          multiline ? 'py-3' : 'py-4'
        } ${isDark ? 'bg-neutral-800' : 'bg-neutral-50'}`}
        style={{ borderWidth: 1.5, borderColor }}
      >
        {leftIcon && (
          <View className="mr-3">
            {leftIcon}
          </View>
        )}
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isDark ? colors.text.tertiary : colors.text.secondary}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          className={`flex-1 text-base ${isDark ? 'text-white' : 'text-neutral-900'}`}
          style={{ 
            minHeight: multiline ? numberOfLines * 20 : undefined,
            textAlignVertical: multiline ? 'top' : 'center',
          }}
        />
        
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={() => setShowPassword(!showPassword)}
            className="ml-3"
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={isDark ? colors.text.tertiary : colors.text.secondary}
            />
          </TouchableOpacity>
        )}
        
        {rightIcon && !secureTextEntry && (
          <View className="ml-3">
            {rightIcon}
          </View>
        )}
      </View>
      
      {error && (
        <Text className="mt-1 text-sm text-error-500">
          {error}
        </Text>
      )}
    </View>
  );
};