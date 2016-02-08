import React, { Image, Dimensions, ScrollView, Text, View, WebView } from 'react-native';
import { drag, pinch, GestureView } from 'react-native-gestures';
import { styles } from './style';

export const Story = React.createClass({
  render() {
    const style = {};
    const currentWindow = Dimensions.get('window');
    const { width, height } = this.props;
    if (width >= height) {
      style.width = currentWindow.width;
      style.height = height * (style.width / width);
    } else {
      style.height = currentWindow.height;
      style.width = width * (style.height / height);
    }
    return (
      <View onLayout={() => this.forceUpdate()} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
        <ScrollView automaticallyAdjustContentInsets={true} bouncesZoom={true}>
          <Image style={style} source={{ uri: this.props.image}} />
        </ScrollView>
      </View>
    );
  }
});
