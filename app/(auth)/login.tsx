import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const C = {
  bg: "#0A0E27",
  surface: "#1A1F3A",
  gold: "#C9A84C",
  white: "#FFFFFF",
  muted: "#A0A8B8",
  border: "#2A3050",
  inputBg: "#141829",
};

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "pro">("client");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  // ── Fake login: just navigate straight into the app ──────────────────────
  const handleLogin = () => {
    router.replace("/(root)/(tabs)/contacts");
  };

  const handleGuestEnter = () => {
    router.replace("/(root)/(tabs)/contacts");
  };

  return (
    <SafeAreaView style={s.safe} edges={["top", "bottom"]}>
      <StatusBar barStyle="light-content" backgroundColor={C.bg} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={s.scroll}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* ── Logo ───────────────────────────────────────────────────────── */}
          <View style={s.logoWrap}>
            <Text style={s.logo}>SyncStyle</Text>
            <Text style={s.tagline}>Pro booking. Elevated.</Text>
          </View>

          {/* ── Role Toggle ────────────────────────────────────────────────── */}
          <View style={s.toggle}>
            {(["client", "pro"] as const).map((r) => (
              <TouchableOpacity
                key={r}
                style={[s.toggleBtn, role === r && s.toggleBtnActive]}
                onPress={() => setRole(r)}
                activeOpacity={0.8}
              >
                <Text style={[s.toggleText, role === r && s.toggleTextActive]}>
                  {r === "client" ? "Client" : "Professional"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ── Heading ────────────────────────────────────────────────────── */}
          <Text style={s.heading}>Welcome back</Text>
          <Text style={s.subheading}>Sign in to continue</Text>

          {/* ── Email ──────────────────────────────────────────────────────── */}
          <View style={[s.inputWrap, emailFocused && s.inputFocused]}>
            <Ionicons name="mail-outline" size={18} color={C.muted} style={s.inputIcon} />
            <TextInput
              style={s.input}
              placeholder="Email address"
              placeholderTextColor={C.muted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>

          {/* ── Password ───────────────────────────────────────────────────── */}
          <View style={[s.inputWrap, passFocused && s.inputFocused]}>
            <Ionicons name="lock-closed-outline" size={18} color={C.muted} style={s.inputIcon} />
            <TextInput
              style={[s.input, { flex: 1 }]}
              placeholder="Password"
              placeholderTextColor={C.muted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => setPassFocused(true)}
              onBlur={() => setPassFocused(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ paddingRight: 4 }}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={18}
                color={C.muted}
              />
            </TouchableOpacity>
          </View>

          {/* ── Forgot password ────────────────────────────────────────────── */}
          <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 28 }}>
            <Text style={s.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* ── Sign In Button ─────────────────────────────────────────────── */}
          <TouchableOpacity style={s.goldBtn} onPress={handleLogin} activeOpacity={0.85}>
            <Text style={s.goldBtnText}>Sign In</Text>
          </TouchableOpacity>

          {/* ── Divider ────────────────────────────────────────────────────── */}
          <View style={s.divider}>
            <View style={s.dividerLine} />
            <Text style={s.dividerText}>or</Text>
            <View style={s.dividerLine} />
          </View>

          {/* ── Social buttons ─────────────────────────────────────────────── */}
          <View style={s.socialRow}>
            <TouchableOpacity style={s.socialBtn} onPress={handleGuestEnter} activeOpacity={0.8}>
              <Ionicons name="logo-google" size={20} color={C.white} />
              <Text style={s.socialText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.socialBtn} onPress={handleGuestEnter} activeOpacity={0.8}>
              <Ionicons name="logo-apple" size={20} color={C.white} />
              <Text style={s.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* ── Quick dev entry (skip auth entirely) ──────────────────────── */}
          <TouchableOpacity style={s.devBtn} onPress={handleGuestEnter} activeOpacity={0.8}>
            <Ionicons name="flash-outline" size={16} color={C.gold} />
            <Text style={s.devBtnText}>Enter App (Skip Login)</Text>
          </TouchableOpacity>

          {/* ── Sign up link ───────────────────────────────────────────────── */}
          <View style={s.signupRow}>
            <Text style={s.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text style={s.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 48 },

  // Logo
  logoWrap: { alignItems: "center", marginBottom: 32, marginTop: 8 },
  logo: { fontSize: 36, fontWeight: "800", color: C.gold, letterSpacing: 1 },
  tagline: { color: C.muted, fontSize: 13, marginTop: 6, letterSpacing: 0.4 },

  // Role toggle
  toggle: {
    flexDirection: "row",
    backgroundColor: C.surface,
    borderRadius: 12,
    padding: 4,
    marginBottom: 28,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  toggleBtnActive: { backgroundColor: C.gold },
  toggleText: { color: C.muted, fontSize: 14, fontWeight: "600" },
  toggleTextActive: { color: "#1A1200", fontWeight: "700" },

  // Headings
  heading: { color: C.white, fontSize: 26, fontWeight: "800", marginBottom: 4 },
  subheading: { color: C.muted, fontSize: 14, marginBottom: 24 },

  // Inputs
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.inputBg,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingHorizontal: 14,
    marginBottom: 14,
    height: 52,
  },
  inputFocused: { borderColor: C.gold },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, color: C.white, fontSize: 15 },

  forgotText: { color: C.gold, fontSize: 13, fontWeight: "600" },

  // Gold CTA
  goldBtn: {
    backgroundColor: C.gold,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  goldBtnText: { color: "#1A1200", fontSize: 16, fontWeight: "700" },

  // Divider
  divider: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  dividerLine: { flex: 1, height: 1, backgroundColor: C.border },
  dividerText: { color: C.muted, fontSize: 13, marginHorizontal: 12 },

  // Social
  socialRow: { flexDirection: "row", gap: 12, marginBottom: 28 },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: C.surface,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.border,
    paddingVertical: 13,
  },
  socialText: { color: C.white, fontSize: 14, fontWeight: "600" },

  // Dev shortcut
  devBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: C.gold,
    borderStyle: "dashed",
    marginBottom: 28,
  },
  devBtnText: { color: C.gold, fontSize: 14, fontWeight: "600" },

  // Sign up
  signupRow: { flexDirection: "row", justifyContent: "center" },
  signupText: { color: C.muted, fontSize: 14 },
  signupLink: { color: C.gold, fontSize: 14, fontWeight: "700" },
});
