import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import px from './Px'
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
     container: {
       width,
       height,
     },
     backgroud: {
       width,
       height,
     },
     header: {
       width,
       height: 55 * px,
       borderBottomWidth: 3,
       borderColor: '#06B70D',
       flexDirection: 'row',
       marginTop: 2,
     },
     flash: {
       width: '50%',
       backgroundColor: '#06B70D',
       alignItems: 'center',
       justifyContent: 'center',
     },
     textflash: {
       fontSize: 26 * px,
       fontWeight: '600',
       color: '#FFC700',
     },
     title: {
       width,
       height: 32 * px,
       marginTop: 35 * px,
       paddingHorizontal: 12 * px,
       flexDirection: 'row',
       marginBottom: 15 * px,
       justifyContent:'space-around'
     },
     order: {
       width: '30%',
       borderRadius: 8 * px,
       borderColor: '#06B70D',
       alignItems: 'center',
       justifyContent: 'center',
     },
     textorder: {
       fontSize: 13 * px,
       fontWeight: '600',
       color: '#4F4F4F',
     },
     body: {
       flex: 1,
       paddingHorizontal: 23 * px,
     },
     content: {
       height: 96 * px,
       backgroundColor: '#fff',
       borderRadius: 8 * px,
       borderWidth: 1,
       borderColor: '#fff',
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: 15 * px,
     },
     imagecontent: {
       width: 96 * px,
       height: 96 * px,
       resizeMode: 'stretch',
     },
     info: {
       flex: 1,
       height: '100%',
       marginLeft: 13 * px,
     },
     city: {
       flexDirection: 'row',
       width: '100%',
       alignItems: 'center',
     },
     vector: {
       width: 12 * px,
       height: 12 * px,
       resizeMode: 'stretch',
     },
     namecity: {
       fontSize: 13 * px,
       fontWeight: '600',
       color: '#333',
       marginLeft: 2 * px,
     },
     location: {
       marginRight: 18 * px,
       flexDirection: 'row',
       alignItems: 'flex-start',
       marginTop: 3 * px,
     },
     imagelocation: {
       width: 7 * px,
       height: 10 * px,
       resizeMode: 'stretch',
       marginTop: 4 * px,
     },
     namelocation: {
       fontSize: 11 * px,
       fontWeight: '400',
       color: '#828282',
       marginLeft: 5 * px,
     },
     take: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'flex-end',
       marginBottom: 5 * px,
     },
     takeone: {
       width: '33%',
       height: 20 * px,
       borderWidth: 1,
       borderColor: '#009245',
       borderRadius: 3 * px,
       alignItems: 'center',
       justifyContent: 'center',
     },
     text: {
       fontSize: 11 * px,
       fontWeight: '400',
       color: '#000000',
     },
   });
export default styles   