import LEO from '../../images/LEO.jpg';
import GTO from '../../images/GTO.jpg';
import moon from '../../images/moon.jpg';
import mars from '../../images/mars.jpg';
import pluto from '../../images/pluto.png';

const destinationData = [
  {
    id: 1,
    destination: 'leo',
    text: 'Low Earch Orbit',
    imageURL: LEO,
    isChosen: false,
  },
  {
    id: 2,
    destination: 'gto',
    text: 'Geostationary Transfer Orbit',
    imageURL: GTO,
    isChosen: false,
  },
  {
    id: 3,
    destination: 'moon',
    text: 'Moon',
    imageURL: moon,
    isChosen: false,
  },
  {
    id: 4,
    destination: 'mars',
    text: 'Mars',
    imageURL: mars,
    isChosen: false,
  },
  {
    id: 5,
    destination: 'pluto',
    text: 'Pluto',
    imageURL: pluto,
    isChosen: false,
  }
];

export default destinationData;