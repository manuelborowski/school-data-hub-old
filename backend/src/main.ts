import express, { Request, Response, NextFunction } from 'express';
import logger  from "./logger.js";

const app = express();
const port = 3000;

logger.info("en dit is nog een test");

app.use(express.static('../frontend/public'));

interface LocationWithTimezone {
    location: string;
    timezoneName: string;
    timezoneAbbr: string;
    utcOffset: number;
};

const getLocationsWithTimezones = (req: Request, res: Response, next: NextFunction) => {
    let locations: LocationWithTimezone[] = [
        {
            location: 'Germany',
            timezoneName: 'Central European Time',
            timezoneAbbr: 'CET',
            utcOffset: 1
        },
        {
            location: 'China',
            timezoneName: 'China Standard Time',
            timezoneAbbr: 'CST',
            utcOffset: 8
        },
        {
            location: 'Argentina',
            timezoneName: 'Argentina Time',
            timezoneAbbr: 'ART',
            utcOffset: -3
        },
        {
            location: 'Japan',
            timezoneName: 'Japan Standard Time',
            timezoneAbbr: 'JST',
            utcOffset: 9
        }
    ];

    res.status(200).json(locations);
};

app.get('/timezones', getLocationsWithTimezones);

app.listen(port, () => {
    console.log(`Manuel Test: Timezones by location application is running on port ${port}.`);
});