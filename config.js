var editorName = 'RoadSurfacesEditor'

var valuesSurfaces = ['asphalt', 'concrete', 'concrete:lanes', 'concrete:plates', 'paving_stones', 'sett', 'unhewn_cobblestone', 'cobblestone', 'compacted', 'fine_gravel', 'gravel', 'pebblestone', 'dirt', 'grass', 'grass_paver', 'ground', 'woodchips', 'sand'];
var valuesWidthSource = ['todo source', 'todo source 2'];
var valuesCond = ['todo delete'];

var legend = [
  {
    surface: 'asphalt',
    color: 'gray',
    text: 'Asphalt',
    description: '-',
    image_url: 'https://wiki.openstreetmap.org/w/images/thumb/5/56/Surface_asphalt.jpg/200px-Surface_asphalt.jpg'
  },
  {
    surface: 'concrete',
    color: 'gray',
    text: 'Beton',
    description: 'Eine große, zusammenhängende Fläche aus Beton, meist vor Ort gegossen, kann Scheinfugen aufweisen.',
    image_url: 'https://wiki.openstreetmap.org/w/images/thumb/2/23/Dscf0221_600.jpg/200px-Dscf0221_600.jpg'
  },
  {
    surface: 'concrete:lanes',
    color: 'gray',
    text: 'Betonspurbahnen',
    description: 'Getrennte Bahnen in der Breite von zweispurigen Fahrzeugen mit einem Streifen aus Sand oder Gras, dazwischen. Bei nur einer Bahn ist surface=concrete zu verwenden.',
    image_url: 'https://wiki.openstreetmap.org/w/images/thumb/e/ed/Dscf0222_600.jpg/200px-Dscf0222_600.jpg'
  },
  {
    surface: 'concrete:plates',
    color: 'gray',
    text: 'Betonplatten',
    description: 'Größere, vollflächige Platten für Schwerlastverkehr. Bei einer zusammenhängenden Fläche aus Ortbeton ist surface=concrete zu verwenden.',
    image_url: 'https://wiki.openstreetmap.org/w/images/thumb/e/ed/Dscf0222_600.jpg/200px-Dscf0222_600.jpg'
  },
  {
    surface: 'paving_stones',
    color: 'red',
    text: 'Pflastersteine',
    description: 'Meist aus Beton gefertigt mit gleichmäßiger, regelmäßiger Form. Sie haben daher bei der Verlegung nur schmale Zwischenräume. Oft in Fußgängerzonen oder auf Wegen mit geringenn Autoverkehr. Sie sind nicht für schwere Belastungen ausgelegt.',
    image_url: 'https://wiki.openstreetmap.org/w/images/thumb/0/07/Surface_paving_stones.jpg/200px-Surface_paving_stones.jpg'
    // todo secondary image
    // https://wiki.openstreetmap.org/w/images/thumb/1/11/Dscf1620-800.jpg/200px-Dscf1620-800.jpg
  },
  {
    surface: 'sett',
    color: 'red',
    text: 'Pflastersteine',
    description: 'Behauenes Steinpflaster. Diese Steine sind ebener als (surface=cobblestone) oder Kopfsteinpflaster und haben annähernd eine Quaderform. Pflaster aus diesen Steinen sind daher wesentlich angenehmer zu gehen oder zu befahren.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Granite_Setts.jpg/200px-Granite_Setts.jpg'
  },
  {
    surface: 'unhewn_cobblestone',
    color: 'red',
    text: 'todo',
    description: 'Cobblestone paving, formed from natural, uncut, overall rounded stones. Firmly attached to a ground, unlike pebblestone.',
    image_url: ''
  },
  {
    surface: 'cobblestone',
    color: 'red',
    text: 'todo specify, maybe add cobblestone:flattened',
    description: '"cobblestone" - ',
    image_url: ''
  },
  {
    surface: 'compacted',
    color: 'brown',
    text: '',
    description: '"compacted" - ',
    image_url: ''
  },
  {
    surface: 'fine_gravel',
    color: 'brown',
    text: '',
    description: '"fine_gravel" - ',
    image_url: ''
  },
  {
    surface: 'gravel',
    color: 'brown',
    text: '',
    description: '"gravel" - ',
    image_url: ''
  },
  {
    surface: 'pebblestone',
    color: 'brown',
    text: '',
    description: '"pebblestone" - ',
    image_url: ''
  },
  {
    surface: 'dirt',
    color: 'brown',
    text: '',
    description: '"dirt" - ',
    image_url: ''
  },
  {
    surface: 'grass',
    color: 'green',
    text: '',
    description: '"grass" - ',
    image_url: ''
  },
  {
    surface: 'grass_paver',
    color: 'green',
    text: '',
    description: '"grass_paver" - ',
    image_url: ''
  },
  {
    surface: 'ground',
    color: 'brown',
    text: '',
    description: '"ground" - ',
    image_url: ''
  },
  {
    surface: 'woodchips',
    color: 'brown',
    text: '',
    description: '"woodchips" - ',
    image_url: ''
  },
  {
    surface: 'sand',
    color: 'yellow',
    text: '',
    description: '"sand" - ',
    image_url: ''
  },
];

var useTestServer = false;

var urlOverpass = 'https://overpass-api.de/api/interpreter?data=';
var urlJosm = 'http://127.0.0.1:8111/import?url=';
var urlID = 'https://www.openstreetmap.org/edit?editor=id';

var urlOsmTest = useTestServer
    ? 'https://master.apis.dev.openstreetmap.org'
    : 'https://www.openstreetmap.org';

// TODO
var auth = useTestServer
    ? osmAuth({
        url: urlOsmTest,
        oauth_consumer_key: 'FhbDyU5roZ0wAPffly1yfiYChg8RaNuFlJTB0SE1',
        oauth_secret: 'gTzuFDWUqmZnwho2NIaVoxpgSX47Xyqq65lTw8do',
        auto: true,
        //singlepage: true
    })
    : osmAuth({
        url: urlOsmTest,
        oauth_consumer_key: 'Np0gmfYoqo6Ronla4wuFTXEUgypODL0jPRzjiFW6',
        oauth_secret: 'KnUDQ3sL3T7LZjvwi5OJj1hxNBz0UiSpTr0T0fLs',
        auto: true,
        //singlepage: true
    });
