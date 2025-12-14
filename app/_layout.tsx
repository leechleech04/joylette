import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundGreen }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.lightGreen,
          tabBarInactiveTintColor: colors.lightGray,
          tabBarStyle: {
            backgroundColor: colors.tabBarBackground,
            borderRadius: 40,
            elevation: 0,
            borderColor: colors.tabBarBorder,
            borderWidth: 1,
            width: 240,
            alignSelf: 'center',
            height: 80,
            paddingTop: 20,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '홈',
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <Ionicons
                  name="home"
                  size={28}
                  color={focused ? colors.lightGreen : colors.lightGray}
                />
              </IconContainer>
            ),
          }}
        />
        <Tabs.Screen
          name="missions"
          options={{
            title: '미션',
            tabBarIcon: ({ focused }) => (
              <IconContainer focused={focused}>
                <Ionicons
                  name="list"
                  size={28}
                  color={focused ? colors.lightGreen : colors.lightGray}
                />
              </IconContainer>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

const IconContainer = styled.View<{ focused: boolean }>`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ focused }: { focused: boolean }) =>
    focused ? colors.lightGreen + '22' : 'transparent'};
`;

export default RootLayout;
