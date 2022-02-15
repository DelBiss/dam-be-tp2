import { WttrObject, SimpleWttrObject, ConvertToSimpleWttrObject } from "../../../common/weather";

export const wttrData: WttrObject[] = [
    {
        "current_condition": [
            {
                "FeelsLikeC": "-6",
                "FeelsLikeF": "22",
                "cloudcover": "100",
                "humidity": "93",
                "localObsDateTime": "2022-01-09 04:07 PM",
                "observation_time": "09:07 PM",
                "precipInches": "0.0",
                "precipMM": "0.5",
                "pressure": "1004",
                "pressureInches": "30",
                "temp_C": "0",
                "temp_F": "32",
                "uvIndex": "1",
                "visibility": "3",
                "visibilityMiles": "1",
                "weatherCode": "296",
                "weatherDesc": [
                    {
                        "value": "Light rain, mist"
                    }
                ],
                "weatherIconUrl": [
                    {
                        "value": ""
                    }
                ],
                "winddir16Point": "SSW",
                "winddirDegree": "210",
                "windspeedKmph": "17",
                "windspeedMiles": "11"
            }
        ],
        "nearest_area": [
            {
                "areaName": [
                    {
                        "value": "Montreal"
                    }
                ],
                "country": [
                    {
                        "value": "Canada"
                    }
                ],
                "latitude": "45.500",
                "longitude": "-73.583",
                "population": "3268513",
                "region": [
                    {
                        "value": "Quebec"
                    }
                ],
                "weatherUrl": [
                    {
                        "value": ""
                    }
                ]
            }
        ],
        "request": [
            {
                "query": "Lat 45.50 and Lon -73.61",
                "type": "LatLon"
            }
        ],
        "weather": [
            {
                "astronomy": [
                    {
                        "moon_illumination": "42",
                        "moon_phase": "First Quarter",
                        "moonrise": "11:36 AM",
                        "moonset": "No moonset",
                        "sunrise": "07:33 AM",
                        "sunset": "04:29 PM"
                    }
                ],
                "avgtempC": "-3",
                "avgtempF": "26",
                "date": "2022-01-09",
                "hourly": [
                    {
                        "DewPointC": "-13",
                        "DewPointF": "9",
                        "FeelsLikeC": "-17",
                        "FeelsLikeF": "2",
                        "HeatIndexC": "-10",
                        "HeatIndexF": "13",
                        "WindChillC": "-17",
                        "WindChillF": "2",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "99",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "32",
                        "chanceofrain": "0",
                        "chanceofremdry": "85",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "73",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "61",
                        "humidity": "83",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1028",
                        "pressureInches": "30",
                        "tempC": "-10",
                        "tempF": "13",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SE",
                        "winddirDegree": "129",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "-10",
                        "DewPointF": "13",
                        "FeelsLikeC": "-13",
                        "FeelsLikeF": "9",
                        "HeatIndexC": "-7",
                        "HeatIndexF": "19",
                        "WindChillC": "-13",
                        "WindChillF": "9",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "98",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "34",
                        "chanceofrain": "0",
                        "chanceofremdry": "85",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "85",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "48",
                        "humidity": "78",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1023",
                        "pressureInches": "30",
                        "tempC": "-7",
                        "tempF": "19",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSE",
                        "winddirDegree": "166",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "-7",
                        "DewPointF": "19",
                        "FeelsLikeC": "-12",
                        "FeelsLikeF": "11",
                        "HeatIndexC": "-6",
                        "HeatIndexF": "21",
                        "WindChillC": "-12",
                        "WindChillF": "11",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "99",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "81",
                        "chanceofrain": "0",
                        "chanceofremdry": "0",
                        "chanceofsnow": "74",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "91",
                        "precipInches": "0.0",
                        "precipMM": "0.1",
                        "pressure": "1019",
                        "pressureInches": "30",
                        "tempC": "-6",
                        "tempF": "21",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "5",
                        "visibilityMiles": "3",
                        "weatherCode": "332",
                        "weatherDesc": [
                            {
                                "value": "Moderate snow"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "173",
                        "windspeedKmph": "14",
                        "windspeedMiles": "9"
                    },
                    {
                        "DewPointC": "-5",
                        "DewPointF": "23",
                        "FeelsLikeC": "-11",
                        "FeelsLikeF": "13",
                        "HeatIndexC": "-4",
                        "HeatIndexF": "24",
                        "WindChillC": "-11",
                        "WindChillF": "13",
                        "WindGustKmph": "30",
                        "WindGustMiles": "19",
                        "chanceoffog": "0",
                        "chanceoffrost": "98",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "0",
                        "chanceofsnow": "98",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "95",
                        "precipInches": "0.0",
                        "precipMM": "0.5",
                        "pressure": "1014",
                        "pressureInches": "30",
                        "tempC": "-4",
                        "tempF": "24",
                        "time": "900",
                        "uvIndex": "1",
                        "visibility": "2",
                        "visibilityMiles": "1",
                        "weatherCode": "338",
                        "weatherDesc": [
                            {
                                "value": "Heavy snow"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "172",
                        "windspeedKmph": "19",
                        "windspeedMiles": "12"
                    },
                    {
                        "DewPointC": "-2",
                        "DewPointF": "28",
                        "FeelsLikeC": "-8",
                        "FeelsLikeF": "18",
                        "HeatIndexC": "-2",
                        "HeatIndexF": "28",
                        "WindChillC": "-8",
                        "WindChillF": "18",
                        "WindGustKmph": "32",
                        "WindGustMiles": "20",
                        "chanceoffog": "0",
                        "chanceoffrost": "97",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "88",
                        "chanceofrain": "0",
                        "chanceofremdry": "0",
                        "chanceofsnow": "96",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "97",
                        "precipInches": "0.0",
                        "precipMM": "0.9",
                        "pressure": "1010",
                        "pressureInches": "30",
                        "tempC": "-2",
                        "tempF": "28",
                        "time": "1200",
                        "uvIndex": "1",
                        "visibility": "2",
                        "visibilityMiles": "1",
                        "weatherCode": "338",
                        "weatherDesc": [
                            {
                                "value": "Heavy snow"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "179",
                        "windspeedKmph": "21",
                        "windspeedMiles": "13"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "-3",
                        "FeelsLikeF": "28",
                        "HeatIndexC": "3",
                        "HeatIndexF": "37",
                        "WindChillC": "-3",
                        "WindChillF": "28",
                        "WindGustKmph": "37",
                        "WindGustMiles": "23",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "90",
                        "chanceofrain": "96",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "99",
                        "precipInches": "0.0",
                        "precipMM": "0.5",
                        "pressure": "1005",
                        "pressureInches": "30",
                        "tempC": "3",
                        "tempF": "37",
                        "time": "1500",
                        "uvIndex": "1",
                        "visibility": "2",
                        "visibilityMiles": "1",
                        "weatherCode": "266",
                        "weatherDesc": [
                            {
                                "value": "Light drizzle"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SW",
                        "winddirDegree": "215",
                        "windspeedKmph": "23",
                        "windspeedMiles": "14"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "-4",
                        "FeelsLikeF": "25",
                        "HeatIndexC": "2",
                        "HeatIndexF": "36",
                        "WindChillC": "-4",
                        "WindChillF": "25",
                        "WindGustKmph": "46",
                        "WindGustMiles": "28",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "86",
                        "chanceofrain": "95",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "97",
                        "precipInches": "0.0",
                        "precipMM": "0.5",
                        "pressure": "1004",
                        "pressureInches": "30",
                        "tempC": "2",
                        "tempF": "36",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "0",
                        "visibilityMiles": "0",
                        "weatherCode": "230",
                        "weatherDesc": [
                            {
                                "value": "Blizzard"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "237",
                        "windspeedKmph": "30",
                        "windspeedMiles": "19"
                    },
                    {
                        "DewPointC": "-9",
                        "DewPointF": "15",
                        "FeelsLikeC": "-11",
                        "FeelsLikeF": "12",
                        "HeatIndexC": "-3",
                        "HeatIndexF": "27",
                        "WindChillC": "-11",
                        "WindChillF": "12",
                        "WindGustKmph": "57",
                        "WindGustMiles": "36",
                        "chanceoffog": "0",
                        "chanceoffrost": "94",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "92",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "87",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "12",
                        "humidity": "62",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1008",
                        "pressureInches": "30",
                        "tempC": "-3",
                        "tempF": "27",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "271",
                        "windspeedKmph": "36",
                        "windspeedMiles": "22"
                    }
                ],
                "maxtempC": "3",
                "maxtempF": "37",
                "mintempC": "-10",
                "mintempF": "13",
                "sunHour": "6.8",
                "totalSnow_cm": "6.9",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "49",
                        "moon_phase": "First Quarter",
                        "moonrise": "11:54 AM",
                        "moonset": "12:42 AM",
                        "sunrise": "07:33 AM",
                        "sunset": "04:31 PM"
                    }
                ],
                "avgtempC": "-13",
                "avgtempF": "9",
                "date": "2022-01-10",
                "hourly": [
                    {
                        "DewPointC": "-14",
                        "DewPointF": "8",
                        "FeelsLikeC": "-18",
                        "FeelsLikeF": "-0",
                        "HeatIndexC": "-9",
                        "HeatIndexF": "16",
                        "WindChillC": "-18",
                        "WindChillF": "-0",
                        "WindGustKmph": "42",
                        "WindGustMiles": "26",
                        "chanceoffog": "0",
                        "chanceoffrost": "96",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "35",
                        "chanceofrain": "0",
                        "chanceofremdry": "91",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "82",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "40",
                        "humidity": "70",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1013",
                        "pressureInches": "30",
                        "tempC": "-9",
                        "tempF": "16",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "279",
                        "windspeedKmph": "27",
                        "windspeedMiles": "17"
                    },
                    {
                        "DewPointC": "-15",
                        "DewPointF": "4",
                        "FeelsLikeC": "-21",
                        "FeelsLikeF": "-5",
                        "HeatIndexC": "-12",
                        "HeatIndexF": "10",
                        "WindChillC": "-21",
                        "WindChillF": "-5",
                        "WindGustKmph": "30",
                        "WindGustMiles": "18",
                        "chanceoffog": "0",
                        "chanceoffrost": "95",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "93",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "19",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "78",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1017",
                        "pressureInches": "30",
                        "tempC": "-12",
                        "tempF": "10",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "274",
                        "windspeedKmph": "19",
                        "windspeedMiles": "12"
                    },
                    {
                        "DewPointC": "-17",
                        "DewPointF": "2",
                        "FeelsLikeC": "-22",
                        "FeelsLikeF": "-7",
                        "HeatIndexC": "-14",
                        "HeatIndexF": "7",
                        "WindChillC": "-22",
                        "WindChillF": "-7",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "95",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "86",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "13",
                        "humidity": "82",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1018",
                        "pressureInches": "30",
                        "tempC": "-14",
                        "tempF": "7",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "259",
                        "windspeedKmph": "15",
                        "windspeedMiles": "9"
                    },
                    {
                        "DewPointC": "-17",
                        "DewPointF": "1",
                        "FeelsLikeC": "-22",
                        "FeelsLikeF": "-7",
                        "HeatIndexC": "-14",
                        "HeatIndexF": "7",
                        "WindChillC": "-22",
                        "WindChillF": "-7",
                        "WindGustKmph": "25",
                        "WindGustMiles": "15",
                        "chanceoffog": "0",
                        "chanceoffrost": "94",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "36",
                        "chanceofrain": "0",
                        "chanceofremdry": "92",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "76",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "57",
                        "humidity": "77",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1019",
                        "pressureInches": "30",
                        "tempC": "-14",
                        "tempF": "7",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "268",
                        "windspeedKmph": "16",
                        "windspeedMiles": "10"
                    },
                    {
                        "DewPointC": "-15",
                        "DewPointF": "4",
                        "FeelsLikeC": "-20",
                        "FeelsLikeF": "-4",
                        "HeatIndexC": "-12",
                        "HeatIndexF": "11",
                        "WindChillC": "-20",
                        "WindChillF": "-4",
                        "WindGustKmph": "26",
                        "WindGustMiles": "16",
                        "chanceoffog": "0",
                        "chanceoffrost": "94",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "85",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "19",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "78",
                        "humidity": "73",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1018",
                        "pressureInches": "30",
                        "tempC": "-12",
                        "tempF": "11",
                        "time": "1200",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "119",
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "279",
                        "windspeedKmph": "21",
                        "windspeedMiles": "13"
                    },
                    {
                        "DewPointC": "-16",
                        "DewPointF": "4",
                        "FeelsLikeC": "-20",
                        "FeelsLikeF": "-4",
                        "HeatIndexC": "-12",
                        "HeatIndexF": "11",
                        "WindChillC": "-20",
                        "WindChillF": "-4",
                        "WindGustKmph": "24",
                        "WindGustMiles": "15",
                        "chanceoffog": "0",
                        "chanceoffrost": "93",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "80",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "19",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "72",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1017",
                        "pressureInches": "30",
                        "tempC": "-12",
                        "tempF": "11",
                        "time": "1500",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "274",
                        "windspeedKmph": "19",
                        "windspeedMiles": "12"
                    },
                    {
                        "DewPointC": "-17",
                        "DewPointF": "2",
                        "FeelsLikeC": "-21",
                        "FeelsLikeF": "-5",
                        "HeatIndexC": "-13",
                        "HeatIndexF": "8",
                        "WindChillC": "-21",
                        "WindChillF": "-5",
                        "WindGustKmph": "21",
                        "WindGustMiles": "13",
                        "chanceoffog": "0",
                        "chanceoffrost": "93",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "16",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "74",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1018",
                        "pressureInches": "30",
                        "tempC": "-13",
                        "tempF": "8",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "277",
                        "windspeedKmph": "15",
                        "windspeedMiles": "9"
                    },
                    {
                        "DewPointC": "-18",
                        "DewPointF": "-0",
                        "FeelsLikeC": "-23",
                        "FeelsLikeF": "-9",
                        "HeatIndexC": "-15",
                        "HeatIndexF": "6",
                        "WindChillC": "-23",
                        "WindChillF": "-9",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "92",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "83",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "12",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "76",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1022",
                        "pressureInches": "30",
                        "tempC": "-15",
                        "tempF": "6",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NNW",
                        "winddirDegree": "333",
                        "windspeedKmph": "17",
                        "windspeedMiles": "10"
                    }
                ],
                "maxtempC": "-12",
                "maxtempF": "11",
                "mintempC": "-17",
                "mintempF": "1",
                "sunHour": "7.5",
                "totalSnow_cm": "0.2",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "57",
                        "moon_phase": "First Quarter",
                        "moonrise": "12:15 PM",
                        "moonset": "01:47 AM",
                        "sunrise": "07:33 AM",
                        "sunset": "04:32 PM"
                    }
                ],
                "avgtempC": "-20",
                "avgtempF": "-3",
                "date": "2022-01-11",
                "hourly": [
                    {
                        "DewPointC": "-22",
                        "DewPointF": "-7",
                        "FeelsLikeC": "-28",
                        "FeelsLikeF": "-18",
                        "HeatIndexC": "-18",
                        "HeatIndexF": "-1",
                        "WindChillC": "-28",
                        "WindChillF": "-18",
                        "WindGustKmph": "23",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "92",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "33",
                        "chanceofrain": "0",
                        "chanceofremdry": "90",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "82",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "55",
                        "humidity": "74",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1025",
                        "pressureInches": "30",
                        "tempC": "-18",
                        "tempF": "-1",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NW",
                        "winddirDegree": "316",
                        "windspeedKmph": "16",
                        "windspeedMiles": "10"
                    },
                    {
                        "DewPointC": "-24",
                        "DewPointF": "-10",
                        "FeelsLikeC": "-29",
                        "FeelsLikeF": "-21",
                        "HeatIndexC": "-21",
                        "HeatIndexF": "-5",
                        "WindChillC": "-29",
                        "WindChillF": "-21",
                        "WindGustKmph": "19",
                        "WindGustMiles": "12",
                        "chanceoffog": "0",
                        "chanceoffrost": "91",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "92",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "23",
                        "humidity": "77",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1029",
                        "pressureInches": "30",
                        "tempC": "-21",
                        "tempF": "-5",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NW",
                        "winddirDegree": "314",
                        "windspeedKmph": "14",
                        "windspeedMiles": "9"
                    },
                    {
                        "DewPointC": "-25",
                        "DewPointF": "-12",
                        "FeelsLikeC": "-31",
                        "FeelsLikeF": "-23",
                        "HeatIndexC": "-22",
                        "HeatIndexF": "-7",
                        "WindChillC": "-31",
                        "WindChillF": "-23",
                        "WindGustKmph": "18",
                        "WindGustMiles": "11",
                        "chanceoffog": "0",
                        "chanceoffrost": "91",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "80",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "89",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "5",
                        "humidity": "79",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1032",
                        "pressureInches": "30",
                        "tempC": "-22",
                        "tempF": "-7",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WNW",
                        "winddirDegree": "295",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "-25",
                        "DewPointF": "-13",
                        "FeelsLikeC": "-30",
                        "FeelsLikeF": "-23",
                        "HeatIndexC": "-22",
                        "HeatIndexF": "-8",
                        "WindChillC": "-30",
                        "WindChillF": "-23",
                        "WindGustKmph": "15",
                        "WindGustMiles": "10",
                        "chanceoffog": "0",
                        "chanceoffrost": "90",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "94",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "4",
                        "humidity": "77",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "-22",
                        "tempF": "-8",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "281",
                        "windspeedKmph": "11",
                        "windspeedMiles": "7"
                    },
                    {
                        "DewPointC": "-24",
                        "DewPointF": "-11",
                        "FeelsLikeC": "-29",
                        "FeelsLikeF": "-19",
                        "HeatIndexC": "-20",
                        "HeatIndexF": "-5",
                        "WindChillC": "-29",
                        "WindChillF": "-19",
                        "WindGustKmph": "15",
                        "WindGustMiles": "10",
                        "chanceoffog": "0",
                        "chanceoffrost": "89",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "93",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "15",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "80",
                        "humidity": "74",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1036",
                        "pressureInches": "31",
                        "tempC": "-20",
                        "tempF": "-5",
                        "time": "1200",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "119",
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": "wsymbol_0001_sunny"
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "262",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "-22",
                        "DewPointF": "-7",
                        "FeelsLikeC": "-26",
                        "FeelsLikeF": "-16",
                        "HeatIndexC": "-18",
                        "HeatIndexF": "-0",
                        "WindChillC": "-26",
                        "WindChillF": "-16",
                        "WindGustKmph": "17",
                        "WindGustMiles": "10",
                        "chanceoffog": "0",
                        "chanceoffrost": "89",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "92",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "15",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "72",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "-18",
                        "tempF": "-0",
                        "time": "1500",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "254",
                        "windspeedKmph": "14",
                        "windspeedMiles": "9"
                    },
                    {
                        "DewPointC": "-20",
                        "DewPointF": "-4",
                        "FeelsLikeC": "-23",
                        "FeelsLikeF": "-9",
                        "HeatIndexC": "-18",
                        "HeatIndexF": "0",
                        "WindChillC": "-23",
                        "WindChillF": "-9",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "88",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "30",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "87",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "61",
                        "humidity": "83",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1034",
                        "pressureInches": "31",
                        "tempC": "-18",
                        "tempF": "0",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SW",
                        "winddirDegree": "224",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "-21",
                        "DewPointF": "-5",
                        "FeelsLikeC": "-26",
                        "FeelsLikeF": "-15",
                        "HeatIndexC": "-19",
                        "HeatIndexF": "-2",
                        "WindChillC": "-26",
                        "WindChillF": "-15",
                        "WindGustKmph": "17",
                        "WindGustMiles": "11",
                        "chanceoffog": "0",
                        "chanceoffrost": "88",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "34",
                        "chanceofrain": "0",
                        "chanceofremdry": "90",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "73",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "42",
                        "humidity": "88",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1033",
                        "pressureInches": "31",
                        "tempC": "-19",
                        "tempF": "-2",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSE",
                        "winddirDegree": "151",
                        "windspeedKmph": "10",
                        "windspeedMiles": "6"
                    }
                ],
                "maxtempC": "-18",
                "maxtempF": "0",
                "mintempC": "-22",
                "mintempF": "-8",
                "sunHour": "7.8",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            }
        ]
    },
    {
        "current_condition": [
            {
                "FeelsLikeC": "5",
                "FeelsLikeF": "41",
                "cloudcover": "100",
                "humidity": "81",
                
                "localObsDateTime": "2022-01-17 03:12 AM",
                "observation_time": "03:12 AM",
                "precipInches": "0.0",
                "precipMM": "0.0",
                "pressure": "1037",
                "pressureInches": "31",
                "temp_C": "6",
                "temp_F": "43",
                "uvIndex": "1",
                "visibility": "10",
                "visibilityMiles": "6",
                "weatherCode": "122",
                "weatherDesc": [
                    {
                        "value": "Overcast"
                    }
                ],
                "weatherIconUrl": [
                    {
                        "value": ""
                    }
                ],
                "winddir16Point": "NNW",
                "winddirDegree": "340",
                "windspeedKmph": "7",
                "windspeedMiles": "4"
            }
        ],
        "nearest_area": [
            {
                "areaName": [
                    {
                        "value": "Llanfair Pwllgwyngyll"
                    }
                ],
                "country": [
                    {
                        "value": "United Kingdom"
                    }
                ],
                "latitude": "53.220",
                "longitude": "-4.196",
                "population": "0",
                "region": [
                    {
                        "value": "Isle of Anglesey"
                    }
                ],
                "weatherUrl": [
                    {
                        "value": ""
                    }
                ]
            }
        ],
        "request": [
            {
                "query": "Lat 53.22 and Lon -4.21",
                "type": "LatLon"
            }
        ],
        "weather": [
            {
                "astronomy": [
                    {
                        "moon_illumination": "100",
                        "moon_phase": "Full Moon",
                        "moonrise": "03:38 PM",
                        "moonset": "08:39 AM",
                        "sunrise": "08:21 AM",
                        "sunset": "04:32 PM"
                    }
                ],
                "avgtempC": "5",
                "avgtempF": "41",
                "date": "2022-01-17",
                "hourly": [
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "5",
                        "HeatIndexF": "40",
                        "WindChillC": "3",
                        "WindChillF": "38",
                        "WindGustKmph": "11",
                        "WindGustMiles": "7",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "93",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "14",
                        "humidity": "85",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1036",
                        "pressureInches": "31",
                        "tempC": "5",
                        "tempF": "40",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "249",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "37",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "3",
                        "WindChillF": "37",
                        "WindGustKmph": "12",
                        "WindGustMiles": "7",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "82",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "85",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "22",
                        "humidity": "87",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1037",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "241",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "39",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "4",
                        "WindChillF": "39",
                        "WindGustKmph": "6",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "85",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "6",
                        "humidity": "88",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1038",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "247",
                        "windspeedKmph": "3",
                        "windspeedMiles": "2"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "40",
                        "HeatIndexC": "4",
                        "HeatIndexF": "40",
                        "WindChillC": "4",
                        "WindChillF": "40",
                        "WindGustKmph": "5",
                        "WindGustMiles": "3",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "93",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "7",
                        "humidity": "87",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1038",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "40",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "182",
                        "windspeedKmph": "3",
                        "windspeedMiles": "2"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "38",
                        "FeelsLikeC": "7",
                        "FeelsLikeF": "45",
                        "HeatIndexC": "7",
                        "HeatIndexF": "45",
                        "WindChillC": "7",
                        "WindChillF": "45",
                        "WindGustKmph": "1",
                        "WindGustMiles": "1",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "93",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "8",
                        "humidity": "75",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1039",
                        "pressureInches": "31",
                        "tempC": "7",
                        "tempF": "45",
                        "time": "1200",
                        "uvIndex": "3",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SW",
                        "winddirDegree": "216",
                        "windspeedKmph": "1",
                        "windspeedMiles": "1"
                    },
                    {
                        "DewPointC": "4",
                        "DewPointF": "39",
                        "FeelsLikeC": "6",
                        "FeelsLikeF": "43",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "6",
                        "WindChillF": "43",
                        "WindGustKmph": "7",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "89",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "7",
                        "humidity": "82",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1038",
                        "pressureInches": "31",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "1500",
                        "uvIndex": "3",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "255",
                        "windspeedKmph": "4",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "1",
                        "DewPointF": "34",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "4",
                        "HeatIndexF": "38",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "85",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "90",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "4",
                        "humidity": "85",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1038",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "38",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSE",
                        "winddirDegree": "151",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "0",
                        "DewPointF": "33",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "17",
                        "WindGustMiles": "11",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "86",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "5",
                        "humidity": "78",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1038",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSW",
                        "winddirDegree": "196",
                        "windspeedKmph": "8",
                        "windspeedMiles": "5"
                    }
                ],
                "maxtempC": "8",
                "maxtempF": "46",
                "mintempC": "3",
                "mintempF": "38",
                "sunHour": "8.0",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "100",
                        "moon_phase": "Full Moon",
                        "moonrise": "04:46 PM",
                        "moonset": "09:14 AM",
                        "sunrise": "08:20 AM",
                        "sunset": "04:34 PM"
                    }
                ],
                "avgtempC": "5",
                "avgtempF": "41",
                "date": "2022-01-18",
                "hourly": [
                    {
                        "DewPointC": "0",
                        "DewPointF": "32",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "16",
                        "WindGustMiles": "10",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "92",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "93",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "5",
                        "humidity": "76",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1037",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "181",
                        "windspeedKmph": "8",
                        "windspeedMiles": "5"
                    },
                    {
                        "DewPointC": "0",
                        "DewPointF": "33",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "17",
                        "WindGustMiles": "11",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "84",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "92",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "6",
                        "humidity": "78",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1036",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "184",
                        "windspeedKmph": "8",
                        "windspeedMiles": "5"
                    },
                    {
                        "DewPointC": "0",
                        "DewPointF": "32",
                        "FeelsLikeC": "1",
                        "FeelsLikeF": "34",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "1",
                        "WindChillF": "34",
                        "WindGustKmph": "21",
                        "WindGustMiles": "13",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "83",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "89",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "14",
                        "humidity": "77",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "190",
                        "windspeedKmph": "10",
                        "windspeedMiles": "6"
                    },
                    {
                        "DewPointC": "1",
                        "DewPointF": "34",
                        "FeelsLikeC": "1",
                        "FeelsLikeF": "34",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "1",
                        "WindChillF": "34",
                        "WindGustKmph": "24",
                        "WindGustMiles": "15",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "87",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "20",
                        "humidity": "80",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "179",
                        "windspeedKmph": "12",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "39",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "4",
                        "WindChillF": "39",
                        "WindGustKmph": "19",
                        "WindGustMiles": "12",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "81",
                        "chanceofrain": "0",
                        "chanceofremdry": "82",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "9",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "75",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "1200",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "188",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "4",
                        "DewPointF": "39",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "4",
                        "WindChillF": "38",
                        "WindGustKmph": "24",
                        "WindGustMiles": "15",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "83",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "8",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "91",
                        "humidity": "83",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1033",
                        "pressureInches": "30",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "1500",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "S",
                        "winddirDegree": "185",
                        "windspeedKmph": "16",
                        "windspeedMiles": "10"
                    },
                    {
                        "DewPointC": "4",
                        "DewPointF": "39",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "30",
                        "WindGustMiles": "19",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "39",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "71",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "53",
                        "humidity": "90",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1032",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSW",
                        "winddirDegree": "195",
                        "windspeedKmph": "17",
                        "windspeedMiles": "11"
                    },
                    {
                        "DewPointC": "5",
                        "DewPointF": "41",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "6",
                        "HeatIndexF": "43",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "30",
                        "WindGustMiles": "19",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "42",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "83",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "49",
                        "humidity": "94",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1031",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "43",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSW",
                        "winddirDegree": "197",
                        "windspeedKmph": "18",
                        "windspeedMiles": "11"
                    }
                ],
                "maxtempC": "7",
                "maxtempF": "44",
                "mintempC": "4",
                "mintempF": "39",
                "sunHour": "6.5",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "85",
                        "moon_phase": "Waxing Gibbous",
                        "moonrise": "06:01 PM",
                        "moonset": "09:41 AM",
                        "sunrise": "08:19 AM",
                        "sunset": "04:36 PM"
                    }
                ],
                "avgtempC": "7",
                "avgtempF": "45",
                "date": "2022-01-19",
                "hourly": [
                    {
                        "DewPointC": "6",
                        "DewPointF": "43",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "39",
                        "HeatIndexC": "8",
                        "HeatIndexF": "46",
                        "WindChillC": "4",
                        "WindChillF": "39",
                        "WindGustKmph": "35",
                        "WindGustMiles": "22",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "86",
                        "chanceofrain": "0",
                        "chanceofremdry": "83",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "5",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "78",
                        "humidity": "89",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1029",
                        "pressureInches": "30",
                        "tempC": "8",
                        "tempF": "46",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "119",
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSW",
                        "winddirDegree": "207",
                        "windspeedKmph": "24",
                        "windspeedMiles": "15"
                    },
                    {
                        "DewPointC": "7",
                        "DewPointF": "45",
                        "FeelsLikeC": "5",
                        "FeelsLikeF": "40",
                        "HeatIndexC": "8",
                        "HeatIndexF": "47",
                        "WindChillC": "5",
                        "WindChillF": "40",
                        "WindGustKmph": "35",
                        "WindGustMiles": "22",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "84",
                        "chanceofrain": "0",
                        "chanceofremdry": "91",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "14",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "93",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1026",
                        "pressureInches": "30",
                        "tempC": "8",
                        "tempF": "47",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SSW",
                        "winddirDegree": "207",
                        "windspeedKmph": "24",
                        "windspeedMiles": "15"
                    },
                    {
                        "DewPointC": "8",
                        "DewPointF": "46",
                        "FeelsLikeC": "5",
                        "FeelsLikeF": "41",
                        "HeatIndexC": "9",
                        "HeatIndexF": "48",
                        "WindChillC": "5",
                        "WindChillF": "41",
                        "WindGustKmph": "38",
                        "WindGustMiles": "23",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "89",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "5",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "95",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1023",
                        "pressureInches": "30",
                        "tempC": "9",
                        "tempF": "48",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SW",
                        "winddirDegree": "218",
                        "windspeedKmph": "26",
                        "windspeedMiles": "16"
                    },
                    {
                        "DewPointC": "8",
                        "DewPointF": "46",
                        "FeelsLikeC": "6",
                        "FeelsLikeF": "42",
                        "HeatIndexC": "9",
                        "HeatIndexF": "48",
                        "WindChillC": "6",
                        "WindChillF": "42",
                        "WindGustKmph": "36",
                        "WindGustMiles": "22",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "84",
                        "chanceofrain": "64",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "79",
                        "humidity": "92",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.9",
                        "pressure": "1022",
                        "pressureInches": "30",
                        "tempC": "9",
                        "tempF": "48",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "353",
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "245",
                        "windspeedKmph": "24",
                        "windspeedMiles": "15"
                    },
                    {
                        "DewPointC": "5",
                        "DewPointF": "40",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "8",
                        "HeatIndexF": "46",
                        "WindChillC": "3",
                        "WindChillF": "38",
                        "WindGustKmph": "46",
                        "WindGustMiles": "28",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "89",
                        "chanceofrain": "67",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "88",
                        "humidity": "81",
                        
                        "precipInches": "0.1",
                        "precipMM": "1.6",
                        "pressure": "1023",
                        "pressureInches": "30",
                        "tempC": "8",
                        "tempF": "46",
                        "time": "1200",
                        "uvIndex": "2",
                        "visibility": "9",
                        "visibilityMiles": "5",
                        "weatherCode": "296",
                        "weatherDesc": [
                            {
                                "value": "Light rain"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NNW",
                        "winddirDegree": "334",
                        "windspeedKmph": "32",
                        "windspeedMiles": "20"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "49",
                        "WindGustMiles": "30",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "93",
                        "chanceofrain": "71",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "87",
                        "humidity": "74",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.1",
                        "pressure": "1024",
                        "pressureInches": "30",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "1500",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "176",
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NNW",
                        "winddirDegree": "329",
                        "windspeedKmph": "33",
                        "windspeedMiles": "21"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "1",
                        "FeelsLikeF": "34",
                        "HeatIndexC": "6",
                        "HeatIndexF": "43",
                        "WindChillC": "1",
                        "WindChillF": "34",
                        "WindGustKmph": "46",
                        "WindGustMiles": "29",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "34",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "82",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "28",
                        "humidity": "77",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1027",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "43",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NNW",
                        "winddirDegree": "340",
                        "windspeedKmph": "29",
                        "windspeedMiles": "18"
                    },
                    {
                        "DewPointC": "1",
                        "DewPointF": "34",
                        "FeelsLikeC": "1",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "1",
                        "WindChillF": "35",
                        "WindGustKmph": "40",
                        "WindGustMiles": "25",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "90",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "4",
                        "humidity": "73",
                        
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1029",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NNW",
                        "winddirDegree": "347",
                        "windspeedKmph": "26",
                        "windspeedMiles": "16"
                    }
                ],
                "maxtempC": "9",
                "maxtempF": "48",
                "mintempC": "5",
                "mintempF": "41",
                "sunHour": "6.5",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            }
        ]
    },
    {
        "current_condition": [
            {
                "FeelsLikeC": "2",
                "FeelsLikeF": "36",
                "cloudcover": "50",
                "humidity": "100",
                "localObsDateTime": "2022-01-09 10:56 PM",
                "observation_time": "09:56 PM",
                "precipInches": "0.0",
                "precipMM": "0.0",
                "pressure": "1009",
                "pressureInches": "30",
                "temp_C": "4",
                "temp_F": "39",
                "uvIndex": "1",
                "visibility": "8",
                "visibilityMiles": "4",
                "weatherCode": "116",
                "weatherDesc": [
                    {
                        "value": "Partly cloudy"
                    }
                ],
                "weatherIconUrl": [
                    {
                        "value": ""
                    }
                ],
                "winddir16Point": "SSE",
                "winddirDegree": "150",
                "windspeedKmph": "6",
                "windspeedMiles": "4"
            }
        ],
        "nearest_area": [
            {
                "areaName": [
                    {
                        "value": "Saint-Merri"
                    }
                ],
                "country": [
                    {
                        "value": "France"
                    }
                ],
                "latitude": "48.850",
                "longitude": "2.350",
                "population": "0",
                "region": [
                    {
                        "value": "Ile-de-France"
                    }
                ],
                "weatherUrl": [
                    {
                        "value": ""
                    }
                ]
            }
        ],
        "request": [
            {
                "query": "Lat 48.86 and Lon 2.35",
                "type": "LatLon"
            }
        ],
        "weather": [
            {
                "astronomy": [
                    {
                        "moon_illumination": "42",
                        "moon_phase": "First Quarter",
                        "moonrise": "12:26 PM",
                        "moonset": "12:17 AM",
                        "sunrise": "08:42 AM",
                        "sunset": "05:13 PM"
                    }
                ],
                "avgtempC": "6",
                "avgtempF": "44",
                "date": "2022-01-09",
                "hourly": [
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "50",
                        "WindGustMiles": "31",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "94",
                        "chanceofrain": "96",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "78",
                        "precipInches": "0.0",
                        "precipMM": "0.8",
                        "pressure": "999",
                        "pressureInches": "29",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "353",
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WNW",
                        "winddirDegree": "285",
                        "windspeedKmph": "35",
                        "windspeedMiles": "22"
                    },
                    {
                        "DewPointC": "1",
                        "DewPointF": "34",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "6",
                        "HeatIndexF": "43",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "39",
                        "WindGustMiles": "24",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "89",
                        "chanceofrain": "51",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "1",
                        "chanceofwindy": "0",
                        "cloudcover": "75",
                        "humidity": "70",
                        "precipInches": "0.0",
                        "precipMM": "0.1",
                        "pressure": "1003",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "43",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "176",
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WNW",
                        "winddirDegree": "283",
                        "windspeedKmph": "27",
                        "windspeedMiles": "17"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "6",
                        "HeatIndexF": "43",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "34",
                        "WindGustMiles": "21",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "91",
                        "chanceofrain": "80",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "72",
                        "humidity": "75",
                        "precipInches": "0.0",
                        "precipMM": "0.1",
                        "pressure": "1005",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "43",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "176",
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "269",
                        "windspeedKmph": "23",
                        "windspeedMiles": "14"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "24",
                        "WindGustMiles": "15",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "86",
                        "chanceofrain": "51",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "72",
                        "humidity": "82",
                        "precipInches": "0.0",
                        "precipMM": "0.3",
                        "pressure": "1005",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "353",
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WSW",
                        "winddirDegree": "246",
                        "windspeedKmph": "16",
                        "windspeedMiles": "10"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "38",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "39",
                        "HeatIndexC": "7",
                        "HeatIndexF": "44",
                        "WindChillC": "4",
                        "WindChillF": "39",
                        "WindGustKmph": "22",
                        "WindGustMiles": "14",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "88",
                        "chanceofrain": "53",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "65",
                        "humidity": "79",
                        "precipInches": "0.0",
                        "precipMM": "0.3",
                        "pressure": "1006",
                        "pressureInches": "30",
                        "tempC": "7",
                        "tempF": "44",
                        "time": "1200",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "353",
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "264",
                        "windspeedKmph": "16",
                        "windspeedMiles": "10"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "6",
                        "FeelsLikeF": "43",
                        "HeatIndexC": "8",
                        "HeatIndexF": "47",
                        "WindChillC": "6",
                        "WindChillF": "43",
                        "WindGustKmph": "18",
                        "WindGustMiles": "11",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "84",
                        "chanceofrain": "70",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "51",
                        "humidity": "65",
                        "precipInches": "0.0",
                        "precipMM": "0.2",
                        "pressure": "1005",
                        "pressureInches": "30",
                        "tempC": "8",
                        "tempF": "47",
                        "time": "1500",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "353",
                        "weatherDesc": [
                            {
                                "value": "Light rain shower"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WNW",
                        "winddirDegree": "281",
                        "windspeedKmph": "13",
                        "windspeedMiles": "8"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "6",
                        "FeelsLikeF": "43",
                        "HeatIndexC": "7",
                        "HeatIndexF": "45",
                        "WindChillC": "6",
                        "WindChillF": "43",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "90",
                        "chanceofrain": "96",
                        "chanceofremdry": "0",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "0",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "61",
                        "humidity": "73",
                        "precipInches": "0.0",
                        "precipMM": "0.1",
                        "pressure": "1007",
                        "pressureInches": "30",
                        "tempC": "7",
                        "tempF": "45",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "176",
                        "weatherDesc": [
                            {
                                "value": "Patchy rain possible"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "WNW",
                        "winddirDegree": "285",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "38",
                        "FeelsLikeC": "5",
                        "FeelsLikeF": "40",
                        "HeatIndexC": "6",
                        "HeatIndexF": "43",
                        "WindChillC": "5",
                        "WindChillF": "40",
                        "WindGustKmph": "11",
                        "WindGustMiles": "7",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "83",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "6",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "80",
                        "humidity": "83",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1009",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "43",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "119",
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "W",
                        "winddirDegree": "268",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    }
                ],
                "maxtempC": "8",
                "maxtempF": "47",
                "mintempC": "5",
                "mintempF": "41",
                "sunHour": "7.5",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "49",
                        "moon_phase": "First Quarter",
                        "moonrise": "12:42 PM",
                        "moonset": "01:27 AM",
                        "sunrise": "08:41 AM",
                        "sunset": "05:15 PM"
                    }
                ],
                "avgtempC": "5",
                "avgtempF": "41",
                "date": "2022-01-10",
                "hourly": [
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "5",
                        "HeatIndexF": "40",
                        "WindChillC": "4",
                        "WindChillF": "38",
                        "WindGustKmph": "9",
                        "WindGustMiles": "5",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "44",
                        "chanceofrain": "0",
                        "chanceofremdry": "86",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "89",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "39",
                        "humidity": "88",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1011",
                        "pressureInches": "30",
                        "tempC": "5",
                        "tempF": "40",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NW",
                        "winddirDegree": "304",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "3",
                        "DewPointF": "37",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "4",
                        "HeatIndexF": "40",
                        "WindChillC": "4",
                        "WindChillF": "38",
                        "WindGustKmph": "7",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "86",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "14",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "80",
                        "humidity": "89",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1013",
                        "pressureInches": "30",
                        "tempC": "4",
                        "tempF": "40",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "119",
                        "weatherDesc": [
                            {
                                "value": "Cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "N",
                        "winddirDegree": "8",
                        "windspeedKmph": "4",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "3",
                        "WindChillF": "38",
                        "WindGustKmph": "7",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "90",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "10",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "88",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1016",
                        "pressureInches": "30",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "NE",
                        "winddirDegree": "41",
                        "windspeedKmph": "4",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "37",
                        "HeatIndexC": "4",
                        "HeatIndexF": "39",
                        "WindChillC": "3",
                        "WindChillF": "37",
                        "WindGustKmph": "8",
                        "WindGustMiles": "5",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "82",
                        "chanceofrain": "0",
                        "chanceofremdry": "91",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "18",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "87",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1019",
                        "pressureInches": "30",
                        "tempC": "4",
                        "tempF": "39",
                        "time": "900",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "E",
                        "winddirDegree": "89",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "5",
                        "FeelsLikeF": "40",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "5",
                        "WindChillF": "40",
                        "WindGustKmph": "7",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "85",
                        "chanceofrain": "0",
                        "chanceofremdry": "80",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "14",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "75",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1022",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "1200",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "113",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "6",
                        "FeelsLikeF": "43",
                        "HeatIndexC": "7",
                        "HeatIndexF": "45",
                        "WindChillC": "6",
                        "WindChillF": "43",
                        "WindGustKmph": "9",
                        "WindGustMiles": "5",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "94",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "6",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "68",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1023",
                        "pressureInches": "30",
                        "tempC": "7",
                        "tempF": "45",
                        "time": "1500",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "108",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "36",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "40",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "4",
                        "WindChillF": "40",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "80",
                        "chanceofrain": "0",
                        "chanceofremdry": "94",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "14",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "77",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1025",
                        "pressureInches": "30",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "102",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "2",
                        "DewPointF": "35",
                        "FeelsLikeC": "3",
                        "FeelsLikeF": "37",
                        "HeatIndexC": "4",
                        "HeatIndexF": "40",
                        "WindChillC": "3",
                        "WindChillF": "37",
                        "WindGustKmph": "11",
                        "WindGustMiles": "7",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "90",
                        "chanceofrain": "0",
                        "chanceofremdry": "89",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "16",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "82",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1028",
                        "pressureInches": "30",
                        "tempC": "4",
                        "tempF": "40",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "112",
                        "windspeedKmph": "7",
                        "windspeedMiles": "4"
                    }
                ],
                "maxtempC": "7",
                "maxtempF": "45",
                "mintempC": "4",
                "mintempF": "39",
                "sunHour": "6.8",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            },
            {
                "astronomy": [
                    {
                        "moon_illumination": "57",
                        "moon_phase": "First Quarter",
                        "moonrise": "12:59 PM",
                        "moonset": "02:35 AM",
                        "sunrise": "08:41 AM",
                        "sunset": "05:16 PM"
                    }
                ],
                "avgtempC": "4",
                "avgtempF": "39",
                "date": "2022-01-11",
                "hourly": [
                    {
                        "DewPointC": "1",
                        "DewPointF": "33",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "35",
                        "HeatIndexC": "3",
                        "HeatIndexF": "38",
                        "WindChillC": "2",
                        "WindChillF": "35",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "92",
                        "chanceofrain": "0",
                        "chanceofremdry": "90",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "9",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "100",
                        "humidity": "82",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1029",
                        "pressureInches": "30",
                        "tempC": "3",
                        "tempF": "38",
                        "time": "0",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "122",
                        "weatherDesc": [
                            {
                                "value": "Overcast"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "SE",
                        "winddirDegree": "124",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "0",
                        "DewPointF": "32",
                        "FeelsLikeC": "1",
                        "FeelsLikeF": "34",
                        "HeatIndexC": "3",
                        "HeatIndexF": "37",
                        "WindChillC": "1",
                        "WindChillF": "34",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "37",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "77",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "48",
                        "humidity": "83",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1030",
                        "pressureInches": "30",
                        "tempC": "3",
                        "tempF": "37",
                        "time": "300",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "123",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "-1",
                        "DewPointF": "31",
                        "FeelsLikeC": "0",
                        "FeelsLikeF": "32",
                        "HeatIndexC": "2",
                        "HeatIndexF": "35",
                        "WindChillC": "0",
                        "WindChillF": "32",
                        "WindGustKmph": "10",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "10",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "36",
                        "chanceofrain": "0",
                        "chanceofremdry": "88",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "72",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "26",
                        "humidity": "84",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1031",
                        "pressureInches": "30",
                        "tempC": "2",
                        "tempF": "35",
                        "time": "600",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "124",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "-1",
                        "DewPointF": "31",
                        "FeelsLikeC": "0",
                        "FeelsLikeF": "32",
                        "HeatIndexC": "2",
                        "HeatIndexF": "35",
                        "WindChillC": "0",
                        "WindChillF": "32",
                        "WindGustKmph": "9",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "10",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "87",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "91",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "18",
                        "humidity": "84",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1033",
                        "pressureInches": "30",
                        "tempC": "2",
                        "tempF": "35",
                        "time": "900",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "121",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "-0",
                        "DewPointF": "31",
                        "FeelsLikeC": "4",
                        "FeelsLikeF": "38",
                        "HeatIndexC": "5",
                        "HeatIndexF": "40",
                        "WindChillC": "4",
                        "WindChillF": "38",
                        "WindGustKmph": "7",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "31",
                        "chanceofrain": "0",
                        "chanceofremdry": "84",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "86",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "49",
                        "humidity": "69",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1034",
                        "pressureInches": "31",
                        "tempC": "5",
                        "tempF": "40",
                        "time": "1200",
                        "uvIndex": "2",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "116",
                        "weatherDesc": [
                            {
                                "value": "Partly cloudy"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ESE",
                        "winddirDegree": "122",
                        "windspeedKmph": "6",
                        "windspeedMiles": "4"
                    },
                    {
                        "DewPointC": "-0",
                        "DewPointF": "31",
                        "FeelsLikeC": "7",
                        "FeelsLikeF": "45",
                        "HeatIndexC": "7",
                        "HeatIndexF": "45",
                        "WindChillC": "7",
                        "WindChillF": "45",
                        "WindGustKmph": "4",
                        "WindGustMiles": "2",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "93",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "87",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "24",
                        "humidity": "60",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1033",
                        "pressureInches": "31",
                        "tempC": "7",
                        "tempF": "45",
                        "time": "1500",
                        "uvIndex": "3",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Sunny"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "E",
                        "winddirDegree": "96",
                        "windspeedKmph": "3",
                        "windspeedMiles": "2"
                    },
                    {
                        "DewPointC": "1",
                        "DewPointF": "33",
                        "FeelsLikeC": "5",
                        "FeelsLikeF": "41",
                        "HeatIndexC": "6",
                        "HeatIndexF": "42",
                        "WindChillC": "5",
                        "WindChillF": "41",
                        "WindGustKmph": "6",
                        "WindGustMiles": "4",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "84",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "93",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "18",
                        "humidity": "70",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1034",
                        "pressureInches": "31",
                        "tempC": "6",
                        "tempF": "42",
                        "time": "1800",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "E",
                        "winddirDegree": "83",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    },
                    {
                        "DewPointC": "-0",
                        "DewPointF": "31",
                        "FeelsLikeC": "2",
                        "FeelsLikeF": "36",
                        "HeatIndexC": "3",
                        "HeatIndexF": "38",
                        "WindChillC": "2",
                        "WindChillF": "36",
                        "WindGustKmph": "9",
                        "WindGustMiles": "6",
                        "chanceoffog": "0",
                        "chanceoffrost": "0",
                        "chanceofhightemp": "0",
                        "chanceofovercast": "0",
                        "chanceofrain": "0",
                        "chanceofremdry": "81",
                        "chanceofsnow": "0",
                        "chanceofsunshine": "91",
                        "chanceofthunder": "0",
                        "chanceofwindy": "0",
                        "cloudcover": "5",
                        "humidity": "77",
                        "precipInches": "0.0",
                        "precipMM": "0.0",
                        "pressure": "1035",
                        "pressureInches": "31",
                        "tempC": "3",
                        "tempF": "38",
                        "time": "2100",
                        "uvIndex": "1",
                        "visibility": "10",
                        "visibilityMiles": "6",
                        "weatherCode": "113",
                        "weatherDesc": [
                            {
                                "value": "Clear"
                            }
                        ],
                        "weatherIconUrl": [
                            {
                                "value": ""
                            }
                        ],
                        "winddir16Point": "ENE",
                        "winddirDegree": "79",
                        "windspeedKmph": "5",
                        "windspeedMiles": "3"
                    }
                ],
                "maxtempC": "7",
                "maxtempF": "45",
                "mintempC": "2",
                "mintempF": "35",
                "sunHour": "8.8",
                "totalSnow_cm": "0.0",
                "uvIndex": "1"
            }
        ]
    }
    
    
]
export const simpleWttrData:SimpleWttrObject[] = []

for (const wttr of wttrData) {
    simpleWttrData.push(ConvertToSimpleWttrObject(wttr))
}