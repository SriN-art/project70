import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>Read Story</Text>
                <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={()=>{
        var word = this.state.text.toLowerCase().trim();
        db[word]?(
        this.setState({chunks:db[word].chunks}),
        this.setState({phonicSounds:db[word].phones})
        ):
        Alert.alert('The Word Does Not Exist In Our Database');
      }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
       
      </View>
    );
  

            </View>
        )
    }
}