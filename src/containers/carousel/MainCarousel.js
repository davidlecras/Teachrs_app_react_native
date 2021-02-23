import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
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
        },
        {
          teacherFirstname: 'Dany',
          teacherLastname: 'Puliga',
          teacherEducation:
            'Faculté des Sciences Juridiques, Politiques et Sociales, Université de Lille',
        },
        {
          teacherFirstname: 'Elodie',
          teacherLastname: 'Zerdoun',
          teacherEducation: 'Université Paris Dauphine',
        },
        {
          teacherFirstname: 'Alexis',
          teacherLastname: 'Compagne',
          teacherEducation: "IUT des pays de l'adour",
        },
        {
          teacherFirstname: 'Muriel',
          teacherLastname: 'Benhamou',
          teacherEducation: 'Université Paris 8',
        },
        {
          teacherFirstname: 'Geoffrey',
          teacherLastname: 'Muller',
          teacherEducation: 'Université de Lille',
        },
        {
          teacherFirstname: 'Arielle',
          teacherLastname: 'Brami',
          teacherEducation: 'Ecole informatique Paris - Epitech',
        },
        {
          teacherFirstname: 'Cecile',
          teacherLastname: 'Cerbovski',
          teacherEducation: 'La Sorbonne',
        },
        {
          teacherFirstname: 'Xavier',
          teacherLastname: 'Niel',
          teacherEducation:
            'Université de Paris - UFR Mathématiques et Informatique',
        },
        {
          teacherFirstname: 'Virna',
          teacherLastname: 'Vico',
          teacherEducation: 'ESSEC',
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
        <TouchableOpacity
          style={styles.button1}
          onPress={() => Alert.alert('Ok on a pris un cours')}>
          <Text style={{color: 'white'}}>Prendre un cours avec ce Teach'r</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => Alert.alert('Il est retiré')}>
          <Text style={{color: 'red'}}>Retirer ce Teach'r de mes favoris</Text>
        </TouchableOpacity>
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
    borderWidth: 0.5,
    borderStartColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    height: 450,
    padding: 30,
    marginLeft: 25,
    justifyContent: 'space-evenly',
    shadowColor: 'grey',
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
  button1: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 5,
  },
  button2: {
    alignItems: 'center',
    paddingVertical: 15,
    borderStyle: 'solid',
    borderColor: '#d9534f',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
