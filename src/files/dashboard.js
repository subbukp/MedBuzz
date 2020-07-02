import React, { Component,Fragment } from 'react';
import { View,Image,Text,ImageBackground } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.

      <Fragment>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <ImageBackground source={require('...')} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'white', position: 'absolute',bottom: 0, left: 0}}>Remainder</Text>
</ImageBackground>
<ImageBackground source={{uri:'https://store-images.s-microsoft.com/image/apps.49469.9007199267197144.50c6e78e-d614-4fad-836b-5130eb676ee9.546f6d38-f847-46bd-aab9-8da3112b27d6?mode=scale&q=90&h=200&w=200&background=%2305c09A'}} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'white', position: 'absolute',bottom: 0, left: 0}}>Remder</Text>
</ImageBackground>

      </View>
       <View  style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>

      <ImageBackground source={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQChwAg1ZEUCog7dTSVGCxmM7NP333utU1sUNA6arjZgAxSDbr_'} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'black', position: 'absolute',bottom: 0, left: 0}}> Medical Shops</Text>
</ImageBackground>
<ImageBackground source={'data:image/png;base64,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'} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'black', position: 'absolute',bottom: 0, left: 0}}>     Hospitals</Text>
</ImageBackground>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>

     <ImageBackground source={'C:\Users\siri\AndroidStudioProjects\MyApplication\Awesome\images\emergency.png'} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'black', position: 'absolute',bottom: 0, left: 0}}>Emergency Call</Text>
</ImageBackground>
<ImageBackground source={'Awesome/images/about.jpg'} style={{ height: 100, width: 100, position: 'relative', top: 2,left: 2}}>
  <Text style={{ fontWeight: 'bold', color: 'black', position: 'absolute',bottom: 0, left: 0}}>     About Us</Text>
</ImageBackground>
      </View>
      </Fragment>
    );
  }
};
