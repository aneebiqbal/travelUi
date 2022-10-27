import { View, Text ,ScrollView, ImageBackground, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import React from 'react'
import COLORS from "../config/COLORS";
import SPACING from "../config/SPACING";
import Ionicons from "@expo/vector-icons/Ionicons";

const TourDetailsScreen = ({tour}) => {
  return (
    <>
        <ScrollView>
            <ImageBackground 
                source={tour.image}
                style={{width:'100%', height:500}}
            >
                <SafeAreaView>
                    <View style={{
                        paddingHorizontal: SPACING ,
                        justifyContent:'space-between',
                        flexDirection:'row',
                        height:'100%'
                        }}
                    >
                        <TouchableOpacity style={{
                            backgroundColor:COLORS.white,
                            width:SPACING * 4,
                            height: SPACING * 4,
                            borderRadius: SPACING * 2,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Ionicons name='chevron-back' color={COLORS.primary} size={SPACING * 3} />
                        </TouchableOpacity>
                    <View style={{
                        alignItems:'flex-end',
                        justifyContent:'space-between',
                        paddingBottom: SPACING * 8
                    }}>
                            <TouchableOpacity style={{
                                backgroundColor:COLORS.white,
                                width:SPACING * 4,
                                height: SPACING * 4,
                                borderRadius: SPACING * 2,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Ionicons name='heart-outline' color={COLORS.primary} size={SPACING * 3} />
                            </TouchableOpacity>
                            <View>
                               {tour.images.map((gallery , index )=>(
                                    <TouchableOpacity key={index}
                                        style={{
                                            width:SPACING * 6,
                                            height: SPACING * 6,
                                            padding: SPACING /2,
                                            borderRadius: SPACING * 2,
                                            marginBottom:SPACING,
                                            borderColor:'white'

                                        }}
                                    >
                                        <Image source={gallery.image} style={{
                                            width: '100%',
                                            height: '100%'
                                       }}/>
                                    </TouchableOpacity>
                               ))}
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </ScrollView>
    </>
  )
}

export default TourDetailsScreen