import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TOURS from './app/config/TOURS';
import HomeScreen from './app/screens/HomeScreen';
import TourDetailsScreen from './app/screens/TourDetailsScreen';

export default function App() {
  return <HomeScreen/>
}