import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '../hook/Usecolorscheme';
import { Header } from '../components/shared/Header';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';


export default function SignupScreen() {
  const router = useRouter();
  const { isDark } = useColorScheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Mock signup logic
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <Header title="Create Account" showBack />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="px-6 py-6"
          showsVerticalScrollIndicator={false}
        >
          <Text className={`text-base mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Join ShearSummit to book appointments with top professionals
          </Text>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            leftIcon={<Ionicons name="person-outline" size={20} color={isDark ? '#a3a3a3' : '#737373'} />}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={<Ionicons name="mail-outline" size={20} color={isDark ? '#a3a3a3' : '#737373'} />}
          />

          <Input
            label="Phone"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            leftIcon={<Ionicons name="call-outline" size={20} color={isDark ? '#a3a3a3' : '#737373'} />}
          />

          <Input
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={isDark ? '#a3a3a3' : '#737373'} />}
          />

          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={isDark ? '#a3a3a3' : '#737373'} />}
          />

          <Button
            onPress={handleSignup}
            title="Create Account"
            fullWidth
            size="lg"
            className="mt-4"
          />

          <View className="flex-row items-center justify-center mt-6">
            <Text className={`text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Already have an account?{' '}
            </Text>
            <Button
              onPress={() => router.back()}
              title="Sign In"
              variant="ghost"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}