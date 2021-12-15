import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState, useEffect } from 'react';

import * as constants from './Constants';
import { productList2 } from './data';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuPopup from './MenuPopup';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  label: {
    fontSize: 20,
  },
  //   root: {
  //     height: 240,
  //     flexGrow: 1,
  //     maxWidth: '100%',
  //     backgroundColor: 'white',
  //   },
});

function Header3(props) {
  const routeChange = (pathparam) => {
    let path = '/' + pathparam;
    // console.log(history)
    console.log(pathparam);
    // let history = useHistory();
    props.history.push(path);
  };

  var allBrands = {
    Apple: '',
    Samsung: '',
    Google: '',
    LG: '',
    Asus: '',
    Dell: '',
    HP: '',
    JBL: '',
    Bose: '',
    Sennheiser: '',
    Sony: '',
    Skullcandy: '',
    Acer: '',
  };

  const [googleUserName, setGoogleUserName] = useState('Guest');
  const [loginStatus, setLoginStatus] = useState('Sign In');
  const [value, setValue] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [result, setResult] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  var heatingAndCooling = constants.heatingAndCooling;
  var fridgesAndFreezers = constants.fridgesAndFreezers;
  var gaming = constants.gaming;
  var mobilePhones = constants.mobilePhones;
  var allSpeakers = constants.allSpeakers;
  var musicalInstruments = constants.musicalInstruments;
  var allCamera = constants.allCamera;
  var kitchen = constants.kitchen;
  var homeAccessories = constants.homeAccessories;
  var videoAndTvs = constants.videoAndTvs;
  var securityAndGps = constants.securityAndGps;
  var others = constants.others;
  var portableSpeakers = constants.portableSpeakers;
  var hardWare = constants.hardWare;
  var mediaAndStorage = constants.mediaAndStorage;
  var components = constants.components;
  var computerAccessories = constants.computerAccessories;
  var networking = constants.networking;
  var software = constants.software;
  var inputDevices = constants.inputDevices;

  const productList = productList2;
  const blogList = [
    {
      id: 1,
      title: 'IPhone major security patch released',
      category: 'Mobile Phones',
      subCategory: ['Apple', 'Security', 'Fixes'],
      description:
        "saLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n saLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'The best computers under 2000$',
      category: 'Computers',
      subCategory: ['Best Price', 'Computers', 'Budget'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'All you need to know about Pixel 6 launch Event',
      category: 'Mobile Phones',
      subCategory: ['Pixel', 'Google', 'Design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://i.ytimg.com/vi/S9vZuUErWac/maxresdefault.jpg',
    },
    {
      id: 4,
      title: 'All you need to know about Pixel 6 launch Event',
      category: 'Mobile Phones',
      subCategory: ['Pixel', 'Google', 'Design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://i.ytimg.com/vi/S9vZuUErWac/maxresdefault.jpg',
    },
    {
      id: 5,
      title: 'IPhone major security patch released',
      category: 'Mobile Phones',
      subCategory: ['Apple', 'Security', 'Fixes'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 6,
      title: 'The best computers under 2000$',
      category: 'Computers',
      subCategory: ['Best Price', 'Computers', 'Budget'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 7,
      title: 'IPhone major security patch released',
      category: 'Mobile Phones',
      subCategory: ['Apple', 'Security', 'Fixes'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar:
        'https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg',
      createdAt: 'June 03, 2021',
      cover:
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  var computerComponents = [
    'graphics-cards',
    'power-supplies',
    'processors',
    'ram',
    'sound-cards',
    'components',
    'solid-state-drive',
    'hard-drives',
    'removable-media',
    'cd-rom-drives',
    'tape-drives',
    'storage-media',
    'service-and-warranty',
    'computer-case',
    'tablet-accessories',
    'laptop-bags',
    'computer-speakers',
    'computer-accessories',
  ];

  var computerNetworking = [
    'routers',
    'network-products',
    'hubs-switches',
    'modems',
    'network-attached-storage',
    'networking',
  ];

  var computerSoftwares = [
    'security-antivirus',
    'business-software',
    'graphics-multimedia',
    'operating-systems',
    'server-operating-systems',
  ];

  var x = {
    Computers: [
      'laptops',
      'printers',
      'tablet',
      'monitors',
      'desktops',
      'hardware',
      'Components',
      'Networking',
      'Software',
    ],
    TVs: [
      'televisions',
      'projectors',
      'blu-ray-players',
      'media-streaming-devices',
      'tv-and-video',
    ],
    Audio: [
      'head-phones',
      'speakers',
      'portable-speakers',
      'radio-players',
      'amplifiers-receivers',
      'home-audio',
      'portable-digital-recorders',
      'portable-cd-players',
      'mp3-media-players',
      'mp3-media-players-accessories',

      'audio-video-accessories',
      'studio-and-stage-equipment',
      'audio-visual-cables',
      'audio-visual-equipment',
    ],

    'Smart Home': [
      'security-systems-and-surveillance',
      'home-automation',
      'remote-controls',
      'home-security',
      'gps-devices',
    ],

    'Mobile Phone & Accessories': [
      'All Mobile Phones',
      'mobile-phones',
      'smart-watches',
      'mobile-phone-accessories',
      'two-way-radios',
      'phones',
    ],

    Gaming: [
      'pc-games',
      'game-consoles',
      'xbox-one-games',
      'game-accessories',
      'ps4-playstation-4-games',
      'video-game-consoles',
    ],

    'Music Vinyl': [
      'misc-music',
      'rock-music',
      'vinyl-records',
      'self-help-relaxation-music',
      'pop-music',
      'music',
      'misc-movies',
      'comedy-movies',
      'dvd-pack',
      'television-series',
      'western-movies',
      'movies',
    ],

    'Movies, TV Shows & Music Vinyl': [
      'western-movies',
      'comedy-movies',
      'dvd-pack',
      'television-series',
      'movies',
      'misc-music',
      'rock-music',
      'vinyl-records',
      'self-help-relaxation-music',
      'pop-music',
      'music',
      'misc-movies',
    ],
    'Cameras & Drones': [
      'digital-cameras',
      'camera-accessories',
      'camera-lenses',
      'camcorders',
      'drones',
      'cameras-camcorders',
    ],
    'Home Accessories': [
      'refrigerators',
      'vacuums',
      'washing-machines',
      'dishwashers',
      'air-conditioners',
      'home-appliances',
      'coffee-makers',
      'blenders-mixers',
      'kettles',
      'toasters',
      'food-processors',
      'small-kitchen-appliances',
      'irons',
    ],
    'Heating & Cooling': [
      'home-heater-systems',
      'heaters',
      'air-conditioners',
      'refrigerators',
    ],
  };

  function openHeader() {
    if (showModal == true) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* 
        {x.map(item=>{



        })} */}
        <ListItem>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem
              classes={{ label: classes.label }}
              nodeId='5'
              label='Computer'
            >
              <TreeItem
                classes={{ label: classes.label }}
                nodeId='6'
                label='Tab'
              >
                <TreeItem
                  classes={{ label: classes.label }}
                  nodeId='8'
                  label='mini'
                />
                <TreeItem
                  classes={{ label: classes.label }}
                  nodeId='9'
                  label='large'
                />
              </TreeItem>
            </TreeItem>
          </TreeView>
        </ListItem>
      </List>

      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
    </div>
  );

  useEffect(() => {
    if (value.length > 0) {
      setDisplaySearch(true);
      fetch(
        'https://comparison-website-cebc6-default-rtdb.firebaseio.com/all_products.json'
      )
        .then((response) => response.json())
        .then((responseData) => {
          setResult([]);
          let searchQuery = value.toLowerCase();
          console.log(responseData);
          const filteredProducts = productList.filter((pro) =>
            pro.title.toLowerCase().includes(searchQuery.trim())
          );
          console.log(filteredProducts);
          for (const key in filteredProducts) {
            setResult((prevResult) => {
              return [...prevResult, filteredProducts[key].title];
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setDisplaySearch(false);
      setResult([]);
    }
  }, [value]);
  function range(start, end) {
    console.log(
      Array.apply(start, Array(end - 1)).map((element, index) => index + start)
    );
    return Array.apply(start, Array(end - 1)).map(
      (element, index) => index + start
    );
  }
  var counter = 2;

  if (showModal) {
    return (
      <div className='fill__window--navigation'>
        {
          <MenuPopup
            returnFilterValue={props.returnFilterValue}
            linkComponent={props.linkComponent}
            history={props.history}
            toggle={openHeader}
            changeFilterVariable={props.changeFilterVariable}
          />
        }
      </div>
    );
  } else {
    return (
      <nav class='navbar navbar-expand-lg '>
        <div class='container-fluid'>
          <button
            onClick={toggleDrawer('left', true)}
            class='nav-link data-toggle sidebar-icon'
          >
            <ListIcon />
          </button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          {props.logoX}
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li
                onClick={openHeader}
                class='nav-item dropdown mega-dropdown nav-item dropdown menu__item'
              >
                <a
                  class='nav-link data-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  CATEGORIES
                </a>
              </li>
              <li class='nav-item dropdown mega-dropdown nav-item dropdown menu__item'>
                <a
                  class='nav-link data-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  BRANDS
                </a>
                <ul
                  class='dropdown-menu vertical__scroll'
                  aria-labelledby='dropdownMenuButton'
                >
                  {Object.keys(allBrands).map((value) => {
                    return (
                      <li>
                        <a class='dropdown-item' href='#'>
                          {value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li
                onClick={() => routeChange('categories/phones/mobile-phones')}
                class='nav-item dropdown mega-dropdown nav-item dropdown menu__item'
              >
                <a
                  class='nav-link data-toggle'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  SMART PHONES
                </a>
              </li>
              <li
                onClick={() => routeChange('categories/computers/laptops')}
                class='nav-item dropdown mega-dropdown nav-item dropdown menu__item'
              >
                <a
                  class='nav-link data-toggle'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  LAPTOPS
                </a>
              </li>
              {displaySearch ? (
                <li class='nav-item search__component'>
                  <div className='header__search--head3'>
                    <input
                      className='header__searchInput--head3'
                      onChange={(event) => setValue(event.target.value)}
                      value={value}
                      placeholder='Search products'
                      type='text'
                    />
                    <SearchIcon className='header__searchIcon' />
                  </div>

                  <div className='row search__results'>
                    {result.map((result, index) => {
                      return (
                        <div
                          className='row search__result-item'
                          href=''
                          key={index}
                        >
                          <p className='col'>{result}</p>
                        </div>
                      );
                    })}
                  </div>
                </li>
              ) : (
                <li class='nav-item search__component'>
                  <div className='header__search--head3'>
                    <input
                      className='header__searchInput--head3'
                      onChange={(event) => setValue(event.target.value)}
                      value={value}
                      placeholder='Search products'
                      type='text'
                    />
                    <SearchIcon className='header__searchIcon' />
                  </div>
                </li>
              )}
              <div className='d-flex'>
                <li className='nav-item-small'>
                  <div className='header__nav'>
                    <div className='header__option'>
                      <span className='header__optionLineOne'>Hello guest</span>
                      <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                  </div>
                </li>

                <li className='nav-item-small'>
                  <div className='header__nav'>
                    <div className='header__option'>
                      <span className='header__optionLineOne'>TECH</span>
                      <span className='header__optionLineTwo'>BLOGS</span>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
            <div></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header3;
