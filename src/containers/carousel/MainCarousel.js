import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MainCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          teacherFirstname: 'David',
          teacherLastname: 'Lecras',
          teacherEducation: 'Université de Nouvelle-Calédonie',
          Universite: 'Text 1',
        },
        {
          teacherFirstname: 'Dany',
          teacherLastname: 'Puliga',
          teacherEducation:
            'Faculté des Sciences Juridiques, Politiques et Sociales, Université de Lille',
          Universite: 'Text 2',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={styles._renderItem}>
        <View style={styles.headerCarousel}>
          <Image
            source={require('../../../assets/crazy_teacher.png')}
            style={styles.imageStylish}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>
            {item.teacherFirstname} {item.teacherLastname}
          </Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Formation:</Text>
          <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
            {item.teacherEducation}
          </Text>
        </View>
        <View>
          <Text style={{color: 'grey'}}>Decription</Text>
          <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
            Calme et patient, je sais m'adapter à l'élève et comprendre sa
            méthode d'apprentissage afin de l'aider à progresser au mieux.
          </Text>
        </View>
        <View>
          <Text>Actions</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.styleCarousel}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={330}
          itemWidth={330}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _renderItem: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 450,
    padding: 30,
    marginLeft: 25,
    justifyContent: 'space-evenly',
  },
  styleCarousel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  headerCarousel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageStylish: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
});
