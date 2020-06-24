import A1 from './art/animations/alpaca.gif'
import A2 from './art/animations/avocado.gif'
import A3 from './art/animations/egg.gif'
import A4 from './art/animations/evil.gif'
import A5 from './art/animations/heart.gif'
import A6 from './art/animations/nice.gif'

import C1 from './art/characters/damn.jpg'
import C2 from './art/characters/flame.png'
import C3 from './art/characters/guy.png'
import C4 from './art/characters/lokag.png'
import C5 from './art/characters/meme.png'
import C6 from './art/characters/myalee.png'
import C7 from './art/characters/nico.jpg'

import E1 from './art/environments/env.jpg'
import E2 from './art/environments/ocean.png'
import E3 from './art/environments/room.png'

import P1 from './art/projects/abeille.png'
import P2 from './art/projects/business.png'
import P3 from './art/projects/secheuse.png'
import P4 from './art/projects/the.png'

import S1 from './art/sketches/alpaca.png'
import S2 from './art/sketches/deepsight.png'
import S3 from './art/sketches/ugh.png'
import S4 from './art/sketches/void.png'

const testImageObjs = [
    { src: A1, width: 480, height: 360, title: 'Alpaca' , alt: 'alpaca gif' , type: 'animation' },
    { src: A2, width: 500, height: 500, title: 'Avocado', alt: 'avocado gif', type: 'animation' },
    { src: A3, width: 800, height: 600, title: 'Egg'    , alt: 'egg gif'    , type: 'animation' },
    { src: A4, width: 293, height: 200, title: 'Evil'   , alt: 'evil gif'   , type: 'animation' },
    { src: A5, width: 480, height: 480, title: 'Heart'  , alt: 'heart gif'  , type: 'animation' },
    { src: A6, width: 900, height: 600, title: 'Nice'   , alt: 'nice gif'   , type: 'animation' },

    { src: C1, width: 2000, height: 2000, title: 'Damn'  , alt: 'damn pic'  , type: 'character' },
    { src: C2, width: 384,  height: 447,  title: 'Flame' , alt: 'flame pic' , type: 'character' },
    { src: C3, width: 1582, height: 2048, title: 'Guy'   , alt: 'guy pic'   , type: 'character' },
    { src: C4, width: 1675, height: 2048, title: 'Lokag' , alt: 'lokag pic' , type: 'character' },
    { src: C5, width: 1536, height: 2048, title: 'Meme'  , alt: 'meme pic'  , type: 'character' },
    { src: C6, width: 1536, height: 2048, title: 'Myalee', alt: 'myalee pic', type: 'character' },
    { src: C7, width: 2048, height: 1912, title: 'Nico'  , alt: 'nico pic'  , type: 'character' },

    { src: E1, width: 2230, height: 1080, title: 'Environment', alt: 'env pic'  , type: 'environment' },
    { src: E2, width: 2048, height: 1152, title: 'Ocean'      , alt: 'ocean pic', type: 'environment' },
    { src: E3, width: 1000, height: 563,  title: 'Room'       , alt: 'room pic' , type: 'environment' },

    { src: P1, width: 665, height: 706, title: 'Abeille' , alt: 'abeille pic' , type: 'project' },
    { src: P2, width: 894, height: 692, title: 'Business', alt: 'business pic', type: 'project' },
    { src: P3, width: 585, height: 760, title: 'Secheuse', alt: 'secheuse pic', type: 'project' },
    { src: P4, width: 566, height: 562, title: 'The'     , alt: 'the pic'     , type: 'project' },

    { src: S1, width: 385,  height: 725,  title: 'Alpaca'   , alt: 'alpaca pic'   , type: 'sketch' },
    { src: S2, width: 2048, height: 2048, title: 'Deepsight', alt: 'deepsight pic', type: 'sketch' },
    { src: S3, width: 497,  height: 503,  title: 'Ugh'      , alt: 'ugh pic'      , type: 'sketch' },
    { src: S4, width: 873,  height: 960,  title: 'void'     , alt: 'void pic'     , type: 'sketch' },
];

function imageLoader() {
    return testImageObjs;
  }

export default imageLoader;
