//Objet réponse de Wttr.in 

export interface WeatherValue {
    value: string;
}

export interface CurrentCondition {
    FeelsLikeC: string;
    FeelsLikeF: string;
    cloudcover: string;
    humidity: string;
    localObsDateTime: string;
    observation_time: string;
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    temp_C: string;
    temp_F: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherValue[];
    weatherIconUrl: WeatherValue[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
}

export interface NearestArea {
    areaName: WeatherValue[];
    country: WeatherValue[];
    latitude: string;
    longitude: string;
    population: string;
    region: WeatherValue[];
    weatherUrl: WeatherValue[];
}

export interface Request {
    query: string;
    type: string;
}

export interface Astronomy {
    moon_illumination: string;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

export interface Hourly {
    DewPointC: string;
    DewPointF: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    HeatIndexC: string;
    HeatIndexF: string;
    WindChillC: string;
    WindChillF: string;
    WindGustKmph: string;
    WindGustMiles: string;
    chanceoffog: string;
    chanceoffrost: string;
    chanceofhightemp: string;
    chanceofovercast: string;
    chanceofrain: string;
    chanceofremdry: string;
    chanceofsnow: string;
    chanceofsunshine: string;
    chanceofthunder: string;
    chanceofwindy: string;
    cloudcover: string;
    humidity: string;
    precipInches: string;
    precipMM: string;
    pressure: string;
    pressureInches: string;
    tempC: string;
    tempF: string;
    time: string;
    uvIndex: string;
    visibility: string;
    visibilityMiles: string;
    weatherCode: string;
    weatherDesc: WeatherValue[];
    weatherIconUrl: WeatherValue[];
    winddir16Point: string;
    winddirDegree: string;
    windspeedKmph: string;
    windspeedMiles: string;
}

export interface Weather {
    astronomy: Astronomy[];
    avgtempC: string;
    avgtempF: string;
    date: string;
    hourly: Hourly[];
    maxtempC: string;
    maxtempF: string;
    mintempC: string;
    mintempF: string;
    sunHour: string;
    totalSnow_cm: string;
    uvIndex: string;
}

export interface WttrObject {
    current_condition: CurrentCondition[];
    nearest_area: NearestArea[];
    request: Request[];
    weather: Weather[];
}

export interface WttrCachedObject extends WttrObject{
    _id: string,
    cached_date: Date
}

export interface WttrResponse{
    query : string,
    data: WttrObject[]
}
export interface SimpleCondition {
    FeelsLikeC: string;
    temp_C: string;
    weatherDesc: string;
    weatherIconUrl: string;
}

export interface SimpleDailyCondition extends SimpleCondition{
    time:string
}
export interface ObservationInfo{
    areaName:string;
    region: string;
    country: string;
    localObsDateTime: string;
}

export interface DailyCondition{
    date:string;
    avgtempC: string;
    mintempC: string;
    maxtempC: string;
    hourly: SimpleDailyCondition[];
}

export interface SimpleWttrObject{
    current_condition: SimpleCondition;
    observation: ObservationInfo;
    weather: DailyCondition[];
}

export function ConvertWttrArray(wttrs:WttrObject[]):SimpleWttrObject[]{
    const returnObj:SimpleWttrObject[] = []

    for (const wttr of wttrs) {
        returnObj.push(ConvertToSimpleWttrObject(wttr))
    }

    return returnObj
}
export function ConvertToSimpleWttrObject(wttr:WttrObject):SimpleWttrObject{
    const returnObj:SimpleWttrObject =  {
        observation:  {
            areaName:           wttr.nearest_area[0].areaName[0].value,
            region:             wttr.nearest_area[0].region[0].value,
            country:            wttr.nearest_area[0].country[0].value,
            localObsDateTime:   wttr.current_condition[0].localObsDateTime
        },
        current_condition:  {
            FeelsLikeC:     wttr.current_condition[0].FeelsLikeC,
            temp_C:         wttr.current_condition[0].temp_C,
            weatherDesc:    wttr.current_condition[0].weatherDesc[0].value,
            weatherIconUrl: wttr.current_condition[0].weatherIconUrl[0].value
            // weatherIconUrl: "wsymbol_0001_sunny"
        },
        weather:[]
    }
    
    for (const wttrDaily of wttr.weather) {
        const daily:DailyCondition = {
            date:       wttrDaily.date,
            avgtempC:   wttrDaily.avgtempC,
            mintempC:   wttrDaily.mintempC,
            maxtempC:   wttrDaily.maxtempC,
            hourly:     []
        }

        for (const hourly of wttrDaily.hourly) {
            daily.hourly.push(
                {
                    time:           hourly.time,
                    FeelsLikeC:     hourly.FeelsLikeC,
                    temp_C:         hourly.tempC,
                    weatherDesc:    hourly.weatherDesc[0].value,
                    weatherIconUrl: hourly.weatherIconUrl[0].value,
                    // weatherIconUrl: "wsymbol_0001_sunny"
                }
            )
        }
        returnObj.weather.push(daily)
    }
    return returnObj
}