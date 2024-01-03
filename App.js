import React from "react"
import ReactDOM from "react-dom/client"
const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img className="logoimg" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>

       
    )
}
const resobj=[
    {
    "info": {
    "id": "805283",
    "name": "The Cake Company",
    "cloudinaryImageId": "6b0d662cea437af3c8381416af5e487c",
    "locality": "Civic_Center_Jab",
    "areaName": "Civic_Center_Jab",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Indian"
    ],
    "avgRating": 4,
    "parentId": "206236",
    "avgRatingString": "4.0",
    "totalRatingsString": "2",
    "promoted": true,
    "adTrackingId": "cid=10312436~p=1~eid=0000018c-cae4-3f9f-0163-15f400910109~srvts=1704211005343~45995",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=805283",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "101279",
    "name": "Nanking Chinese Restaurant",
    "cloudinaryImageId": "swtwyvmtz7cr97ituhhe",
    "locality": "Bridge Road",
    "areaName": "Napier Town",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Chinese",
    "Seafood",
    "Asian",
    "Street Food"
    ],
    "avgRating": 4.2,
    "parentId": "144073",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=101279",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "101312",
    "name": "Riyaz Hotel",
    "cloudinaryImageId": "ecjljmlexqzdamxeo0j6",
    "locality": "Badi Omti",
    "areaName": "Ganjipura",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Mughlai"
    ],
    "avgRating": 4.1,
    "parentId": "169928",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "15 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=101312",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "162357",
    "name": "Darbar Veg Restaurant",
    "cloudinaryImageId": "90e65f9bfc54de0d1da6a000def0ea2b",
    "locality": "Rajiv Gandhi Square",
    "areaName": "Naudra Bridge",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Biryani",
    "Snacks",
    "Indian"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "68469",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=162357",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "804184",
    "name": "Meal Deal - Indian, Chinese and More",
    "cloudinaryImageId": "83a34dae86c988f9f8c9fae72e2af455",
    "locality": "Napier Town",
    "areaName": " Napier Town",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Indian",
    "Beverages"
    ],
    "parentId": "479991",
    "avgRatingString": "NEW",
    "promoted": true,
    "adTrackingId": "cid=10305309~p=3~eid=0000018c-cae4-3f9f-0163-15f600910335~srvts=1704211005343~45995",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "1.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-03 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=804184",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "281229",
    "name": "Jharokha Restaurant The Arihant Palace",
    "cloudinaryImageId": "c858d696aa70fd26eff6888631c76885",
    "locality": "Russel Chowk",
    "areaName": "Russel Chowk",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Thalis",
    "Biryani",
    "Fast Food",
    "Snacks"
    ],
    "avgRating": 4.2,
    "parentId": "110816",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.6,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "1.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=281229",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "144805",
    "name": "Munna Hotel Damoh Naka ",
    "cloudinaryImageId": "czhdvfpzazeofq9sbslz",
    "locality": "Shyama Prasad Mukherjee Market",
    "areaName": "Damoh Naka",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "Indian"
    ],
    "avgRating": 4,
    "veg": true,
    "parentId": "141902",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=144805",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "102672",
    "name": "Pawar's Restaurant",
    "cloudinaryImageId": "lqlsnoc6vf92a7pu1ded",
    "locality": "Gol Bazaar Road",
    "areaName": "Lordganj",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "South Indian",
    "Chinese",
    "Snacks",
    "North Indian",
    "Street Food"
    ],
    "avgRating": 4.1,
    "veg": true,
    "parentId": "156722",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 16,
    "lastMileTravel": 1.4,
    "serviceability": "SERVICEABLE",
    "slaString": "16 mins",
    "lastMileTravelString": "1.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 22:15:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=102672",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "804181",
    "name": "Momos hai Firangi",
    "cloudinaryImageId": "f0df1c71f307e61bd2707f30265575e4",
    "locality": "Napier Town",
    "areaName": " Napier Town",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese"
    ],
    "parentId": "479990",
    "avgRatingString": "NEW",
    "promoted": true,
    "adTrackingId": "cid=10305329~p=4~eid=0000018c-cae4-3f9f-0163-15f700910442~srvts=1704211005343~45995",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "1.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-03 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=804181",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "102140",
    "name": "New Pawar Restaurant",
    "cloudinaryImageId": "62df07c8f844172e57475d67741c5b6e",
    "locality": "Model Road",
    "areaName": "Teen Patti",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Thalis",
    "Biryani",
    "Chinese",
    "Snacks"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "147483",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "18 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=102140",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "226789",
    "name": "Naidu's Dilli Ki Gali Parathe wali",
    "cloudinaryImageId": "vryqci3kmiumis8fj6d1",
    "locality": "Samdariya mall",
    "areaName": "Civic Center",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Punjabi",
    "Biryani"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "314240",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=226789",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "226740",
    "name": "The Oven Classics(Cantt)",
    "cloudinaryImageId": "eot2nvcqou0y2wjn63jq",
    "locality": "Station Road",
    "areaName": "South Civil Lines",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Fast Food"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "212180",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 22:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=226740",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "791951",
    "name": "Abhinandan Veg Restaurant",
    "cloudinaryImageId": "2bac7a35febc2ae024028977b0e0ea82",
    "locality": "Motor Stand Teen Patti Square",
    "areaName": "Civic_Center_Jab",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian"
    ],
    "avgRating": 3.9,
    "parentId": "470449",
    "avgRatingString": "3.9",
    "totalRatingsString": "10+",
    "promoted": true,
    "adTrackingId": "cid=9793753~p=5~eid=0000018c-cae4-3f9f-0163-15f800910566~srvts=1704211005343~45995",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-03 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=791951",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "547612",
    "name": "Vasanta Bhavan",
    "cloudinaryImageId": "tdhhkr3w6nmkbskqqt34",
    "locality": "Jab_North",
    "areaName": "Jab_North",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "South Indian"
    ],
    "veg": true,
    "parentId": "16954",
    "avgRatingString": "--",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.1,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 22:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=547612",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "514521",
    "name": "Hira Sweets",
    "cloudinaryImageId": "sutckm7hhybbqhxxsozo",
    "locality": "Narmada Road",
    "areaName": "NARMADA ROAD",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Sweets",
    "Bakery"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "5155",
    "avgRatingString": "4.7",
    "totalRatingsString": "50+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-02 21:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=514521",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    },
    {
    "info": {
    "id": "624744",
    "name": "The Silver Spoon",
    "cloudinaryImageId": "migjzlnbrvflgiuks06m",
    "locality": "Nagar nigam market",
    "areaName": "Gohalpur",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Chinese",
    "Snacks",
    "Beverages"
    ],
    "parentId": "213882",
    "avgRatingString": "--",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.2,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "2.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-03 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=624744",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    }
    }
    ]
const Rescard=()=>{
    return (
        <div className="rescard">
        <img className="foodimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/90e65f9bfc54de0d1da6a000def0ea2b" alt="foodimg" />
        <h3>Darbar Veg Restaurant</h3>
        <h4>Chinese North Indian</h4>
        <h4>4.4 stars</h4>
        <h4>240 rupees</h4>
        </div>
        
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
        <div className="res-container">
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
            <Rescard/>
        </div>
        </div>
        
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
        <Header/>
        <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);