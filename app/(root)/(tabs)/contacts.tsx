import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const CARD_W = width * 0.58;

// ── Mock Data ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { id: '1', label: 'Hair',        icon: 'cut-outline' },
  { id: '2', label: 'Tattoo',      icon: 'color-palette-outline' },
  { id: '3', label: 'Lashes',      icon: 'eye-outline' },
  { id: '4', label: 'Brows',       icon: 'brush-outline' },
  { id: '5', label: 'Nails',       icon: 'flower-outline' },
  { id: '6', label: 'Fitness',     icon: 'barbell-outline' },
];

const PROS = [
  {
    id: '1',
    name: 'Devon James',
    service: 'Hair',
    rating: 5,
    reviews: 234,
    distance: '1.2 mi away · Brooklyn, NY',
    price: '$45',
    image: require('../../../assets/images/pro1.png'),
    liked: false,
  },
  {
    id: '2',
    name: 'Sofia Reyes',
    service: 'Makeup',
    rating: 4.9,
    reviews: 189,
    distance: '0.8 mi away · Manhattan, NY',
    price: '$60',
    image: require('../../../assets/images/pro2.png'),
    liked: true,
  },
];

// ── Pro Card ──────────────────────────────────────────────────────────────────
function ProCard({ item }: { item: typeof PROS[0] }) {
  const [liked, setLiked] = useState(item.liked);
  return (
    <TouchableOpacity
      className="mr-4 rounded-3xl overflow-hidden"
      style={{ width: CARD_W }}
      activeOpacity={0.9}
    >
      <View className="relative" style={{ height: CARD_W * 1.3 }}>
        <Image source={item.image} className="absolute inset-0 w-full h-full" resizeMode="cover" />

        {/* Top badges */}
        <View className="absolute top-3 left-3 right-3 flex-row justify-between items-center">
          <View className="bg-black/60 rounded-full px-3 py-1 flex-row items-center gap-1">
            <Ionicons name="star" size={11} color="#E8B923" />
            <Text className="text-white text-xs font-bold">{item.rating} ({item.reviews})</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <View className="bg-black/60 rounded-full px-3 py-1">
              <Text className="text-white text-xs font-semibold">{item.service}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setLiked(!liked)}
              className="w-8 h-8 rounded-full bg-surface/80 items-center justify-center"
            >
              <Ionicons name={liked ? 'heart' : 'heart-outline'} size={16} color={liked ? '#EF4444' : '#fff'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom overlay */}
        <View className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-4 pt-8">
          <Text className="text-white font-bold text-base">{item.name}</Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="location-outline" size={12} color="#A0A8B8" />
            <Text className="text-muted text-xs ml-1">{item.distance}</Text>
          </View>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white text-xs">From <Text className="text-gold font-bold">{item.price}</Text></Text>
            <TouchableOpacity className="bg-gold px-3 py-1 rounded-full">
              <Text className="text-primary text-xs font-bold">Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ── Home Screen ───────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const [activeService, setActiveService] = useState('1');
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E27" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-3 pb-4">
          <View className="flex-row items-center gap-3">
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              className="w-11 h-11 rounded-full"
            />
            <View>
              <Text className="text-muted text-xs">Welcome Back, John</Text>
              <Text className="text-white font-bold text-base leading-5" numberOfLines={1}>
                What are you looking for?
              </Text>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-surface rounded-xl items-center justify-center">
            <Ionicons name="notifications-outline" size={20} color="#FFFFFF" />
            {/* Badge */}
            <View className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold rounded-full" />
          </TouchableOpacity>
        </View>

        {/* ── Search Bar ──────────────────────────────────────────────────── */}
        <View className="px-5 mb-3">
          <View className="flex-row items-center bg-surface rounded-2xl px-4 h-12 gap-2">
            <Ionicons name="search-outline" size={18} color="#A0A8B8" />
            <TextInput
              className="flex-1 text-white text-sm"
              placeholder="Search pros and services..."
              placeholderTextColor="#A0A8B8"
              value={search}
              onChangeText={setSearch}
            />
            <TouchableOpacity className="w-8 h-8 bg-primary rounded-xl items-center justify-center">
              <Ionicons name="options-outline" size={16} color="#A0A8B8" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Location banner ─────────────────────────────────────────────── */}
        <View className="mx-5 mb-5 bg-surface rounded-2xl px-4 py-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-2 flex-1">
            <Ionicons name="location-outline" size={16} color="#A0A8B8" />
            <Text className="text-muted text-xs flex-1">Turn on location to see pros near you.</Text>
          </View>
          <TouchableOpacity className="bg-gold px-4 py-1.5 rounded-xl ml-2">
            <Text className="text-primary text-xs font-bold">Enable</Text>
          </TouchableOpacity>
        </View>

        {/* ── Popular Services ─────────────────────────────────────────────── */}
        <View className="px-5 mb-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white font-bold text-lg">Popular Services</Text>
            <TouchableOpacity>
              <Text className="text-gold text-sm font-semibold">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-1">
            {SERVICES.map((svc) => {
              const active = activeService === svc.id;
              return (
                <TouchableOpacity
                  key={svc.id}
                  onPress={() => setActiveService(svc.id)}
                  className="mx-1"
                  activeOpacity={0.8}
                >
                  <View
                    className={`w-[72px] h-[72px] rounded-2xl items-center justify-center mb-1 border ${
                      active
                        ? 'bg-surface border-gold'
                        : 'bg-surface border-surface'
                    }`}
                  >
                    <Ionicons
                      name={svc.icon as any}
                      size={26}
                      color={active ? '#E8B923' : '#A0A8B8'}
                    />
                  </View>
                  <Text
                    className={`text-center text-xs font-semibold ${active ? 'text-white' : 'text-muted'}`}
                  >
                    {svc.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* ── Top Rated Near You ───────────────────────────────────────────── */}
        <View className="mb-4">
          <View className="px-5 flex-row items-center justify-between mb-4">
            <Text className="text-white font-bold text-lg">Top Rated Near You</Text>
            <TouchableOpacity>
              <Text className="text-gold text-sm font-semibold">See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={PROS}
            keyExtractor={(i) => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            renderItem={({ item }) => <ProCard item={item} />}
          />
        </View>

        {/* ── Quick Booking CTA ─────────────────────────────────────────────── */}
        <View className="mx-5 bg-surface rounded-3xl p-5 flex-row items-center justify-between">
          <View className="flex-1 mr-4">
            <Text className="text-gold text-xs font-semibold mb-1">Upcoming</Text>
            <Text className="text-white font-bold text-base">No bookings yet</Text>
            <Text className="text-muted text-xs mt-1">Book your first appointment today!</Text>
          </View>
          <TouchableOpacity
            className="bg-gold px-5 py-3 rounded-2xl"
            onPress={() => {}}
          >
            <Text className="text-primary font-bold text-sm">Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
