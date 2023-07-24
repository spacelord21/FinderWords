import {SafeAreaView, Text} from 'react-native';
import {AppThemeProvider} from '@shared/ui';
import {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './navigation';
import {getDictionariesFx, getTargetsFx} from '@entities/game';
import {useStorageTheme} from '@entities/theme';
import {View} from 'react-native';

const customFonts = {
  ROBOTO_LIGHT: require('../../assets/fonts/Roboto-Light.ttf'),
  ROBOTO_REGULAR: require('../../assets/fonts/Roboto-Regular.ttf'),
  ROBOTO_MEDIUM: require('../../assets/fonts/Roboto-Medium.ttf'),
  ROBOTO_BOLD: require('../../assets/fonts/Roboto-Bold.ttf'),
};

export const App = () => {
  const {isThemeLoaded, loadTheme} = useStorageTheme();
  const dictionariesLoading = getDictionariesFx.doneData;
  const targetsLoading = getTargetsFx.doneData;

  useEffect(() => {
    getDictionariesFx();
    getTargetsFx();
    loadTheme();
  }, []);

  if (!isThemeLoaded || !dictionariesLoading || !targetsLoading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppThemeProvider>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </AppThemeProvider>
    </SafeAreaView>
  );
};
