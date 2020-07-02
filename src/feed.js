import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles/styles';

Feed = () => {

  const navigation = useNavigation();
  const route = useRoute();

  let detailResult = route.params;
  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        {detailResult ? detailResult.data : 'Navigation Drawer'}
      </Text>
      {
        Platform.select({
          ios:
            <Button
              title='Go to Feed Item'
              onPress={() => navigation.navigate('login', { screenName: "My Detail Screen" })}
            />,
          android:
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { screenName: "My Detail Screen" })}>
              <Text style={styles.androidButtonText}>Go to FeedItem</Text>
            </TouchableOpacity>
        })
      }

    </View>
  );
}

export default Feed;