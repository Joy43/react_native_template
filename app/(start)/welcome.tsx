import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onboarding } from '../constants';

const { width, height } = Dimensions.get('window');

const C = {
  bg:      '#0A0E27',
  surface: '#1A1F3A',
  gold:    '#C9A84C',
  white:   '#FFFFFF',
  muted:   '#A0A8B8',
  border:  '#2A3050',
};

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const isLast = activeIndex === onboarding.length - 1;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (isLast) {
      router.replace('/(auth)/login');
    } else {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
    }
  };

  const handleSkip = () => router.replace('/(auth)/login');

  return (
    <SafeAreaView style={s.safe} edges={['top', 'bottom']}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />

      {/* ── Skip button ─────────────────────────────────────────────────── */}
      <View style={s.topBar}>
        <Text style={s.logoText}>SyncStyle</Text>
        {!isLast && (
          <TouchableOpacity onPress={handleSkip}>
            <Text style={s.skipText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* ── Slides ──────────────────────────────────────────────────────── */}
      <FlatList
        ref={flatListRef}
        data={onboarding}
        keyExtractor={(item) => String(item.id)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={s.slide}>
            {/* Image card */}
            <View style={s.imageCard}>
              <Image
                source={item.image}
                style={s.slideImage}
                resizeMode="cover"
              />
              {/* Gold shimmer overlay at bottom of image */}
              <View style={s.imageOverlay} />
            </View>

            {/* Text */}
            <Text style={s.slideTitle}>{item.title}</Text>
            <Text style={s.slideDesc}>{item.description}</Text>
          </View>
        )}
      />

      {/* ── Bottom controls ─────────────────────────────────────────────── */}
      <View style={s.bottomBar}>
        {/* Dot indicators */}
        <View style={s.dotsRow}>
          {onboarding.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 28, 8],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.4, 1, 0.4],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[s.dot, { width: dotWidth, opacity }]}
              />
            );
          })}
        </View>

        {/* Next / Get Started button */}
        <TouchableOpacity style={s.goldBtn} onPress={handleNext} activeOpacity={0.85}>
          <Text style={s.goldBtnText}>
            {isLast ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>

        {/* Sign in link on last slide */}
        {isLast && (
          <TouchableOpacity onPress={handleSkip} style={s.signInRow}>
            <Text style={s.signInText}>
              Already have an account?{' '}
              <Text style={{ color: C.gold, fontWeight: '700' }}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },

  // Top bar
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
  },
  logoText: { color: C.gold, fontSize: 22, fontWeight: '800', letterSpacing: 0.8 },
  skipText: { color: C.muted, fontSize: 14, fontWeight: '600' },

  // Slide
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  imageCard: {
    width: width - 48,
    height: height * 0.42,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: C.border,
    marginBottom: 32,
    backgroundColor: C.surface,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(10,14,39,0.4)',
  },
  slideTitle: {
    color: C.white,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  slideDesc: {
    color: C.muted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 4,
  },

  // Bottom
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    paddingTop: 8,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: C.gold,
  },
  goldBtn: {
    backgroundColor: C.gold,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  goldBtnText: { color: '#1A1200', fontSize: 16, fontWeight: '700' },

  signInRow: { alignItems: 'center', paddingBottom: 4 },
  signInText: { color: C.muted, fontSize: 14 },
});
