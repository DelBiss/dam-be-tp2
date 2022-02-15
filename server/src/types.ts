const TYPES = {
    Application: Symbol.for('Application'),
    Server: Symbol.for('Server'),
    WeatherService: Symbol.for('WeatherRepository'),
    WeatherDataService: Symbol.for('WeatherDataRepository'),
    WeatherCacheService: Symbol.for('WeatherCacheRepository'),
    WeatherDataTransformPreCache: Symbol.for('WeatherDataTranformPreCache'),
    WeatherDataTransform: Symbol.for('WeatherDataTranform'),
    WeatherController: Symbol.for('WeatherController'),
    AuthController: Symbol.for('AuthController'),
    AuthService: Symbol.for('AuthService'),
    MongodbService: Symbol.for('MongodbService'),
};

export { TYPES };
