import React, { FC, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '@components/ThemeContext/ThemeContext';
import { Route } from '@models/constants/route';
import { ROOT_STACK_OPTIONS, StackArguments } from './NavigationTypings';

import Home from '@screens/home';

const Stack = createStackNavigator<StackArguments>();

export const Navigation : FC = () => {
    const { theme } = useTheme();

    const navigationTheme: NavigationTheme = useMemo(() => {
        return {
            dark : theme.dark,
            colors : {
                primary : theme.colors.primary,
                background : theme.colors.background,
                card : theme.colors.surface,
                border : theme.colors.onBackground,
                text : theme.colors.onSurface,
                notification : theme.colors.notification,
            }
        };
    }, [theme]);

    return (
        <NavigationContainer theme={navigationTheme}>
            <Stack.Navigator screenOptions={ROOT_STACK_OPTIONS}>
                <Stack.Screen name={Route.HOME} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
