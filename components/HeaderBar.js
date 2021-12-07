import React from 'react'
import { View,
     Text,
     TouchableOpacity,
     StatusBar
     } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { BookMarkIcon, RightArrow, VerticalDotsIcon } from '../constants/VectorIcons'
import LinearGradient from 'react-native-linear-gradient'

const HeaderBar = ({showBookMark , bookMarkOnPress , showDetails , barStyle="dark" , barColor = "#fff" , DetailsOnPress , navigation}) => {
    return (
        <View
            style={{
                position:'absolute',
                top:0,
                right :0,
                left : 0,
                padding:SIZES.base+ 5,
                backgroundColor:COLORS.white,
                flexDirection:'row'
            }}
        >
            <StatusBar barStyle={`${barStyle}-content`} backgroundColor={barColor}/>

            {/* back icon */}
            <View
                style={{
                    alignItems:'flex-start',
                    flex : 6
                }}
            >
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                >
                    <RightArrow size={25} color={COLORS.darkGray}/>
                </TouchableOpacity>
            </View>
            {/* lefts */}
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    flex:1
                }}
            >
                {
                    showBookMark && (
                        <TouchableOpacity
                            onPress={bookMarkOnPress}
                        >
                            <BookMarkIcon size={25} />
                        </TouchableOpacity>
                    )
                }
                {
                    showDetails && (
                        <TouchableOpacity
                            onPress={DetailsOnPress}
                        >
                            <VerticalDotsIcon size={25} color={COLORS.black}/>
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default HeaderBar