import React from 'react'
import ComputerIcon from '@material-ui/icons/Computer';

import LaptopMacRoundedIcon from '@material-ui/icons/LaptopMacRounded';
import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';

import AlbumIcon from '@material-ui/icons/Album';
import TvIcon from '@material-ui/icons/Tv';

import HeadphonesIcon from '@material-ui/icons/Headphones';
import HomeMaxIcon from '@material-ui/icons/HomeMax';

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import GamesIcon from '@material-ui/icons/Games';

import TheatersIcon from '@material-ui/icons/Theaters';
import CameraIcon from '@material-ui/icons/Camera';

import BlenderIcon from '@material-ui/icons/Blender';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import KitchenIcon from '@material-ui/icons/Kitchen';

import { FaLaptop } from 'react-icons/fa';
import { useState, useEffect } from 'react'

import { blue } from '@mui/material/colors';
import { useHistory } from "react-router-dom";
import { subCategoryData } from './data';

import { createBrowserHistory } from "history";

import {  Link, Switch } from "react-router-dom";


function MenuPopup(props) {
    
    const [selectedCategory, setSelectedCategory] = useState("Computers");
    const history = createBrowserHistory();
    
    const routeChange = (pathparam) =>{
        let path = "/"+pathparam;
        // console.log(history)
        console.log(pathparam)
        props.toggle();
        // let history = useHistory(); 
        if(props.returnFilterValue() == "Full Category"){
            props.changeFilterVariable("Full Category2")
        }else{
            props.changeFilterVariable("Full Category")
        }
        props.toggle()
        // refreshPage()   
    }

    const icons= {
        ComputerIcon: React.forwardRef((props, ref) => (
         <ComputerIcon style={{ color: "blue" }} {...props} ref={ref} />
        ))
      }
    //   const [state2, setState2] = useState({filterNameMP: ""});

    const refreshPage = ()=>{
        window.location.reload();
    }
    
    const routeChange2 = (pathparam, second, first) =>{        

        let path = "/"+pathparam;
        console.log(pathparam)
        const paramToPass = subCategoryData3[first][second]
        console.log("param to pass is "+paramToPass)
        // let history = useHistory(); 
        props.changeFilterVariable(paramToPass)
        props.toggle()
        // refreshPage()
        // history.push("/")
        // history.push(path)
    }
    
    // const subcatData = subCategoryData

    const valueForNavFilter = {
        "Macbooks": "Macbook" ,
        "Notebooks": "Notebook",
        "Gaming Laptops": "Gaming Laptop",
        "Canon Printers": "Canon",
        "Epson Printers": "Epson",
        "Printers Under $600": "600",
        "IPads": "IPadOS",
        "Windows Tablets": "Windows",
        "Android Tablets": "Android",
        "28 Inch Monitors": "28inch",
        "32 Inch Monitors": "32inch",
        "38 Inch Monitors": "38inch",
        "Desktops Under $600": "600",
        "Desktops In $600-$1200": "1200",
        "Apple Desktops": "Apple",
        "Windows Desktops": "windows",
    }

    const subCategoryData2 =  {  
        'all-computers': []
        ,
        'laptops': [
            "Macbooks",
            "Notebooks",
            "Gaming Laptops"
        ], 
        'printers': [
            "Canon Printers",
            "Epson Printers",
            "Printers under $600",
        ],
        'tablet': [
            "IPads",
            "Windows Tablets",
            "Android Tablets"
        ],
        'monitors': [
            "28 Inch Monitors",
            "32 Inch Monitors",
            "38 Inch Monitors"
        ],
        'desktops': [
            "Desktops under $600",
            "Desktops in $600-$1200",
            "Apple Desktops",
            "Windows Desktops"
        ],
        
        'all-television': [
            
        ],
        'television': [
            "Televisions Under 32 Inches",
            "Televisions Over 80 Inches",
            "Televisions Over 60 Inches",
            "Televisions 48 to 60 Inches",
            "Televisions 32 to 47 Inches",
            "4K Televisions",
            "LED LCD TVs",
            // "43 Inch TVs",
            // "60 Inch TVs",
            // "72 Inch TVs",
        ],
        'OLED TVs': [
            "OLED TVs Over 60 inches",
            "OLED TVs 48 to 60 inches",
        ],

        'QLED TVs': [
            "QLED TVs 50 Inches and Under",
            "55 Inch QLED TVs",
            "65 Inch QLED TVs",
            "75 Inch QLED TVs",
            "85 Inch QLED TVs",
            "QLED TV Stands & Wall Mounts",
        ],
        'Ultra HD TVs': [
            'Ultra HD TVs Under 48 Inches',
            'Ultra HD TVs 48 to 60 inches',
            'Ultra HD TVs Over 60 inches',
        ],
        'projectors': [
            "LED Projectors",
            "DLP Projectors",
            "LCD Projectors",
        ],
        'blu-ray-players': [
            
        ],
        'media-streaming-devices': [

        ],
        'tv-and-video': [

        ],

        'all-audio': [

        ],
        'head-phones': [
            "Behind the head",
            "Over the head",
            "Over the ear",
            "Ear buds",
        ],
        'speakers': [
            "Bose Speakers",
            "Beats Speakers",
            "JBL Speakers",
        ],
        'portable-speakers': [
            "Bose Portable Speakers",
            "Beats Portable Speakers",
            "JBL Portable Speakers",
        ],
        'radio-players': [

        ],
        'amplifiers-receivers': [

        ],
        'home-audio': [

        ],
        'portable-digital-recorders': [

        ],
        'portable-cd-players': [

        ], 
        'mp3-media-players': [
            "Apple Media Players",
            "Sony Media Players"
        ],
        'mp3-media-players-accessories': [

        ],
        'audio-video-accessories': [

        ],
        'studio-and-stage-equipment': [

        ],
        'audio-visual-cables': [

        ],
        'audio-visual-equipment': [

        ],
        'all-security': [

        ],
        'security-systems-and-surveillance': [
            "Security Systems by Arlo",
            "Security Systems by D-Link",
            "Security Systems by Swann",
        ],
        'home-automation': [
            "Smart Speakers",
            "Smart Displays",
            "Smart Lightings",
        ],
        'remote-controls': [

        ],  
        'home-security': [
            "Home Security by Ring",
            "Home Security by Arlo",
        ],
        'gps-devices': [

        ],
        'all-phones': [

        ],
        'mobile-phones': [
            "Apple IPhones",
            "Samsung Galaxy Series",
            "5G Phones"
        ],
        'smart-watches': [
            "Apple Watches"
        ],  
        'mobile-phone-accessories': [

        ],
        'two-way-radios': [

        ],
        'phones': [
            "Phones by VTech",
            "Phones by Logitech",
            "Dell",
        ],
        'all-gaming': [
            
        ],
        'pc-games': [
            "PC games by Activision",
            "PC games by Bethesda",
            "PC games by Capcom",
        ],
        'game-consoles': [

        ],
        'xbox-one-games': [
            "Xbox One games by Activision",
            "Xbox One games by Bethesda",
            "Xbox One games by Capcom",
        ],
        'game-accessories': [
            
        ],
        'ps4-playstation-4-games': [
            "PS4 games by Activision",
            "PS4 games by Bethesda",
            "PS4 games by Capcom",
        ],
        'video-game-consoles': [

        ],
        'all-movies-and-vinyl': [

        ],
        'misc-music': [

        ],
        'rock-music': [

        ],
        'vinyl-records': [

        ],
        'self-help-relaxation-music': [

        ],
        'pop-music': [

        ],
        'music': [

        ],
        'misc-movies': [

        ],
        'comedy-movies': [

        ],
        'dvd-pack': [

        ],
        'television-series': [

        ],
        'western-movies': [

        ],
        'movies': [

        ],
        'digital-cameras': [
            "DSLR Cameras",
            "Mirrorless Cameras",
            "Action Cam"
        ],
        'camera-accessories': [

        ],
        'camera-lenses': [
            "Canon Lenses",
            "Sony Lenses",
            "Nikon Lenses"
        ],
        'camcorders': [
            
        ],
        'drones': [
            "Drones by DJI",
            "Drones by Lenoxx",
        ],
        'cameras-camcorders': [

        ],
        'all-Fridges-freezers-and-dishwashers': [

        ],
        'refrigerators': [
            "Bar Fridges",
            "Compact Fridges",
            "Bottom Freezer",
            "Top freezer",
            "Side by Side",
        ],
        'freezers': [
            "Upright Freezer",
            "Chest Freezer",
        ],
        'dishwashers': [
            "Dishwashers by Bosch",
            "Dishwashers by ChiQ",
            "Dishwashers by Hisense",
        ],
        'all-Washing-machines-and-dryers': [
            
        ],
        'air-treatment': [
            'Humidifiers',
            'Air Purifiers',
            'Dehumidifiers',
        ],  
        'washing-machines': [
            "Front Load",
            "Top Load",
            "Stacked Load",
            "All in One",
        ],
        'dryers': [
            "Condenser",
            "Heat Pump",
            "Vented",
        ],
       
        'vacuums': [

        ],
        'air-conditioners': [
            "Portable Mobile", 
            "Central",
            "Window",
            "Split System",
            "Floor Mounted",
        ],
        'home-appliances': [

        ],
        'coffee-makers': [
            "Coffee Makers by Bosch",
            "Coffee Makers by Nescafe",
            "Coffee Makers by Breville",
        ],
        'blenders-mixers': [
            "Blenders Mixers by Sunbeam",
            "Blenders Mixers by Vitamix",
            "Blenders Mixers by Breville",
        ],
        'kettles': [

        ],
        'toasters': [

        ],
        'food-processors': [

        ],
        'small-kitchen-appliances': [

        ],
        'irons': [

        ],
        'home-heater-systems': [

        ],
        'heaters': [
            "Oil Filled Radiator",
            "Panel Heaters",
            "Natural Gas",
            "Portable",
            "Ceramic",
            "LPG",
        ],
}

    const subCategoryData3=  {  
        'all-computers': []
        ,
        'laptops': {
            "Macbooks": "Macbook" ,
            "Notebooks": "Notebook",
            "Gaming Laptops": "Gaming Laptop",
        }, 
        'printers': {
            "Canon Printers": "Canon",
            "Epson Printers": "Epson",
            "Printers Under $600": "600",
        },
        'tablet': {
            "IPads": "IPadOS",
            "Windows Tablets": "Windows",
            "Android Tablets": "Android",
        },
        'monitors': {
            "28 Inch Monitors": "28inch",
            "32 Inch Monitors": "32inch",
            "38 Inch Monitors": "38inch",
        },
        'desktops': {
            "Desktops Under $600": "600",
            "Desktops In $600-$1200": "1200",
            "Apple Desktops": "Apple",
            "Windows Desktops": "windows",
        },
        'hardware': [

        ],
        'Components': [

        ],
        'Networking': [

        ],
        'Software': [
            
        ],
        'all-television': [
            
        ],
        'television': {
            "Televisions Under 32 Inches": "TVUnder32",
            "Televisions Over 80 Inches": "TVOver80",
            "Televisions Over 60 Inches": "TVOver60",
            "Televisions 48 to 60 Inches": "TV48to60",
            "Televisions 32 to 47 Inches": "TV32to47",
            "4K Televisions": "QHD",
            "LED LCD TVs": "LCDLED",
        },

         
        
        // 'OLED TVs': [
        //     "OLED TVs Over 60 inches",
        //     "OLED TVs 48 to 60 inches",
        // ],

        // 'QLED TVs': [
        //     "QLED TVs 50 Inches and Under",
        //     "55 Inch QLED TVs",
        //     "65 Inch QLED TVs",
        //     "75 Inch QLED TVs",
        //     "85 Inch QLED TVs",
        //     "QLED TV Stands & Wall Mounts",
        // ],
        'tvs': {
            "43 Inch TVs": "43Inch",
            "60 Inch TVs": "60Inch",
            "72 Inch TVs": "72Inch",
        },
        'OLED TVs': {
            "OLED TVs Over 60 inches": "OLEDMorethan60Inch",
            "OLED TVs 48 to 60 inches": "OLEDBelow60Inch",
        },

        'QLED TVs': {
            "QLED TVs 50 Inches and Under": "under50InchesQLED",
            "55 Inch QLED TVs": "55InQLED",
            "65 Inch QLED TVs": "65InQLED",
            "75 Inch QLED TVs": "75InQLED",
            "85 Inch QLED TVs": "85InQLED",
        },
        'Ultra HD TVs': {
            'Ultra HD TVs Under 48 Inches': "UHDUnder48Inches",
            'Ultra HD TVs 48 to 60 inches': "UHD40to60Inches",
            'Ultra HD TVs Over 60 inches': "UHDMorethan60",
        },
        'projectors': {
            "LED Projectors": "LED",
            "DLP Projectors": "DLP",
            "LCD Projectors": "LCD",
        },
        'blu-ray-players': [
            
        ],
        'media-streaming-devices': [

        ],
        'tv-and-video': [

        ],

        'all-audio': [

        ],
        'head-phones': {
            "Behind the head": "Behind the head",
            "Over the head":"Over the head",
            "Over the ear":"Over the ear",
            "Ear buds":"Ear buds",
        },
        'speakers': {
            "Bose Speakers": "Bose",
            "Beats Speakers": "Beats",
            "JBL Speakers": "JBL",
        },
        'portable-speakers': {
            "Bose Portable Speakers": "Bose",
            "Beats Portable Speakers": "Beats",
            "JBL Portable Speakers": "JBL",
        },
        'radio-players': [

        ],
        'amplifiers-receivers': [

        ],
        'home-audio': [

        ],
        'portable-digital-recorders': [

        ],
        'portable-cd-players': [

        ], 
        'mp3-media-players': {
            "Apple Media Players": "Apple",
            "Sony Media Players": "Sony",
        },
        'mp3-media-players-accessories': [

        ],
        'audio-video-accessories': [

        ],
        'studio-and-stage-equipment': [

        ],
        'audio-visual-cables': [

        ],
        'audio-visual-equipment': [

        ],
        'all-security': [

        ],
        'security-systems-and-surveillance': {
            "Security Systems by Arlo": "Arlo",
            "Security Systems by D-Link": "D-Link",
            "Security Systems by Swann": "Swann",
        },
        'home-automation': {
            "Smart Speakers": "Smart Speaker",
            "Smart Displays": "Smart Display",
            "Smart Lightings": "Smart Lighting",
        },
        'remote-controls': [

        ],  
        'home-security': {
            "Home Security by Ring": "Ring",
            "Home Security by Arlo": "Arlo",
        },
        'gps-devices': [

        ],
        'all-phones': [

        ],
        'mobile-phones': {
            "Apple IPhones": "Apple",
            "Samsung Galaxy Series": "Samsung",
            "5G Phones": "5G", 
        },
        'smart-watches': {
            "Apple Watches": "Apple",
            "Android Watches": "Android"
        },  
        'mobile-phone-accessories': [

        ],
        'two-way-radios': [

        ],
        'phones': {
            "Phones by VTech": "VTech",
            "Phones by Logitech": "Logitech",
            "Dell": "Dell",
        },
        'all-gaming': [
            
        ],
        'pc-games': {
            "PC games by Activision": "Activision",
            "PC games by Bethesda": "Bethesda",
            "PC games by Capcom": "Capcom",
        },
        'game-consoles': [

        ],
        'xbox-one-games': {
            "Xbox One games by Activision": "Activision",
            "Xbox One games by Bethesda": "Bethesda",
            "Xbox One games by Capcom": "Capcom",
        },
        'game-accessories': [
            
        ],
        'ps4-playstation-4-games': {
            "PS4 games by Activision": "Activision",
            "PS4 games by Bethesda":"Bethesda",
            "PS4 games by Capcom": "Capcom",
        },
        'video-game-consoles': [

        ],
        'all-movies-and-vinyl': [

        ],
        'misc-music': [

        ],
        'rock-music': [

        ],
        'vinyl-records': [

        ],
        'self-help-relaxation-music': [

        ],
        'pop-music': [

        ],
        'music': [

        ],
        'misc-movies': [

        ],
        'comedy-movies': [

        ],
        'dvd-pack': [

        ],
        'television-series': [

        ],
        'western-movies': [

        ],
        'movies': [

        ],
        'digital-cameras': {
            "DSLR Cameras": "DSLR",
            "Mirrorless Cameras": "Mirrorless",
            "Action Cam": "Action Cam",
        },
        'camera-accessories': [

        ],
        'camera-lenses': {
            "Canon Lenses": "Canon",
            "Sony Lenses": "Sony",
            "Nikon Lenses": "Nikon"
        },
        'camcorders': [
            
        ],
        'drones': {
            "Drones by DJI": "DJI",
            "Drones by Lenoxx": "Lenoxx",
        },
        'cameras-camcorders': [

        ],
        'all-Fridges-freezers-and-dishwashers': [

        ],
        'refrigerators': {
            "Bar Fridges": "Bar Fridge",
            "Compact Fridges": "Compact",
            "Bottom Freezer": "Bottom Freezer",
            "Top freezer": "Top freezer",
            "Side by Side": "Side by Side",
        },
        'air-treatment': {
            'Humidifiers': 'Humidifiers',
            'Air Purifiers': 'Air Purifiers',
            'Dehumidifiers': 'Dehumidifiers',
        },
        'freezers': {
            "Upright Freezer": "Upright Freezer",
            "Chest Freezer": "Chest Freezer",
            "Freezer by Haier": "Haier",
            "Freezer by ChiQ": "ChiQ",
            "Freezer by Hisense": "Hisense",
        },
        
        'dishwashers': {
            "Dishwashers by Bosch": "Bosch",
            "Dishwashers by ChiQ": "ChiQ",
            "Dishwashers by Hisense": "Hisense",
        },
        'all-Washing-machines-and-dryers': [
            
        ],  
        'washing-machines': {
            "Front Load": "Front Load",
            "Top Load": "Top Load",
            "Stacked Load": "Stacked Load", 
            "All in One": "All in One",
        },
        'dryers': {
            "Condensers": "Condenser",
            "Heat Pump": "Heat Pump",
            "Vented": "Vented",
        },
       
        'vacuums': [

        ],
        
        'air-conditioners': {
            "Portable Mobile":"Portable Mobile", 
            "Central": "Central",
            "Window": "Window",
            "Split System": "Split System",
            "Floor Mounted": "Floor Mounted",
        },

        'home-appliances': [

        ],

        'coffee-makers': {
            "Coffee Makers by Bosch": "Bosch",
            "Coffee Makers by Nescafe": "Nescafe",
            "Coffee Makers by Breville": "Breville",
        },

        'blenders-mixers': {
            "Blenders Mixers by Sunbeam": "Sunbeam",
            "Blenders Mixers by Vitamix": "Vitamix",
            "Blenders Mixers by Breville": "Breville",
        },

        'kettles': [

        ],
        'toasters': [

        ],
        'food-processors': [

        ],
        'small-kitchen-appliances': [

        ],
        'irons': [

        ],
        'home-heater-systems': [
        ],
        'heaters': {
            "Oil Filled Radiator": "Oil Filled Radiator",
            "Panel Heaters": "Panel Heaters",
            "Natural Gas": "Natural Gas",
            "Portable":"Portable",
            "Ceramic":"Ceramic",
            "LPG":"LPG",
        },
}
    var y = {
        "Computers" : "computers",
        "TVs": "television",
        "Audio": "audio" ,
        "Smart Home": "security",    
        "Mobile Phone & Accessories" : "phones",
        "Gaming" : "gaming",    
        "Music Vinyl" : "",
        "Movies, TV Shows & Music Vinyl": "movies-and-vinyl",
        "Cameras & Drones": "camera",
        "Fridges, Freezers and Dishwashers": "Fridges-freezers-and-dishwashers",
        "Washing Machines and Dryers" : "Washing-machines-and-dryers",
        "Home Accessories" : "home-accessories",
        "Heating & Cooling" :"heating-and-cooling" 
    }

    var components = [
        "Graphics Cards",
        "Power Supplies",
        "Processors",
        "RAM",
        "Computer cables",
        "Mother Boards",
        "Sound Cards",
        "Storage Controllers",
    ]
    
    
    var computerAccessories = [
        
            "Service and Warranty",
            "Laptop Bags",
            "Computer Speakers",
            "Computer Case",
            "Laptop accessories",
            "Computer Case Accessories",
            "Tablet Accessories",
            "KVM Switches",
            "Monitor Accessories",
            "Printer Accessories",
            "USB Hubs",
            "Power Protection",
    ]
    
    
    var networking = [
        "Routers",
        "Network Products",
        "Network Attached Storage",
        "Hubs & Switches",
        "Range Extenders",
        "Wireless Access Point",
        "Modems",
        "Server Accessories",
        "Network Adapters",
        "Firewalls",   
    ]
    
    
    var software = [
        "Security & Antivirus",
        "Business Software",
        "Operating Systems",
        "Graphics & Multimedia",
        "Server Operating Systems",
        "Programming & Development",
        "Children's Software",
        "Utilities",
        "Educational Softwares",
        "Network Tools Softwares",
    ]
    
    
    var inputDevices = [
        "Keyboards",
        "Mice & Track Balls",
        "Web Cameras",
        "Graphic Tablets",
        "Microphones",
    ]

    var x = {  
        "Computers" : [
            'all-computers',		
            'laptops', 
            'printers',
            'tablet',
            'monitors',
            'desktops',
            'Hardware',
            'Components',
            'Networking',
            'Software',
            // Components

            // Networking
            
            // Software
            
        ],
        "TVs": [
            'all-television',
            'television',
            'QLED TVs',
            'OLED TVs',
            'Ultra HD TVs', 
            'projectors',
            'blu-ray-players',
            'media-streaming-devices',
            'tv-and-video',
        
            
        ],
        "Audio":  [
            'all-audio',
            'head-phones',
            'speakers',
            'portable-speakers',
            'mp3-media-players',
            'radio-players',
            'amplifiers-receivers',
            'home-audio',
            'portable-digital-recorders',
            'portable-cd-players',  
            'mp3-media-players-accessories',
            'audio-video-accessories',
            'studio-and-stage-equipment',
            'audio-visual-cables',
            'audio-visual-equipment',           
        ],
    
        "Smart Home": [
            'all-security',
            'security-systems-and-surveillance',
            'home-automation',
            'remote-controls',  
            'home-security',
            'gps-devices',
        ],
    
    
        "Mobile Phone & Accessories" : [
            "all-phones",
            'mobile-phones',
            'smart-watches',
            'mobile-phone-accessories',
            'two-way-radios',
            'phones',
        ],
    
        "Gaming" : [
            'all-gaming',
            'pc-games',
            'game-consoles',
            'xbox-one-games',
            'game-accessories',
            'ps4-playstation-4-games',
            'video-game-consoles',
        ],
    
        "Music Vinyl" : [
            'all-movies-and-vinyl',
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
    
        "Movies, TV Shows & Music Vinyl": [
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
    
        // "Collectibles & Merchandise": [
        //     "All Collectibles and Merchandise",
        //     "New Arrivals",
        //     "Hot Deals & Offers",
        //     "POP! Vinyl",
        //     "Collectibles",
        //     "Merchandise",
        //     "Shop by franchise",
        //     "Apparel",
        //     "Card & board games",
        //     "Jigsaw puzzles",
        // ],
        "Cameras & Drones": [
            'digital-cameras',
            'camera-accessories',
            'camera-lenses',
            'camcorders',
            'drones',
            'cameras-camcorders',
        ],
    
    
        // "Drones, escooters & Tech Toys" : [
        //     "All Drones", 
        //     "E-scooters and Tech Toys",
        //     "Drones",
        //     "E-scooters & rideables",
        //     "Robotics & tech toys",
    
        // ],
    
        // "Health & Fitness Wearables" : [
        //     "All Health, Fitness & Wearables",
        //     "Smart watches",
        //     "Sports watches",
        //     "Activity trackers",
        //     "Wearables",
        //     "Health & grooming",
        // ],
        "Fridges, Freezers and Dishwashers": [
            'all-Fridges-freezers-and-dishwashers',
            'refrigerators',
            'freezers',
            'dishwashers'
        ],
        "Washing Machines and Dryers" : [
            'all-Washing-machines-and-dryers',
            'washing-machines',
            'dryers',
        ],
        "Home Accessories" : [
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
        "Heating & Cooling" : [
            'home-heater-systems',
            'heaters',
            'air-conditioners',
            'refrigerators',
            'air-treatment'
        ]
    }

    const toggleCategories = (category) => {
        setSelectedCategory(category)
    }
    const styles = theme => ({
        root: {
          width: '100%',
          maxWidth: 360
        },
        icon: {
          color: 'red',
        }
      });
    const style = { fill: "#0491ED", fontSize: "50px" }
    return (

        <div>
            <div class="row menu__popup">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col col-lg-2">
                        <span className="close" onClick={props.toggle}>
                            &times;
                        </span>
                    </div>
                    
                </div>
                
                <div className="row menu__popup--bottom">
                    <div className="col-6 col-md-4 categories__grid">
                        <ul className="filters__sublist categories__popup--nav">
                            <h4 className="filter__title">{props.heading}</h4>
                            {

                                Object.keys(x).map((value) => {
                                    var f = {}
                                    var j = <AlbumIcon  style={style}/>
                                    if(value=="Computers"){
                                        j = <FaLaptop style={style}/>
                                    }else if(value=="Audio"){
                                        j = <HeadphonesIcon style={style}/>
                                    }else if(value=="Smart Home"){
                                        j = <HomeMaxIcon style={style}/>
                                    }else if(value==""){
                                        j = <PhoneIphoneIcon style={style}/>
                                    }else if(value=="Mobile Phone & Accessories"){
                                        j = <GamesIcon style={style}/>
                                    }else if(value=="Movies, TV Shows & Music Vinyl"){
                                        j = <TheatersIcon style={style}/>
                                    }else if(value=="Cameras & Drones"){
                                        j = <CameraIcon style={style}/>
                                    }else if(value=="Home Accessories"){
                                        j = <BlenderIcon style={style}/>
                                    }else if(value=="Heating & Cooling"){
                                        j = <AcUnitIcon style={style}/>
                                    }else if(value=="TVs"){
                                        j = <TvIcon style={style}/>
                                    }else if(value=="Fridges, Freezers and Dishwashers"){
                                        j = <LocalLaundryServiceIcon style={style}/>
                                    }else if(value=="Washing Machines and Dryers"){
                                        j = <KitchenIcon style={style}/>
                                    }
                                     
                                    return(
                                    <a href="#" className="menu-item2" onClick={() => setSelectedCategory(value)}>
                                        <span className="category__icon">
                                            {j}   
                                        </span>
                                       {value}
                                    </a>
                                )
                                })
                            }
                        
                        </ul>
                    </div>
                    <div class="col-12 col-md-8 categories__grid2">
                        <ul className="row filters__sublist categories__popup--nav">
                                <h4 className="menu-title2">{selectedCategory}</h4>
                                {
                                    x[selectedCategory] == "Computers" ? (
                                        <div>
                                            <a href="#" className="sub__menu-item2">
                                                       Computers
                                            </a>
                                            <a href="#" className="sub__menu-item2">
                                                       Computers
                                            </a>
                                        </div>
                                        
                                    ):  (
                                        x[selectedCategory].map((value) => {
                                            if(selectedCategory == "Computers"){
                                                if(value == "Networking"){
                                                    return(
                                                        <div className="col-4">
                                                            
                                                                <li onClick={ () => routeChange("/categories/computers/"+value)} >
                                                                    <Link to={`/categories/computers/`+value+`/`}>
                                                                        <a className="sub__menu-item2">
                                                                            {value.replaceAll("-", " ")}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            {
                                                                // console.log(subCategoryData2[value])
                                                                // subCategoryData2[value].map((val) => {
                                                                //     console.log(val)  
                                                                // })
                                                                networking.map((val) => {
                                                                    console.log(val)
                                                                    // setState({"filterNameMP": val})
                                                                    return(
                                                                        <li onClick={() => routeChange("/categories/computers/"+val)}>
                                                                            <Link to={`/categories/computers/`+value+`/`}>
                                                                                <a className="sub__menu-item3">
                                                                                    {val}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                    )
                                                }else if(value == "Software"){
                                                    return(
                                                        <div className="col-4">
                                                            
                                                                <li onClick={ () => routeChange("/categories/computers/"+value)} >
                                                                    <Link to={`/categories/computers/`+value+`/`}>
                                                                        <a className="sub__menu-item2">
                                                                            {value.replaceAll("-", " ")}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            {
                                                                // console.log(subCategoryData2[value])
                                                                // subCategoryData2[value].map((val) => {
                                                                //     console.log(val)  
                                                                // })
                                                                software.map((val) => {
                                                                    console.log(val)
                                                                    // setState({"filterNameMP": val})
                                                                    return(
                                                                        <li onClick={() => routeChange("/categories/computers/"+val)}>
                                                                            <Link to={`/categories/computers/`+value+`/`}>
                                                                                <a className="sub__menu-item3">
                                                                                    {val}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                    )
                                                }else if(value == "Hardware"){
                                                    return(
                                                        <div className="col-4">
                                                            
                                                                <li onClick={ () => routeChange("/categories/computers/"+value)} >
                                                                    <Link to={`/categories/computers/`+value+`/`}>
                                                                        <a className="sub__menu-item2">
                                                                            {value.replaceAll("-", " ")}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            {
                                                                // console.log(subCategoryData2[value])
                                                                // subCategoryData2[value].map((val) => {
                                                                //     console.log(val)  
                                                                // })
                                                                inputDevices.map((val) => {
                                                                    console.log(val)
                                                                    // setState({"filterNameMP": val})
                                                                    return(
                                                                        <li onClick={() => routeChange("/categories/computers/"+val)}>
                                                                            <Link to={`/categories/computers/`+value+`/`}>
                                                                                <a className="sub__menu-item3">
                                                                                    {val}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                    )
                                                }else if(value == "Components"){
                                                    return(
                                                        <div className="col-4">
                                                            
                                                                <li onClick={ () => routeChange("/categories/computers/"+value)} >
                                                                    <Link to={`/categories/computers/`+value+`/`}>
                                                                        <a className="sub__menu-item2">
                                                                            {value.replaceAll("-", " ")}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            {
                                                                // console.log(subCategoryData2[value])
                                                                // subCategoryData2[value].map((val) => {
                                                                //     console.log(val)  
                                                                // })
                                                                components.map((val) => {
                                                                    console.log(val)
                                                                    // setState({"filterNameMP": val})
                                                                    return(
                                                                        <li onClick={() => routeChange("/categories/computers/"+val)}>
                                                                            <Link to={`/categories/computers/`+value+`/`}>
                                                                                <a className="sub__menu-item3">
                                                                                    {val}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                    )
                                                }
                                                else{
                                                    return(
                                                        <div className="col-4">
                                                                <li onClick={ () => routeChange("/categories/computers/"+value)} >
                                                                    <Link to={`/categories/computers/`+value+`/`}>
                                                                        <a className="sub__menu-item2">
                                                                            {value.replaceAll("-", " ")}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            {
                                                                console.log(value)
                                                            }
                                                            {
                                                                subCategoryData2[value].map((val) => {
                                                                    console.log(val)
                                                                    // setState({"filterNameMP": val})

                                                                    return(
                                                                        <li onClick={() => routeChange2("/categories/computers/"+value, val, value)}>
                                                                            <Link to={`/categories/computers/`+value+`/`}>
                                                                                <a className="sub__menu-item3">
                                                                                    {val}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                    )
                                                }
                                            }else if(selectedCategory == "TVs"){
                                                if(value == "television"){
                                                    return(
                                                        <div className="col-4">
                                                            <li onClick={ () => routeChange("/categories/television/tvs")} >
                                                                <Link to={`/categories/television/tvs`}>
                                                                    <a className="sub__menu-item2">
                                                                        {value.replaceAll("-", " ")}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            {
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            // 'OLED TVs': {
                                                            //     "OLED TVs Over 60 inches": "OLEDMorethan60Inch",
                                                            //     "OLED TVs 48 to 60 inches": "OLEDBelow60Inch",
                                                            // },

                                                            // 'QLED TVs': {
                                                            //     "QLED TVs 50 Inches and Under": "under50Inches",
                                                            //     "55 Inch QLED TVs": "55InchQLED",
                                                            //     "65 Inch QLED TVs": "65InchQLED",
                                                            //     "75 Inch QLED TVs": "75InchQLED",
                                                            //     "85 Inch QLED TVs": "85InchQLED",
                                                            // },
                                                            // 'Ultra HD TVs': {
                                                            //     'Ultra HD TVs Under 48 Inches': "UHDUnder48Inches",
                                                            //     'Ultra HD TVs 48 to 60 inches': "UHD40to60Inches",
                                                            //     'Ultra HD TVs Over 60 inches': "UHDMorethan60",
                                                            // },
                                                            
                                                            return(
                                                                <li onClick={() => routeChange2("/categories/television/tvs", val, value)}>
                                                                    <Link to={`/categories/television/tvs`}>
                                                                        <a className="sub__menu-item3">
                                                                            {val}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                        }
                                                        </div>
                                                        )
                                                }else if(value == "OLED TVs" || value == "Ultra HD TVs" ||value == "QLED TVs"){
                                                    return(
                                                        <div className="col-4">
                                                            <li onClick={ () => routeChange("/categories/television/tvs")} >
                                                                <Link to={`/categories/television/tvs`}>
                                                                    <a className="sub__menu-item2">
                                                                        {value.replaceAll("-", " ")}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            {
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                                <li onClick={() => routeChange2("/categories/television/tvs", val, value)}>
                                                                    <Link to={`/categories/television/tvs`}>
                                                                        <a className="sub__menu-item3">
                                                                            {val}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                        }
                                                        </div>
                                                        )
                                                }else{
                                                    return(
                                                        <div className="col-4">
                                                            <li onClick={ () => routeChange("/categories/television/"+value)} >
                                                                <Link to={"/categories/television/"+value}>
                                                                    <a className="sub__menu-item2">
                                                                        {value.replaceAll("-", " ")}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            {
                                                                // console.log(subCategoryData2[value])
                                                                // subCategoryData2[value].map((val) => {
                                                                //     console.log(val)  
                                                                // })
                                                                // 'OLED TVs': {
                                                            //     "OLED TVs Over 60 inches": "OLEDMorethan60Inch",
                                                            //     "OLED TVs 48 to 60 inches": "OLEDBelow60Inch",
                                                            // },

                                                            // 'QLED TVs': {
                                                            //     "QLED TVs 50 Inches and Under": "under50Inches",
                                                            //     "55 Inch QLED TVs": "55InchQLED",
                                                            //     "65 Inch QLED TVs": "65InchQLED",
                                                            //     "75 Inch QLED TVs": "75InchQLED",
                                                            //     "85 Inch QLED TVs": "85InchQLED",
                                                            // },
                                                            // 'Ultra HD TVs': {
                                                            //     'Ultra HD TVs Under 48 Inches': "UHDUnder48Inches",
                                                            //     'Ultra HD TVs 48 to 60 inches': "UHD40to60Inches",
                                                            //     'Ultra HD TVs Over 60 inches': "UHDMorethan60",
                                                            // },
                                                                subCategoryData2[value].map((val) => {
                                                                console.log(val)
                                                                return(
                                                                    <li onClick={() => routeChange2("/categories/television/"+value, val, value)}>
                                                                        <Link to={"/categories/television/"+value}>
                                                                            <a className="sub__menu-item3">
                                                                                {val}
                                                                            </a>
                                                                        </Link>
                                                                    </li>)
                                                                })
                                                        }
                                                        </div>
                                                    )
                                                }
                                            }
                                            else if(value == "Mobile Phone & Accessories"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("/categories/television/"+value)} >
                                                            <Link to={"categories/television/"+value}>
                                                                <a className="sub__menu-item2">
                                                                {value.replaceAll("-", " ")}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li onClick={() => routeChange2("/categories/television/"+value, val, value)}>

                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Cameras & Drones"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/cameras/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li onClick={() => routeChange2("categories/cameras/"+value, val, value)}>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            
                                            else if(value == "Gaming"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/television/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Movies, TV Shows & Music Vinyl"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/television/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Music Vinyl"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/television/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Washing Machines and Dryers"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/Washing-machines-and-dryers/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Fridges, Freezers and Dishwashers"){
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("categories/Fridges-freezers-and-dishwashers/"+value)} >
                                                            <a className="sub__menu-item2">
                                                            {value.replaceAll("-", " ")}
                                                            </a>
                                                        </li>
                                                        {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                    )
                                            }
                                            else if(value == "Home Accessories"){
                                                return(
                                                    <div className="col-4">
                                                        <div className="col-4">
                                                            <li onClick={ () => routeChange("categories/television/"+value)} >
                                                                <a className="sub__menu-item2">
                                                                {value.replaceAll("-", " ")}
                                                                </a>
                                                            </li>
                                                            {
                                                            // console.log(subCategoryData2[value])
                                                            // subCategoryData2[value].map((val) => {
                                                            //     console.log(val)  
                                                            // })
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li>
                                                                <a className="sub__menu-item3">
                                                                    {val}
                                                                </a>
                                                            </li>)
                                                        })
                                                        }
                                                        </div>
                                                    </div>
                                                    )
                                            }                                            
                                            else{
                                                return(
                                                    <div className="col-4">
                                                        <li onClick={ () => routeChange("/categories/"+y[selectedCategory]+"/"+value)} >
                                                            <Link to={"/categories/"+y[selectedCategory]+"/"+value}>
                                                                <a className="sub__menu-item2">
                                                                {value.replaceAll("-", " ")}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        {
                                                            subCategoryData2[value].map((val) => {
                                                            console.log(val)
                                                            return(
                                                            <li onClick={() => routeChange2("/categories/"+y[selectedCategory]+"/"+value, val, value)}>
                                                                <Link to={"/categories/"+y[selectedCategory]+"/"+value}>
                                                                    <a className="sub__menu-item3">
                                                                        {val}
                                                                    </a>
                                                                </Link>
                                                            </li>)
                                                        })
                                                        }
                                                    </div>
                                                )
                                            }
                                        })
                                    )
                                }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={props.toggle}>
                    &times;
                </span>
                <form>
                <h3>Register!</h3>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <input type="submit" />
                </form>
            </div>
            </div>
        </div>
      );
}

export default MenuPopup

