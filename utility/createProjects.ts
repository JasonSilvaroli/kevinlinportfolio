import ritzicon from "../public/images/campaigns/ritzicon.png";
import ritzimage1 from "../public/images/campaigns/ritzimage1.png";
import ritzimage2 from "../public/images/campaigns/ritzimage2.png";
import ritzimage3 from "../public/images/campaigns/ritzimage3.png";
import ritzimage4 from "../public/images/campaigns/ritzimage4.png";
import ritzimage5 from "../public/images/campaigns/ritzimage5.png";
import ritzimage6 from "../public/images/campaigns/ritzimage6.png";

import hockeyvilleicon from "../public/images/campaigns/hockeyvilleIcon.png";
import hockeyimage1 from "../public/images/campaigns/hockeyimage1.png";
import hockeyimage2 from "../public/images/campaigns/hockeyimage2.png";
import hockeyimage3 from "../public/images/campaigns/hockeyimage3.png";
import hockeyimage4 from "../public/images/campaigns/hockeyimage4.png";
import hockeyimage5 from "../public/images/campaigns/hockeyimage5.png";
import hockeyimage6 from "../public/images/campaigns/hockeyimage6.png";

import trupanionicon from "../public/images/campaigns/trupanionicon.png";
import trupanionimage1 from "../public/images/campaigns/trupanionimage1.png";
import trupanionimage2 from "../public/images/campaigns/trupanionimage2.png";
import trupanionimage3 from "../public/images/campaigns/trupanionimage3.png";
import trupanionimage4 from "../public/images/campaigns/trupanionimage4.png";
import trupanionimage5 from "../public/images/campaigns/trupanionimage5.png";

import uniqloicon from "../public/images/campaigns/uniqloicon.png";

import essenceicon from "../public/images/campaigns/essenceicon.png";

import defaultIcon from "../public/images/favicon_io/android-chrome-192x192.png";

import spotifyicon from "../public/images/campaigns/spotifyicon.png";
import { StaticImageData } from "next/image";

export interface CampaignInterface {
    id: string;
    name: string;
    description: string;
    logo: StaticImageData;
    photos?: Array<StaticImageData> | [];
    collaborators?: Array<string> | [];
    complete: boolean;
}

export const defaultCampaign = {
    id: "default",
    name: "Loading...",
    description: "Loading...",
    logo: defaultIcon,
    photos: [],
    collaborators: [],
    complete: false,
};

export const ritzCampaign = {
    id: "ritz",
    name: "Ritz Campaign",
    description:
        "Campaign to promote Ritz Crackers as a delicious quick snacking option",
    logo: ritzicon,
    photos: [
        ritzimage1,
        ritzimage2,
        ritzimage3,
        ritzimage4,
        ritzimage5,
        ritzimage6,
    ],
    collaborators: [],
    complete: true,
};

export const hockeyvilleCampaign = {
    id: "hockeyville",
    name: "Hockeyville Campaign",
    description:
        "IMC Campaign designs for Kraft Hockeyville with our main theme being #HockeyBelongsToYou as we want to make hockey a more inclusive sport",
    logo: hockeyvilleicon,
    photos: [
        hockeyimage1,
        hockeyimage2,
        hockeyimage3,
        hockeyimage4,
        hockeyimage5,
        hockeyimage6,
    ],
    collaborators: ["Faby Gomez", "Veronica Rodriguez", "Matthew Sumook"],
    complete: true,
};

export const trupanionCampaign = {
    id: "trupanion",
    name: "Trupanion Campaign",
    description: "Made Trupanion's website design more user friendly",
    logo: trupanionicon,
    photos: [
        trupanionimage1,
        trupanionimage2,
        trupanionimage3,
        trupanionimage4,
        trupanionimage5,
    ],
    collaborators: ["Renston Crasta", "Isabel Younan"],
    complete: true,
};

export const uniqloCampaign = {
    id: "uniqlo",
    name: "Uniqlo Campaign",
    description: "To be added shortly!",
    logo: uniqloicon,
    photos: [],
    collaborators: [],
    complete: false,
};

export const essenceCampaign = {
    id: "essence",
    name: "Essence Of Life Organics Campaign",
    description: "To be added shortly!",
    logo: essenceicon,
    photos: [],
    collaborators: [],
    complete: false,
};

export const spotifyCampaign = {
    id: "spotify",
    name: "Spotify Campaign",
    description: "To be added shortly!",
    logo: spotifyicon,
    photos: [],
    collaborators: [],
    complete: false,
};

export const allCampaigns = [
    ritzCampaign,
    hockeyvilleCampaign,
    trupanionCampaign,
    uniqloCampaign,
    essenceCampaign,
    spotifyCampaign,
];

export const getCampaign = (name: string | string[]) => {
    return allCampaigns.filter((element) => {
        var isTrue = element.id === name ? true : false;
        return isTrue;
    })[0];
};

export const getCampaignIcons = () => {
    var icons: any = [];

    allCampaigns.forEach((obj) => {
        icons.push({
            id: obj.id,
            logo: obj.logo,
            description: obj.description,
        });
    });

    return icons;
};
