import React from 'react';
import Bundesliga from '../img/bundesliga.png';
import Eredivisie from '../img/eredivise.png';
import LaLiga from '../img/laliga.png';
import Ligue1 from '../img/newLigue1.png';
import PremierLeague from '../img/premierleague.png';
import SerieA from '../img/serieA.png';

const LeagueInfo = (props) => {
    let imgSrc;
    switch (props.leagueCaption) {

        case "Bundesliga":
            imgSrc = Bundesliga;
            break;

        case "Eredivisie":
            imgSrc = Eredivisie;
            break;

        case "Primera Division":
            imgSrc = LaLiga;
            break;

        case "Ligue 1":
            imgSrc = Ligue1;
            break;

        case "Premier League":
            imgSrc = PremierLeague;
            break;

        case "Serie A":
            imgSrc = SerieA;
            break;

        default:
            imgSrc = LaLiga;
            break;
    }

    return (
        <div className="league-info">
            <img src={imgSrc} alt="championnat" width="240" height="320" />
        </div>
    );
};

export default LeagueInfo;