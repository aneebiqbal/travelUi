import React,{useState} from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import COLORS from "../config/COLORS";
import CATEGORIES from "../config/CATEGORIES";
import SPACING from "../config/SPACING";
import ADVANTURES from "../config/ADVANTURES";
import Ionicons from "@expo/vector-icons/Ionicons";

const Width =Dimensions.get("screen").width
function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>
        <View style={{padding:20,}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    color: COLORS.dark
                     }}
                >
                    Discover
                </Text>
                <Image 
                style={{
                    height:50,
                    width:50,
                    borderRadius:50
                }}
                source={require('../assets/images/Avatar.png')}/>
            </View>
            <ScrollView style={{marginVertical:20}} horizontal>
                {CATEGORIES.map((category, index) => 
                    <TouchableOpacity style={{
                        marginRight: SPACING
                        }} 
                        key={category.id} onPress={()=> setActiveCategory(index)}
                    >
                        <Text style={[{
                            fontSize: SPACING * 2,
                             color: COLORS.dark
                             }, 
                             activeCategory == index && {color:COLORS.primary}]}
                        >
                            {category.title}
                        </Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <Text style={{fontSize:SPACING * 1.7, color:COLORS.dark, marginBottom:20}}>
                {CATEGORIES[activeCategory].tours.length + " "}
                {CATEGORIES[activeCategory].title}
            </Text>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                snapToInterval={Width * 0.7}
                decelerationRate="fast"
                pagingEnabled
            >
                {CATEGORIES[activeCategory].tours.map((tour, index) => 
                    <TouchableOpacity style={{
                        width:Width * 0.7,
                        height:Width *.9,
                        overflow:'hidden',
                        borderRadius: SPACING * 2,
                        marginRight: SPACING * 2
                        }} 
                        key={index}
                    >
                        <View style={{
                            position:'absolute',
                             zIndex:1,
                             width:'100%',
                             height:'100%',
                             backgroundColor:COLORS.transparent,
                             justifyContent:'space-between',
                             padding:SPACING
                             }}
                        >
                            <TouchableOpacity style={{
                                alignSelf:'flex-end',
                                padding:SPACING / 2,
                                backgroundColor:COLORS.white,
                                borderRadius: SPACING * 5,
                                justifyContent:'center',
                                alignItems:'center'
                                }}>
                                <Ionicons name='heart-outline' color={COLORS.primary} size={SPACING * 3}/>
                            </TouchableOpacity>
                                <Text style={{
                                    fontSize:SPACING*2, 
                                    color:COLORS.white,
                                    fontWeight:'700',
                                    marginLeft:SPACING}}
                                >
                                     {tour.title}
                                </Text>
                        </View>
                       <Image style={{width:'100%', height:'100%'}} source={tour.image} /> 
                    </TouchableOpacity>
                )}
            </ScrollView>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <Text style={{
                    fontSize:SPACING * 2,
                    fontWeight:'bold',
                    color:COLORS.dark,
                    marginTop: 30
                }}>
                    Feeling Advencture?
                </Text>
                <TouchableOpacity>
                    <Text style={{
                    fontSize:SPACING * 1.4,
                    fontWeight:'500',
                    color:COLORS.primary,
                    marginTop: 30
                    }}>
                     Show all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{
                marginVertical: SPACING *2
            }}>
                    {ADVANTURES.map(advencture =>
                        <TouchableOpacity key={advencture.id} style={{
                            marginRight:SPACING * 3,
                            padding: SPACING,
                            alignItems:'center'
                        }}>
                            <View style={{width:SPACING*3, height:SPACING*3}}>
                                <Image source={advencture.image} resizeMode="contain" style={{
                                    width:'100%',
                                    height:'100%'
                                }}/>
                            </View>
                            <Text style={{
                                textTransform:'uppercase',
                                fontSize:SPACING,
                                marginTop:SPACING
                            }}>{advencture.title}</Text>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen