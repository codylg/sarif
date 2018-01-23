// Built on simpleWeather - http://simpleweather.monkeecreate.com
if (disableWeather != 'yes'){
	$(document).ready(function() {
		$.simpleWeather({

			woeid: woeid,
			unit: unit,
			language: language,

			success: function(weather) {
				// German translation by Benedict Müller
				if (language == 'de'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'Tornado';}
					if (weather.currently == 'tropical storm'){weather.currently = 'Tropischer Sturm';}
					if (weather.currently == 'hurricane'){weather.currently = 'Hurrikan';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'Schwere Gewitter';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'Gewitter';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'Gewitter';}
					if (weather.currently == 'thunder'){weather.currently = 'Donner';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'Gemischt Regen und Schnee';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'Gemischt Regen und Graupel';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'Gemischt Schnee und Schneeregen';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'Gefrierender Sprühregen';}
					if (weather.currently == 'drizzle'){weather.currently = 'Sprühregen';}
					if (weather.currently == 'freezing rain'){weather.currently = 'Gefrierender Regen';}
					if (weather.currently == 'showers'){weather.currently = 'Regenfälle';}
					if (weather.currently == 'snow flurries'){weather.currently = 'Schneegestöber';}
					if (weather.currently == 'light snow showers'){weather.currently = 'Leichter Schneefall';}
					if (weather.currently == 'blowing snow'){weather.currently = 'Schneewehen';}
					if (weather.currently == 'snow'){weather.currently = 'Schnee';}
					if (weather.currently == 'hail'){weather.currently = 'Hagel';}
					if (weather.currently == 'sleet'){weather.currently = 'Graupel';}
					if (weather.currently == 'dust'){weather.currently = 'Staub';}
					if (weather.currently == 'foggy'){weather.currently = 'Neblig';}
					if (weather.currently == 'haze'){weather.currently = 'Dunst';}
					if (weather.currently == 'smoky'){weather.currently = 'Dunstig';}
					if (weather.currently == 'blustery'){weather.currently = 'Stürmisch';}
					if (weather.currently == 'windy'){weather.currently = 'Windig';}
					if (weather.currently == 'cold'){weather.currently = 'Kalt';}
					if (weather.currently == 'cloudy'){weather.currently = 'Wolkig';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'Meist bewölkt';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'Meist bewölkt/windig';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'Teilweise bewölkt';}
					if (weather.currently == 'clear'){weather.currently = 'Klar';}
					if (weather.currently == 'sunny'){weather.currently = 'Sonnig';}
					if (weather.currently == 'fair'){weather.currently = 'Heiter';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'Gemischt Regen und Hagel';}
					if (weather.currently == 'hot'){weather.currently = 'Heiß';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'Örtliche Gewitter';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'Vereinzelte Gewitter';}
					if (weather.currently == 'scattered showers'){weather.currently = 'Vereinzelte Regenfälle';}
					if (weather.currently == 'heavy snow'){weather.currently = 'Heftiger Schneefall';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'vereinzelter Schneefall';}
					if (weather.currently == 'thundershowers'){weather.currently = 'Gewitterschauer';}
					if (weather.currently == 'snow showers'){weather.currently = 'Schneefall';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'Örtliche Gewitter';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'Regenfälle in der Nähe';}
					if (weather.currently == 'rain'){weather.currently = 'Regen';}
					if (weather.currently == 'light rain'){weather.currently = 'leichter Regen';}
					if (weather.currently == 'light rain with thunder'){weather.currently = 'Leichter Regen mit Donner';}
					if (weather.currently == 'rain shower'){weather.currently = 'Regenschauer';}
					if (weather.currently == 'light rain shower'){weather.currently = 'leichter Regenschauer';}
					if (weather.currently == 'light drizzle'){weather.currently = 'Leichtes Nieseln';}
					if (weather.currently == 'unknown'){weather.currently = 'Unbekannt';}
					if (weather.currently == 'not available'){weather.currently = 'Nicht verfügbar';}
				}
				// Spanish translation by Dennis Alvarez
				if (language == 'es'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'Tornado';}
					if (weather.currently == 'tropical storm'){weather.currently = 'Tormenta tropical';}
					if (weather.currently == 'hurricane'){weather.currently = 'Huracán';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'Tormentas eléctricas severas';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'Tormentas eléctricas';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'Tormenta eléctrica';}
					if (weather.currently == 'thunder'){weather.currently = 'truenos';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'Mezcla de lluvia y nieve';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'Mezcla de lluvia y aguanieve';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'Mezcla de nieve y aguanieve';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'Llovizna helada';}
					if (weather.currently == 'drizzle'){weather.currently = 'Llovizna';}
					if (weather.currently == 'freezing rain'){weather.currently = 'Lluvia helada';}
					if (weather.currently == 'showers'){weather.currently = 'Chubascos';}
					if (weather.currently == 'snow flurries'){weather.currently = 'Ráfagas de nieve';}
					if (weather.currently == 'light snow showers'){weather.currently = 'Ligero chubasco de nueve';}
					if (weather.currently == 'blowing snow'){weather.currently = 'Ventisca de nieve';}
					if (weather.currently == 'snow'){weather.currently = 'Nieve';}
					if (weather.currently == 'hail'){weather.currently = 'Granizo';}
					if (weather.currently == 'sleet'){weather.currently = 'Aguanieve';}
					if (weather.currently == 'dust'){weather.currently = 'Polvo';}
					if (weather.currently == 'foggy'){weather.currently = 'Niebla';}
					if (weather.currently == 'haze'){weather.currently = 'Neblina';}
					if (weather.currently == 'smoky'){weather.currently = 'Humeado';}
					if (weather.currently == 'blustery'){weather.currently = 'Tempestuoso';}
					if (weather.currently == 'windy'){weather.currently = 'Ventoso';}
					if (weather.currently == 'cold'){weather.currently = 'Frío';}
					if (weather.currently == 'cloudy'){weather.currently = 'Nublado';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'Mayormente nublado';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'Mayormente nublado/ventoso';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'Parcialmente nublado';}
					if (weather.currently == 'clear'){weather.currently = 'Despejado';}
					if (weather.currently == 'sunny'){weather.currently = 'Soleado';}
					if (weather.currently == 'fair'){weather.currently = 'Despejado';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'Mezcla de lluvia y neblina';}
					if (weather.currently == 'hot'){weather.currently = 'Caliente';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'Tormenta eléctrica aislada';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'Tormenta eléctrica dispersa';}
					if (weather.currently == 'scattered showers'){weather.currently = 'Chubascos dispersos';}
					if (weather.currently == 'heavy snow'){weather.currently = 'Nieve pesada';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'Lluvia de nieve dispersa';}
					if (weather.currently == 'thundershowers'){weather.currently = 'Tormenta eléctrica con lluvias';}
					if (weather.currently == 'snow showers'){weather.currently = 'Chubascos de nieve';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'Tormenta eléctrica aislada con lluvias';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'Chubascos en áreas cercanas';}
					if (weather.currently == 'rain'){weather.currently = 'Lluvia';}
					if (weather.currently == 'light rain'){weather.currently = 'Llovizna';}
					if (weather.currently == 'light rain with thunder'){weather.currently = 'llovizna con truenos';}
					if (weather.currently == 'rain shower'){weather.currently = 'Aguacero';}
					if (weather.currently == 'light rain shower'){weather.currently = 'Lllovizna';}
					if (weather.currently == 'light drizzle'){weather.currently = 'llovizna';}
					if (weather.currently == 'unknown'){weather.currently = 'Desconocido';}
					if (weather.currently == 'not available'){weather.currently = 'No disponible';}
				}
				// French translation by Zooropalg
				if (language == 'fr'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'tornade';}
					if (weather.currently == 'tropical storm'){weather.currently = 'tempête tropicale';}
					if (weather.currently == 'hurricane'){weather.currently = 'ouragan';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'sévères orages';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'orages';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'orage';}
					if (weather.currently == 'thunder'){weather.currently = 'orage';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'pluie et neige';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'pluie et grésil';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'neige et grésil';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'bruine verglaçante';}
					if (weather.currently == 'drizzle'){weather.currently = 'bruine';}
					if (weather.currently == 'freezing rain'){weather.currently = 'pluie verglaçante';}
					if (weather.currently == 'showers'){weather.currently = 'pluies';}
					if (weather.currently == 'snow flurries'){weather.currently = 'averses de neige';}
					if (weather.currently == 'light snow showers'){weather.currently = 'neige sparse';}
					if (weather.currently == 'blowing snow'){weather.currently = 'poudreuse';}
					if (weather.currently == 'snow'){weather.currently = 'neige';}
					if (weather.currently == 'hail'){weather.currently = 'grêle';}
					if (weather.currently == 'sleet'){weather.currently = 'grésil';}
					if (weather.currently == 'dust'){weather.currently = 'poussière';}
					if (weather.currently == 'foggy'){weather.currently = 'brumeux';}
					if (weather.currently == 'haze'){weather.currently = 'brume';}
					if (weather.currently == 'smoky'){weather.currently = 'nuageux';}
					if (weather.currently == 'blustery'){weather.currently = 'venteux';}
					if (weather.currently == 'windy'){weather.currently = 'venteux';}
					if (weather.currently == 'cold'){weather.currently = 'froid';}
					if (weather.currently == 'cloudy'){weather.currently = 'nuageux';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'nuageux';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'nudges et vent';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'partiellement nuageux';}
					if (weather.currently == 'clear'){weather.currently = 'temps clair';}
					if (weather.currently == 'sunny'){weather.currently = 'ensolleillé';}
					if (weather.currently == 'fair'){weather.currently = 'beau';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'pluie mêlée de grêle';}
					if (weather.currently == 'hot'){weather.currently = 'temps chaud';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'orages isolés';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'orages dispersés';}
					if (weather.currently == 'scattered showers'){weather.currently = 'plies éparses';}
					if (weather.currently == 'heavy snow'){weather.currently = 'très enneigé';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'chutes de neige';}
					if (weather.currently == 'thundershowers'){weather.currently = 'orages';}
					if (weather.currently == 'snow showers'){weather.currently = 'averses de neige';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'orages isolés';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'pluies dans les environs';}
					if (weather.currently == 'rain'){weather.currently = 'pluie';}
					if (weather.currently == 'light rain'){weather.currently = 'Légères pluies';}
					if (weather.currently == 'light rain with thunder'){weather.currently = 'Légère pluie et tonnerre';}
					if (weather.currently == 'rain shower'){weather.currently = 'Pluies éparses';}
					if (weather.currently == 'light rain shower'){weather.currently = 'Légères pluies éparses';}
					if (weather.currently == 'light drizzle'){weather.currently = 'Légère bruine';}
					if (weather.currently == 'unknown'){weather.currently = 'inconnue';}
					if (weather.currently == 'not available'){weather.currently = 'non disponible';}
				}
				// Italian translation by Frep
				if (language == 'it'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'temporale';}
					if (weather.currently == 'tropical storm'){weather.currently = 'forte temporale';}
					if (weather.currently == 'hurricane'){weather.currently = 'forte temporale';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'forte temporale';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'temporale';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'temporale';}
					if (weather.currently == 'thunder'){weather.currently = 'Tuoni';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'pioggia e nev';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'pioggia e nevischio';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'neve con nevischio';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'pioggia fredda';}
					if (weather.currently == 'drizzle'){weather.currently = 'pioggia leggera';}
					if (weather.currently == 'freezing rain'){weather.currently = 'pioggia gelata';}
					if (weather.currently == 'showers'){weather.currently = 'pioggia';}
					if (weather.currently == 'snow flurries'){weather.currently = 'folate di neve';}
					if (weather.currently == 'light snow showers'){weather.currently = 'neve leggera';}
					if (weather.currently == 'blowing snow'){weather.currently = 'neve con vento';}
					if (weather.currently == 'snow'){weather.currently = 'neve';}
					if (weather.currently == 'hail'){weather.currently = 'grandine';}
					if (weather.currently == 'sleet'){weather.currently = 'nevischio';}
					if (weather.currently == 'dust'){weather.currently = 'pulviscolo';}
					if (weather.currently == 'foggy'){weather.currently = 'nebbia';}
					if (weather.currently == 'haze'){weather.currently = 'foschia';}
					if (weather.currently == 'smoky'){weather.currently = 'nebbia fitta';}
					if (weather.currently == 'blustery'){weather.currently = 'foschia fitta';}
					if (weather.currently == 'windy'){weather.currently = 'vento';}
					if (weather.currently == 'cold'){weather.currently = 'freddo';}
					if (weather.currently == 'cloudy'){weather.currently = 'nuvoloso';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'molto nuvoloso';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'molto nuvoloso/vento';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'poco nuvoloso';}
					if (weather.currently == 'clear'){weather.currently = 'sereno';}
					if (weather.currently == 'sunny'){weather.currently = 'soleggiato';}
					if (weather.currently == 'fair'){weather.currently = 'chiaro';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'pioggia e grandine';}
					if (weather.currently == 'hot'){weather.currently = 'caldo';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'temporali isolati';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'temporali sparsi';}
					if (weather.currently == 'scattered showers'){weather.currently = 'piogge sparse';}
					if (weather.currently == 'heavy snow'){weather.currently = 'neve';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'neve a tratti';}
					if (weather.currently == 'thundershowers'){weather.currently = 'rovesci';}
					if (weather.currently == 'snow showers'){weather.currently = 'rovesci nevosi';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'rovesci isolati';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'pioggia nelle vicinanze';}
					if (weather.currently == 'rain'){weather.currently = 'pioggia';}
					if (weather.currently == 'light rain'){weather.currently = 'Pioggia leggera';}
					if (weather.currently == 'light rain with thunder'){weather.currently = 'Pioggia leggera con tuoni';}
					if (weather.currently == 'rain shower'){weather.currently = 'Forti precipitazioni';}
					if (weather.currently == 'light rain shower'){weather.currently = 'Piccole precipitazioni';}
					if (weather.currently == 'light drizzle'){weather.currently = 'pioggerellina';}
					if (weather.currently == 'unknown'){weather.currently = 'sconosciuto';}
					if (weather.currently == 'not available'){weather.currently = 'non disponibile';}
				}
				// Dutch translation by Nienke Boomsma
				if (language == 'nl'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'tornado';}
					if (weather.currently == 'tropical storm'){weather.currently = 'tropische storm';}
					if (weather.currently == 'hurricane'){weather.currently = 'orkaan';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'ernstige onweersbuien';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'onweersbuien';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'onweersbui';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'gemengde regen en sneeuw';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'gemengde regen en ijzel';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'gemengde sneeuw en ijzel';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'bevroren motregen';}
					if (weather.currently == 'drizzle'){weather.currently = 'motregen';}
					if (weather.currently == 'freezing rain'){weather.currently = 'bevroren regen';}
					if (weather.currently == 'showers'){weather.currently = 'regenbuien';}
					if (weather.currently == 'snow flurries'){weather.currently = 'sneeuwvlagen';}
					if (weather.currently == 'light snow showers'){weather.currently = 'lichte sneeuwbuien';}
					if (weather.currently == 'blowing snow'){weather.currently = 'sneeuwbui';}
					if (weather.currently == 'snow'){weather.currently = 'sneeuw';}
					if (weather.currently == 'hail'){weather.currently = 'hagel';}
					if (weather.currently == 'sleet'){weather.currently = 'ijzel';}
					if (weather.currently == 'dust'){weather.currently = 'stoffig';}
					if (weather.currently == 'foggy'){weather.currently = 'mistig';}
					if (weather.currently == 'haze'){weather.currently = 'wazig';}
					if (weather.currently == 'smoky'){weather.currently = 'mistig';}
					if (weather.currently == 'blustery'){weather.currently = 'windvlagen';}
					if (weather.currently == 'windy'){weather.currently = 'winderig';}
					if (weather.currently == 'cold'){weather.currently = 'koud';}
					if (weather.currently == 'cloudy'){weather.currently = 'bewolkt';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'zwaar bewolkt';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'zwaar bewolkt/winderig';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'licht bewolkt';}
					if (weather.currently == 'clear'){weather.currently = 'onbewolkt';}
					if (weather.currently == 'sunny'){weather.currently = 'zonnig';}
					if (weather.currently == 'fair'){weather.currently = 'onbewolkt';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'gemengde regen en hagel';}
					if (weather.currently == 'hot'){weather.currently = 'heet';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'geïsoleerde onweersbuien';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'verspreide onweersbuien';}
					if (weather.currently == 'scattered showers'){weather.currently = 'verspreide regenbuien';}
					if (weather.currently == 'heavy snow'){weather.currently = 'zware sneeuwval';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'verspreide sneeuwbuien';}
					if (weather.currently == 'thundershowers'){weather.currently = 'onweersbuien';}
					if (weather.currently == 'snow showers'){weather.currently = 'sneeuwbuien';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'geïsoleerde onweersbuien';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'buien in de omgeving';}
					if (weather.currently == 'rain'){weather.currently = 'regen';}
					if (weather.currently == 'light rain'){weather.currently = 'Lichte regen';}
					if (weather.currently == 'rain shower'){weather.currently = 'Regenbui';}
					if (weather.currently == 'light rain shower'){weather.currently = 'Lichte regenbui';}
					if (weather.currently == 'light drizzle'){weather.currently = 'Lichte motregen';}
					if (weather.currently == 'unknown'){weather.currently = 'onbekend';}
					if (weather.currently == 'not available'){weather.currently = 'niet beschikbaar';}
				}
				// Russian translation by Victor Ryabov
				if (language == 'ru'){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = 'Торнадо';}
					if (weather.currently == 'tropical storm'){weather.currently = 'Шторм';}
					if (weather.currently == 'hurricane'){weather.currently = 'Ураган';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = 'Сильные грозы';}
					if (weather.currently == 'thunderstorms'){weather.currently = 'Грозы';}
					if (weather.currently == 'thunderstorm'){weather.currently = 'Гроза';}
					if (weather.currently == 'thunder'){weather.currently = 'Гроза';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = 'Снег с дождем';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = 'Снег с дождем';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = 'Мокрый снег';}
					if (weather.currently == 'freezing drizzle'){weather.currently = 'Слякоть';}
					if (weather.currently == 'drizzle'){weather.currently = 'Слякоть';}
					if (weather.currently == 'freezing rain'){weather.currently = 'Ледяной дождь';}
					if (weather.currently == 'showers'){weather.currently = 'Дожди';}
					if (weather.currently == 'snow flurries'){weather.currently = 'Буран';}
					if (weather.currently == 'light snow showers'){weather.currently = 'Снегопад';}
					if (weather.currently == 'blowing snow'){weather.currently = 'Метель';}
					if (weather.currently == 'snow'){weather.currently = 'Снег';}
					if (weather.currently == 'hail'){weather.currently = 'Град';}
					if (weather.currently == 'sleet'){weather.currently = 'Мокрый снег';}
					if (weather.currently == 'dust'){weather.currently = 'Пыль';}
					if (weather.currently == 'foggy'){weather.currently = 'Туман';}
					if (weather.currently == 'haze'){weather.currently = 'Легкий туман';}
					if (weather.currently == 'smoky'){weather.currently = 'Дымка';}
					if (weather.currently == 'blustery'){weather.currently = 'Сильный ветер';}
					if (weather.currently == 'windy'){weather.currently = 'Ветер';}
					if (weather.currently == 'cold'){weather.currently = 'Холода';}
					if (weather.currently == 'cloudy'){weather.currently = 'Облачно';}
					if (weather.currently == 'mostly cloudy'){weather.currently = 'Облачно';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = 'Облачно и ветрено';}
					if (weather.currently == 'partly cloudy'){weather.currently = 'Переменная облачность';}
					if (weather.currently == 'clear'){weather.currently = 'Ясно';}
					if (weather.currently == 'sunny'){weather.currently = 'Солнечно';}
					if (weather.currently == 'fair'){weather.currently = 'Ясно';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = 'Град с дождем';}
					if (weather.currently == 'hot'){weather.currently = 'Жара';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = 'Грозы';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = 'Грозы';}
					if (weather.currently == 'scattered showers'){weather.currently = 'Дожди';}
					if (weather.currently == 'heavy snow'){weather.currently = 'Снегопад';}
					if (weather.currently == 'scattered snow showers'){weather.currently = 'Снегопад';}
					if (weather.currently == 'thundershowers'){weather.currently = 'Гроза';}
					if (weather.currently == 'snow showers'){weather.currently = 'Снегопад';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = 'Гроза';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = 'Дожди';}
					if (weather.currently == 'rain'){weather.currently = 'Дождь';}
					if (weather.currently == 'light rain'){weather.currently = 'Мелкий дождь';}
					if (weather.currently == 'light rain with thunder'){weather.currently = 'Мелкий дождь';}
					if (weather.currently == 'rain shower'){weather.currently = 'Ливень';}
					if (weather.currently == 'light rain shower'){weather.currently = 'Дождь с грозой';}
					if (weather.currently == 'light drizzle'){weather.currently = 'Слякоть';}
					if (weather.currently == 'unknown'){weather.currently = 'Неизвестно';}
					if (weather.currently == 'not available'){weather.currently = 'Недоступно';}
				}
				html = '<span>'+weather.temp+'&deg;</span> ';
				if (showDate == 'no' && weather.currently.length > 16){
					html += '<span style="font-size:0.75em;">'+weather.currently+'</span>';
				}
				else{
					html += '<span>'+weather.currently+'</span>';
				}
				if (weathIconStyle == 'dark'){
					html += '<img id="weathericon" width="47px" src="weathericonsdark/'+weather.code+'.png">';
				}
				else{
					html += '<img id="weathericon" width="47px" src="weathericons/'+weather.code+'.png">';
				}
				$("#weather").html(html);
			},
			error: function(error) {
				$("#weather").html('<p>'+error+'</p>');
			}
		});
	});
	(function($){"use strict";$.extend({simpleWeather:function(m){m=$.extend({zipcode:'',woeid:'',location:'',unit:'',success:function(a){},error:function(a){}},m);var n=new Date();var o='http://query.yahooapis.com/v1/public/yql?format=json&rnd='+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+'&diagnostics=true&callback=?&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=';if(m.location!==''){o+='select * from weather.forecast where location in (select id from weather.search where query="'+m.location+'") and u="'+m.unit+'"'}else if(m.zipcode!==''){o+='select * from weather.forecast where location in ("'+m.zipcode+'") and u="'+m.unit+'"'}else if(m.woeid!==''){o+='select * from weather.forecast where woeid='+m.woeid+' and u="'+m.unit+'"'}else{m.error("");return false}$.getJSON(o,function(l){if(l!==null&&l.query.results!==null){$.each(l.query.results,function(i,a){if(a.constructor.toString().indexOf("Array")!==-1){a=a[0]}var b=new Date();var c=new Date(b.toDateString()+' '+a.astronomy.sunrise);var d=new Date(b.toDateString()+' '+a.astronomy.sunset);if(b>c&&b<d){var e='d'}else{var e='n'}var f=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW','N'];var g=f[Math.round(a.wind.direction/22.5)];if(a.item.condition.temp<80&&a.atmosphere.humidity<40){var h=-42.379+2.04901523*a.item.condition.temp+10.14333127*a.atmosphere.humidity-0.22475541*a.item.condition.temp*a.atmosphere.humidity-6.83783*(Math.pow(10,-3))*(Math.pow(a.item.condition.temp,2))-5.481717*(Math.pow(10,-2))*(Math.pow(a.atmosphere.humidity,2))+1.22874*(Math.pow(10,-3))*(Math.pow(a.item.condition.temp,2))*a.atmosphere.humidity+8.5282*(Math.pow(10,-4))*a.item.condition.temp*(Math.pow(a.atmosphere.humidity,2))-1.99*(Math.pow(10,-6))*(Math.pow(a.item.condition.temp,2))*(Math.pow(a.atmosphere.humidity,2))}else{var h=a.item.condition.temp}if(m.unit==="f"){var j=Math.round((5.0/9.0)*(a.item.condition.temp-32.0))}else{var j=Math.round((9.0/5.0)*a.item.condition.temp+32.0)}var k={title:a.item.title,temp:a.item.condition.temp,tempAlt:j,code:a.item.condition.code,todayCode:a.item.forecast[0].code,units:{temp:a.units.temperature,distance:a.units.distance,pressure:a.units.pressure,speed:a.units.speed},currently:a.item.condition.text,high:a.item.forecast[0].high,low:a.item.forecast[0].low,forecast:a.item.forecast[0].text,wind:{chill:a.wind.chill,direction:g,speed:a.wind.speed},humidity:a.atmosphere.humidity,heatindex:h,pressure:a.atmosphere.pressure,rising:a.atmosphere.rising,visibility:a.atmosphere.visibility,sunrise:a.astronomy.sunrise,sunset:a.astronomy.sunset,description:a.item.description,thumbnail:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.condition.code+e+"s.png",image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.condition.code+e+".png",tomorrow:{high:a.item.forecast[1].high,low:a.item.forecast[1].low,forecast:a.item.forecast[1].text,code:a.item.forecast[1].code,date:a.item.forecast[1].date,day:a.item.forecast[1].day,image:"http://l.yimg.com/a/i/us/nws/weather/gr/"+a.item.forecast[1].code+"d.png"},city:a.location.city,country:a.location.country,region:a.location.region,updated:a.item.pubDate,link:a.item.link};m.success(k)})}else{if(l.query.results===null){m.error("Invalid location given.")}else{m.error("Weather could not be displayed. Try again.")}}});return this}})})(jQuery);
}
else{
	showWeather = 'no';
}
/*
				if (language == ''){
					weather.currently = weather.currently.toLowerCase()
					if (weather.currently == 'tornado'){weather.currently = '';}
					if (weather.currently == 'tropical storm'){weather.currently = '';}
					if (weather.currently == 'hurricane'){weather.currently = '';}
					if (weather.currently == 'severe thunderstorms'){weather.currently = '';}
					if (weather.currently == 'thunderstorms'){weather.currently = '';}
					if (weather.currently == 'thunderstorm'){weather.currently = '';}
					if (weather.currently == 'thunder'){weather.currently = '';}
					if (weather.currently == 'mixed rain and snow'){weather.currently = '';}
					if (weather.currently == 'mixed rain and sleet'){weather.currently = '';}
					if (weather.currently == 'mixed snow and sleet'){weather.currently = '';}
					if (weather.currently == 'freezing drizzle'){weather.currently = '';}
					if (weather.currently == 'drizzle'){weather.currently = '';}
					if (weather.currently == 'freezing rain'){weather.currently = '';}
					if (weather.currently == 'showers'){weather.currently = '';}
					if (weather.currently == 'snow flurries'){weather.currently = '';}
					if (weather.currently == 'light snow showers'){weather.currently = '';}
					if (weather.currently == 'blowing snow'){weather.currently = '';}
					if (weather.currently == 'snow'){weather.currently = '';}
					if (weather.currently == 'hail'){weather.currently = '';}
					if (weather.currently == 'sleet'){weather.currently = '';}
					if (weather.currently == 'dust'){weather.currently = '';}
					if (weather.currently == 'foggy'){weather.currently = '';}
					if (weather.currently == 'haze'){weather.currently = '';}
					if (weather.currently == 'smoky'){weather.currently = '';}
					if (weather.currently == 'blustery'){weather.currently = '';}
					if (weather.currently == 'windy'){weather.currently = '';}
					if (weather.currently == 'cold'){weather.currently = '';}
					if (weather.currently == 'cloudy'){weather.currently = '';}
					if (weather.currently == 'mostly cloudy'){weather.currently = '';}
					if (weather.currently == 'mostly cloudy/windy'){weather.currently = '';}
					if (weather.currently == 'partly cloudy'){weather.currently = '';}
					if (weather.currently == 'clear'){weather.currently = '';}
					if (weather.currently == 'sunny'){weather.currently = '';}
					if (weather.currently == 'fair'){weather.currently = '';}
					if (weather.currently == 'mixed rain and hail'){weather.currently = '';}
					if (weather.currently == 'hot'){weather.currently = '';}
					if (weather.currently == 'isolated thunderstorms'){weather.currently = '';}
					if (weather.currently == 'scattered thunderstorms'){weather.currently = '';}
					if (weather.currently == 'scattered showers'){weather.currently = '';}
					if (weather.currently == 'heavy snow'){weather.currently = '';}
					if (weather.currently == 'scattered snow showers'){weather.currently = '';}
					if (weather.currently == 'thundershowers'){weather.currently = '';}
					if (weather.currently == 'snow showers'){weather.currently = '';}
					if (weather.currently == 'isolated thundershowers'){weather.currently = '';}
					if (weather.currently == 'showers in the vicinity'){weather.currently = '';}
					if (weather.currently == 'rain'){weather.currently = '';}
					if (weather.currently == 'light rain'){weather.currently = '';}
					if (weather.currently == 'light rain with thunder'){weather.currently = '';}
					if (weather.currently == 'rain shower'){weather.currently = '';}
					if (weather.currently == 'light rain shower'){weather.currently = '';}
					if (weather.currently == 'light drizzle'){weather.currently = '';}
					if (weather.currently == 'unknown'){weather.currently = '';}
					if (weather.currently == 'not available'){weather.currently = '';}
				}
*/