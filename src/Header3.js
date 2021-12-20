import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState, useEffect } from "react";

import * as constants from "./Constants";
import { productList2 } from "./data";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuPopup from "./MenuPopup";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import ListIcon from "@material-ui/icons/List";
import IconButton from "@material-ui/core/IconButton";

const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiTreeItem: {
      selected: {
        backgroundColor: "red",
      },
    },
  },
});

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  // paper: {
  //   width: 250
  // },
  fullList: {
    width: "auto",
  },
  // label: {
  //   fontSize: 20,
  //   backgroundColor: 'white',
  // },

  label: {
    fontSize: 15,
    color: "#3ef4152",
    fontFamily: "Open Sans Condensed",
    "&:hover": {
      backgroundColor: "white",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "red",
      },
    },
  },
  sublabel: {
    fontSize: 15,
    color: "gray",
    fontFamily: "Open Sans Condensed",
    "&:hover": {
      backgroundColor: "white",
      // Reset on touch devices, it doesn't add specificity
    },
  },
  selected: {
    backgroundColor: "white",
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
    let path = "/" + pathparam;
    // console.log(history)
    console.log(pathparam);
    // let history = useHistory();
    props.history.push(path);
  };

  var allBrands = {
    Apple: "",
    Samsung: "",
    Google: "",
    LG: "",
    Asus: "",
    Dell: "",
    HP: "",
    JBL: "",
    Bose: "",
    Sennheiser: "",
    Sony: "",
    Skullcandy: "",
    Acer: "",
  };

  const [googleUserName, setGoogleUserName] = useState("Guest");
  const [loginStatus, setLoginStatus] = useState("Sign In");
  const [value, setValue] = useState("");

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

  const model = {
    Computers: {
      "all-computers": [],
      laptops: ["Macbooks", "Notebooks", "Gaming Laptops"],
      printers: ["Canon Printers", "Epson Printers", "Printers under $600"],
      tablet: ["IPads", "Windows Tablets", "Android Tablets"],
      monitors: ["28 Inch Monitors", "32 Inch Monitors", "38 Inch Monitors"],
      desktops: [
        "Desktops under $600",
        "Desktops in $600-$1200",
        "Apple Desktops",
        "Windows Desktops",
      ],
    },

    TVs: {
      "all-television": [],
      television: [
        "Televisions Under 32 Inches",
        "Televisions Over 80 Inches",
        "Televisions Over 60 Inches",
        "Televisions 48 to 60 Inches",
        "Televisions 32 to 47 Inches",
        "4K Televisions",
        "LED LCD TVs",
      ],
      "OLED TVs": ["OLED TVs Over 60 inches", "OLED TVs 48 to 60 inches"],

      "QLED TVs": [
        "QLED TVs 50 Inches and Under",
        "55 Inch QLED TVs",
        "65 Inch QLED TVs",
        "75 Inch QLED TVs",
        "85 Inch QLED TVs",
        "QLED TV Stands & Wall Mounts",
      ],
      "Ultra HD TVs": [
        "Ultra HD TVs Under 48 Inches",
        "Ultra HD TVs 48 to 60 inches",
        "Ultra HD TVs Over 60 inches",
      ],
      projectors: ["LED Projectors", "DLP Projectors", "LCD Projectors"],
      "blu-ray-players": [],
      "media-streaming-devices": [],
      "tv-and-video": [],
    },

    Audio: {
      "all-audio": [],
      "head-phones": [
        "Behind the head",
        "Over the head",
        "Over the ear",
        "Ear buds",
      ],
      speakers: ["Bose Speakers", "Beats Speakers", "JBL Speakers"],
      "portable-speakers": [
        "Bose Portable Speakers",
        "Beats Portable Speakers",
        "JBL Portable Speakers",
      ],
      "radio-players": [],
      "amplifiers-receivers": [],
      "audio-accessories": [
        "amplifiers-receivers",
        "home-audio",
        "portable-digital-recorders",
        "mp3-media-players",
        "audio-video-accessories",
        "audio-visual-cables",
      ],
      "home-audio": [],
      "portable-digital-recorders": [],
      "portable-cd-players": [],
      "mp3-media-players": ["Apple Media Players", "Sony Media Players"],
      "mp3-media-players-accessories": [],
      "audio-video-accessories": [],
      "studio-and-stage-equipment": [],
      "audio-visual-cables": [],
      "audio-visual-equipment": [],
    },
    "Smart Home": {
      "all-security": [],
      "security-systems-and-surveillance": [
        "Security Systems by Arlo",
        "Security Systems by D-Link",
        "Security Systems by Swann",
      ],
      "home-automation": [
        "Smart Speakers",
        "Smart Displays",
        "Smart Lightings",
      ],
      "remote-controls": [],
      "home-security": ["Home Security by Ring", "Home Security by Arlo"],
      "gps-devices": [],
    },

    "Mobile Phone & Accessories": {
      "all-phones": [],
      "mobile-phones": ["Apple IPhones", "Samsung Galaxy Series", "5G Phones"],
      "smart-watches": ["Apple Watches", "Android Watches"],

      "mobile-phone-accessories": ["Case", "Adapters", "Trackers"],
      "two-way-radios": [],
      phones: ["Phones by VTech", "Phones by Logitech", "Dell"],
    },

    Gaming: {
      "all-gaming": [],
      "pc-games": [
        "PC games by Activision",
        "PC games by Bethesda",
        "PC games by Capcom",
      ],
      "game-consoles": [
        "Playstation Consoles",
        "Nintendo Consoles",
        "Xbox Consoles",
      ],
      "xbox-one-games": [
        "Xbox One games by Activision",
        "Xbox One games by Bethesda",
        "Xbox One games by Capcom",
      ],
      "game-accessories": [],
      "ps4-playstation-4-games": [
        "PS4 games by Activision",
        "PS4 games by Bethesda",
        "PS4 games by Capcom",
      ],
      "video-game-consoles": [],
    },

    "Music Vinyl": {
      "all-movies-and-vinyl": [],
      "misc-music": [],
      "rock-music": [],
      "vinyl-records": [],
      "self-help-relaxation-music": [],
      "pop-music": [],
      music: [],
      "misc-movies": [],
      "comedy-movies": [],
      "dvd-pack": [],
      "television-series": [],
      "western-movies": [],
      movies: [],
    },
    "Movies, TV Shows & Music Vinyl": {
      "all-movies-and-vinyl": [],
      "misc-music": [],
      "rock-music": [],
      "vinyl-records": [],
      "self-help-relaxation-music": [],
      "pop-music": [],
      music: [],
      "misc-movies": [],
      "comedy-movies": [],
      "dvd-pack": [],
      "television-series": [],
      "western-movies": [],
      movies: [],
    },
    "Cameras & Drones": {
      "digital-cameras": ["DSLR Cameras", "Mirrorless Cameras", "Action Cam"],
      "camera-accessories": [],
      "camera-lenses": ["Canon Lenses", "Sony Lenses", "Nikon Lenses"],
      camcorders: [],
      drones: ["Drones by DJI", "Drones by Lenoxx"],
      "cameras-camcorders": [],
    },

    "Fridges, Freezers and Dishwashers": {
      "all-Fridges-freezers-and-dishwashers": [],
      refrigerators: [
        "Bar Fridges",
        "Compact Fridges",
        "Bottom Freezer",
        "Top freezer",
        "Side by Side",
      ],
      freezers: ["Upright Freezer", "Chest Freezer"],
      dishwashers: [
        "Dishwashers by Bosch",
        "Dishwashers by ChiQ",
        "Dishwashers by Hisense",
      ],
    },

    "Washing Machines and Dryers": {
      "all-Washing-machines-and-dryers": [],
      "washing-machines": [
        "Front Load",
        "Top Load",
        "Stacked Load",
        "All in One",
      ],
      dryers: ["Condenser", "Heat Pump", "Vented"],
    },
    "Home Accessories": {
      vacuums: [
        "cordless",
        "Bagless",
        "Upright",
        "Handheld",
        "Cyclonic",
        "Wet Dry",
        "robotic",
      ],
      "coffee-makers": [
        "Grinder",
        "Cup-warmer",
        "Milk Frother",
        "Single Boiler",
      ],

      "blenders-mixers": [
        "Handheld",
        "Work Top",
        "Blenders Mixers by Breville",
      ],
      kettles: ["Electric Kettles", "Stove Top"],

      toasters: ["One Slice", "Two Slice", "Four slice", "Six Slice"],
      "food-processors": [],
      "small-kitchen-appliances": [],
      irons: ["Steam and Spray", "Steam Irons"],
    },

    "Heating & Cooling": {
      "air-treatment": ["Humidifiers", "Air Purifiers", "Dehumidifiers"],

      "home-heater-systems": [],
      heaters: [
        "Oil Filled Radiator",
        "Panel Heaters",
        "Natural Gas",
        "Portable",
        "Ceramic",
        "LPG",
      ],

      "air-conditioners": [
        "Portable Mobile",
        "Central",
        "Window",
        "Split System",
        "Floor Mounted",
      ],
    },
  };

  const blogList = [
    {
      id: 1,
      title: "IPhone major security patch released",
      category: "Mobile Phones",
      subCategory: ["Apple", "Security", "Fixes"],
      description:
        "saLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n saLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "The best computers under 2000$",
      category: "Computers",
      subCategory: ["Best Price", "Computers", "Budget"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "All you need to know about Pixel 6 launch Event",
      category: "Mobile Phones",
      subCategory: ["Pixel", "Google", "Design"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover: "https://i.ytimg.com/vi/S9vZuUErWac/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "All you need to know about Pixel 6 launch Event",
      category: "Mobile Phones",
      subCategory: ["Pixel", "Google", "Design"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover: "https://i.ytimg.com/vi/S9vZuUErWac/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "IPhone major security patch released",
      category: "Mobile Phones",
      subCategory: ["Apple", "Security", "Fixes"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      title: "The best computers under 2000$",
      category: "Computers",
      subCategory: ["Best Price", "Computers", "Budget"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      title: "IPhone major security patch released",
      category: "Mobile Phones",
      subCategory: ["Apple", "Security", "Fixes"],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: "John Doe",
      authorAvatar:
        "https://st4.depositphotos.com/12982378/22072/i/1600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
      createdAt: "June 03, 2021",
      cover:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  var computerComponents = [
    "graphics-cards",
    "power-supplies",
    "processors",
    "ram",
    "sound-cards",
    "components",
    "solid-state-drive",
    "hard-drives",
    "removable-media",
    "cd-rom-drives",
    "tape-drives",
    "storage-media",
    "service-and-warranty",
    "computer-case",
    "tablet-accessories",
    "laptop-bags",
    "computer-speakers",
    "computer-accessories",
  ];

  var computerNetworking = [
    "routers",
    "network-products",
    "hubs-switches",
    "modems",
    "network-attached-storage",
    "networking",
  ];

  var computerSoftwares = [
    "security-antivirus",
    "business-software",
    "graphics-multimedia",
    "operating-systems",
    "server-operating-systems",
  ];

  var x = {
    Computers: [
      "laptops",
      "printers",
      "tablet",
      "monitors",
      "desktops",
      "hardware",
      "Components",
      "Networking",
      "Software",
    ],
    TVs: [
      "televisions",
      "projectors",
      "blu-ray-players",
      "media-streaming-devices",
      "tv-and-video",
    ],
    Audio: [
      "head-phones",
      "speakers",
      "portable-speakers",
      "radio-players",
      "amplifiers-receivers",
      "home-audio",
      "portable-digital-recorders",
      "portable-cd-players",
      "mp3-media-players",
      "mp3-media-players-accessories",

      "audio-video-accessories",
      "studio-and-stage-equipment",
      "audio-visual-cables",
      "audio-visual-equipment",
    ],

    "Smart Home": [
      "security-systems-and-surveillance",
      "home-automation",
      "remote-controls",
      "home-security",
      "gps-devices",
    ],

    "Mobile Phone & Accessories": [
      "All Mobile Phones",
      "mobile-phones",
      "smart-watches",
      "mobile-phone-accessories",
      "two-way-radios",
      "phones",
    ],

    Gaming: [
      "pc-games",
      "game-consoles",
      "xbox-one-games",
      "game-accessories",
      "ps4-playstation-4-games",
      "video-game-consoles",
    ],

    "Music Vinyl": [
      "misc-music",
      "rock-music",
      "vinyl-records",
      "self-help-relaxation-music",
      "pop-music",
      "music",
      "misc-movies",
      "comedy-movies",
      "dvd-pack",
      "television-series",
      "western-movies",
      "movies",
    ],

    "Movies, TV Shows & Music Vinyl": [
      "western-movies",
      "comedy-movies",
      "dvd-pack",
      "television-series",
      "movies",
      "misc-music",
      "rock-music",
      "vinyl-records",
      "self-help-relaxation-music",
      "pop-music",
      "music",
      "misc-movies",
    ],
    "Cameras & Drones": [
      "digital-cameras",
      "camera-accessories",
      "camera-lenses",
      "camcorders",
      "drones",
      "cameras-camcorders",
    ],
    "Home Accessories": [
      "refrigerators",
      "vacuums",
      "washing-machines",
      "dishwashers",
      "air-conditioners",
      "home-appliances",
      "coffee-makers",
      "blenders-mixers",
      "kettles",
      "toasters",
      "food-processors",
      "small-kitchen-appliances",
      "irons",
    ],
    "Heating & Cooling": [
      "home-heater-systems",
      "heaters",
      "air-conditioners",
      "refrigerators",
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

  function getHeading() {
    let final = [];

    Object.keys(model).forEach(function (key) {
      final.push(
        <>
          <TreeItem
            classes={{
              label: classes.label,
              selected: classes.selected,
            }}
            nodeId={key}
            label={key}
          >
            {Object.keys(model[key]).forEach(function (key1) {
              let final1 = [];
              final1.push(
                <TreeItem
                  classes={{ label: classes.sublabel }}
                  nodeId={key1}
                  label={key1}
                ></TreeItem>
              );

              return final1;
            })}

            {/* {key.map((item) => (
            <TreeItem
              classes={{ label: classes.sublabel }}
              nodeId="6"
              label={item}
            ></TreeItem>
          ))} */}
          </TreeItem>
        </>
      );
    });
    return final;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img
          alt="..."
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg"
          class="imgsidebar"
        />

        {/* 
        {x.map(item=>{



        })} */}
        <ListItem>
          <ThemeProvider theme={theme}>
            <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {/* {getHeading()} */}
              <TreeItem
                classes={{
                  label: classes.label,
                  selected: classes.selected,
                }}
                nodeId="5"
                label="Men"
              >
                <TreeItem
                  classes={{ label: classes.sublabel }}
                  nodeId="6"
                  label="Top whear"
                >
                  <TreeItem
                    classes={{ label: classes.sublabel }}
                    nodeId="8"
                    label="Formal shirt"
                  />
                  <TreeItem
                    classes={{ label: classes.sublabel }}
                    nodeId="9"
                    label="large"
                  />
                </TreeItem>
              </TreeItem>
            </TreeView>
          </ThemeProvider>
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
        "https://comparison-website-cebc6-default-rtdb.firebaseio.com/all_products.json"
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
      <div className="fill__window--navigation">
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
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <button
            onClick={toggleDrawer("left", true)}
            class="nav-link data-toggle sidebar-icon"
          >
            <ListIcon />
          </button>
          <Drawer
            // swipeAreaWidth={500}
            classes={{ paper: classes.paper }}
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          {props.logoX}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                onClick={openHeader}
                class="nav-item dropdown mega-dropdown nav-item dropdown menu__item"
              >
                <a
                  class="nav-link data-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
              </li>
              <li class="nav-item dropdown mega-dropdown nav-item dropdown menu__item">
                <a
                  class="nav-link data-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  BRANDS
                </a>
                <ul
                  class="dropdown-menu vertical__scroll"
                  aria-labelledby="dropdownMenuButton"
                >
                  {Object.keys(allBrands).map((value) => {
                    return (
                      <li>
                        <a class="dropdown-item" href="#">
                          {value}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li
                onClick={() => routeChange("categories/phones/mobile-phones")}
                class="nav-item dropdown mega-dropdown nav-item dropdown menu__item"
              >
                <a
                  class="nav-link data-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  SMART PHONES
                </a>
              </li>
              <li
                onClick={() => routeChange("categories/computers/laptops")}
                class="nav-item dropdown mega-dropdown nav-item dropdown menu__item"
              >
                <a
                  class="nav-link data-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  LAPTOPS
                </a>
              </li>
              {displaySearch ? (
                <li class="nav-item search__component">
                  <div className="header__search--head3">
                    <input
                      className="header__searchInput--head3"
                      onChange={(event) => setValue(event.target.value)}
                      value={value}
                      placeholder="Search products"
                      type="text"
                    />
                    <SearchIcon className="header__searchIcon" />
                  </div>

                  <div className="row search__results">
                    {result.map((result, index) => {
                      return (
                        <div
                          className="row search__result-item"
                          href=""
                          key={index}
                        >
                          <p className="col">{result}</p>
                        </div>
                      );
                    })}
                  </div>
                </li>
              ) : (
                <li class="nav-item search__component">
                  <div className="header__search--head3">
                    <input
                      className="header__searchInput--head3"
                      onChange={(event) => setValue(event.target.value)}
                      value={value}
                      placeholder="Search products"
                      type="text"
                    />
                    <SearchIcon className="header__searchIcon" />
                  </div>
                </li>
              )}
              <div className="d-flex">
                <li className="nav-item-small">
                  <div className="header__nav">
                    <div className="header__option">
                      <span className="header__optionLineOne">Hello guest</span>
                      <span className="header__optionLineTwo">Sign In</span>
                    </div>
                  </div>
                </li>

                <li className="nav-item-small">
                  <div className="header__nav">
                    <div className="header__option">
                      <span className="header__optionLineOne">TECH</span>
                      <span className="header__optionLineTwo">BLOGS</span>
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
