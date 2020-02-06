import LEO from '../../images/LEO.jpg';
import GTO from '../../images/GTO.jpg';
import moon from '../../images/moon.jpg';
import mars from '../../images/mars.jpg';
import pluto from '../../images/pluto.png';

const destinationData = [
  {
    id: 1,
    destination: 'leo',
    text: 'Low Earth Orbit',
    imageURL: LEO,
    isChosen: false,
    distance: 600,
  },
  {
    id: 2,
    destination: 'gto',
    text: 'Geosynchronous Transfer Orbit',
    imageURL: GTO,
    isChosen: false,
    distance: 22236,
  },
  {
    id: 3,
    destination: 'moon',
    text: 'Moon',
    imageURL: moon,
    isChosen: false,
    distance: 238900,
  },
  {
    id: 4,
    destination: 'mars',
    text: 'Mars',
    imageURL: mars,
    isChosen: false,
    distance: 140000000,
  },
  {
    id: 5,
    destination: 'pluto',
    text: 'Pluto',
    imageURL: pluto,
    isChosen: false,
    distance: 3648520000
  }
];

export default destinationData;