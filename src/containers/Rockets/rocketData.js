import falcon1 from '../../images/falcon1.jpg';
import falcon9 from '../../images/falcon9.jpg';
import falconHeavy from '../../images/falconHeavy.jpg';
import starship from '../../images/starship.jpg';

const rocketData = [
  {
    id: 1,
    name: 'Falcon 1',
    cost: 6700000,
    payloads: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        lb: 992, 
      },
      {
        id: "gto",
        name: "Geosynchronous Transfer Orbit",
        lb: 361,
      },
    ],
    image: falcon1,
    isChosen: false,
  },
  {
    id: 2,
    name: 'Falcon 9',
    cost: 62000000,
    payloads: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        lb: 50265,
      },
      {
        id: "gto",
        name: "Geosynchronous Transfer Orbit",
        lb: 18300,
      },
      {
        id: "moon",
        name: "Moon",
        lb: 13572,
      },
      {
        id: "mars",
        name: "Mars",
        lb: 8860,
      },
    ],
    image: falcon9,
    isChosen: false,
  },
  {
    id: 3,
    name: 'Falcon Heavy',
    cost: 90000000,
    payloads: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        lb: 140660,
      },
      {
        id: "gto",
        name: "Geosynchronous Transfer Orbit",
        lb: 58860,
      },
      {
        id: "moon",
        name: "Moon",
        lb: 37978,
      },
      {
        id: "mars",
        name: "Mars",
        lb: 37040,
      },
      {
        id: "pluto",
        name: "Pluto",
        lb: 7720,
      },
    ],
    image: falconHeavy,
    isChosen: false,
  },
  {
    id: 4,
    name: 'Starship',
    cost: 7000000,
    payloads: [
      {
        id: "leo",
        name: "Low Earth Orbit",
        lb: 330000,
      },
      {
        id: "gto",
        name: "Geosynchronous Transfer Orbit",
        lb: 291720,
      },
      {
        id: "moon",
        name: "Moon",
        lb: 220000,
      },
      {
        id: "mars",
        name: "Mars",
        lb: 220000,
      },
      {
        id: "pluto",
        name: "Pluto",
        lb: 24090,
      },
    ],
    image: starship,
    isChosen: false,
  },
];

export default rocketData;