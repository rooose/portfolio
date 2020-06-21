const images = [
    { key: 'a0', src: '../public/art/animations/alpaca.gif' , title: 'alpaca' , alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'a1', src: '../public/art/animations/avocado.gif', title: 'avocado', alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'a2', src: '../public/art/animations/egg.gif'    , title: 'egg'    , alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'a3', src: '../public/art/animations/evil.gif'   , title: 'evil'   , alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'a4', src: '../public/art/animations/heart.gif'  , title: 'heart'  , alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'a5', src: '../public/art/animations/nice.gif'   , title: 'nice'   , alt: 'alt title', type: 'animation', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },

    { key: 'c0', src: '../public/art/characters/damn.jpg'  , title: 'damn'  , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c1', src: '../public/art/characters/flame.png' , title: 'flame' , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c2', src: '../public/art/characters/guy.png'   , title: 'guy'   , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c3', src: '../public/art/characters/lokag.png' , title: 'lokag' , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c4', src: '../public/art/characters/meme.png'  , title: 'meme'  , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c5', src: '../public/art/characters/myalee.png', title: 'myalee', alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'c6', src: '../public/art/characters/nico.jpg'  , title: 'nico'  , alt: 'alt title', type: 'character', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },

    { key: 'e0', src: '../public/art/environments/env.jpg'  , title: 'environment', alt: 'alt title', type: 'environment', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'e1', src: '../public/art/environments/ocean.png', title: 'ocean'      , alt: 'alt title', type: 'environment', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'e2', src: '../public/art/environments/room.png' , title: 'room'       , alt: 'alt title', type: 'environment', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },

    { key: 'p0', src: '../public/art/projects/abeille.png' , title: 'abeille' , alt: 'alt title', type: 'project', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'p1', src: '../public/art/projects/noune.png'   , title: 'noune'   , alt: 'alt title', type: 'project', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'p2', src: '../public/art/projects/secheuse.png', title: 'secheuse', alt: 'alt title', type: 'project', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 'p3', src: '../public/art/projects/the.png'     , title: 'the'     , alt: 'alt title', type: 'project', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },

    { key: 's0', src: '../public/art/sketches/alpaca.png'   , title: 'alpaca'   , alt: 'alt title', type: 'sketch', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 's1', src: '../public/art/sketches/deepsight.png', title: 'deepsight', alt: 'alt title', type: 'sketch', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 's2', src: '../public/art/sketches/ugh.png'      , title: 'ugh'      , alt: 'alt title', type: 'sketch', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
    { key: 's3', src: '../public/art/sketches/void.png'     , title: 'void'     , alt: 'alt title', type: 'sketch', sizes: '(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw' },
];

function imageLoader() {
  return images;
}

export default imageLoader;
