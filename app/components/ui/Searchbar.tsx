import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/app/hook/Usecolorscheme';


interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void;
  showFilter?: boolean;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  onFilterPress,
  showFilter = false,
  className = '',
}) => {
  const { colors, isDark } = useColorScheme();

  return (
    <View className={`flex-row items-center ${className}`}>
      <View 
        className={`flex-1 flex-row items-center rounded-xl px-4 py-3 ${
          isDark ? 'bg-neutral-800' : 'bg-neutral-100'
        }`}
      >
        <Ionicons
          name="search-outline"
          size={20}
          color={isDark ? colors.text.tertiary : colors.text.secondary}
        />
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isDark ? colors.text.tertiary : colors.text.secondary}
          className={`flex-1 ml-3 text-base ${isDark ? 'text-white' : 'text-neutral-900'}`}
        />
        
        {value.length > 0 && (
          <TouchableOpacity onPress={() => onChangeText('')}>
            <Ionicons
              name="close-circle"
              size={18}
              color={isDark ? colors.text.tertiary : colors.text.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
      
      {showFilter && onFilterPress && (
        <TouchableOpacity
          onPress={onFilterPress}
          className={`ml-3 p-3 rounded-xl ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}
        >
          <Ionicons
            name="options-outline"
            size={20}
            color={isDark ? colors.text.primary : colors.text.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};