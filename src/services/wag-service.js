export default class WagService {


    getPreview = () => {
        return new Promise((resolve) => {
            const item = {
                img: 'http://cdn.motorpage.ru/Photos/800/1BD1.jpg',
                text: "The Volkswagen Jetta (About this soundlisten (help·info)) is a compact car/small family car manufactured and marketed by Volkswagen since 1979. Positioned to fill a sedan niche above the firm\'s Golf hatchback, it has been marketed over seven generations, variously as the Atlantic, Vento, Bora, City Jetta, Jetta City, GLI, Jetta, Clasico, and Sagitar (in China).",
                name: 'Volkswagen'
            }
            return setTimeout(() => resolve(item), 500)
        })
    }

    getItems = () => {
        return new Promise((resolve => {
            const items = [
                {
                    id: 1,
                    name: 'Polo',
                    price: 15000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1BD1.jpg',
                    details: 'The Volkswagen Polo is a car produced by the German manufacturer Volkswagen since 1975. It is sold in Europe and other markets worldwide in hatchback, sedan and estate variants. The Polo has been produced in six generations. Related Volkswagen Group models include the Škoda Fabia, SEAT Ibiza and Audi A1.'
                },
                {
                    id: 2,
                    name: 'Jetta',
                    price: 20000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1DE8.jpg',
                    details: 'The Volkswagen Jetta (About this soundlisten (help·info)) is a compact car/small family car manufactured and marketed by Volkswagen since 1979. Positioned to fill a sedan niche above the firm\'s Golf hatchback, it has been marketed over seven generations, variously as the Atlantic, Vento, Bora, City Jetta, Jetta City, GLI, Jetta, Clasico, and Sagitar (in China).'
                    },
                {
                    id: 3,
                    name: 'Passat',
                    price: 25000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1102A.jpg',
                    details: 'The Volkswagen Passat is a large family car manufactured and marketed by the German automobile manufacturer Volkswagen since 1973, and now in its eighth generation. It has been marketed variously as the Dasher, Santana, Quantum, Magotan, Corsar and Carat. The successive generations of the Passat carry the Volkswagen internal designations B1, B2, etc.\n' +
                        '\n' +
                        'In 2008, Volkswagen launched Passat CC, a "four-door coupé" variant of the Passat.\n' +
                        '\n' +
                        'Volkswagen currently markets two variants of the Passat globally. In January 2011, Volkswagen announced that the new mid-size sedan (NMS) being built at the Volkswagen Chattanooga Assembly Plant for the North American market would be named the Passat.[1] Shanghai Volkswagen Automotive also manufactures the Passat NMS in its Nanjing factory. The NMS is sold in the North American, South Korean, Chinese, and Middle Eastern markets. The Volkswagen Passat NMS won the 2012 Motor Trend Car of the Year. A new Passat model entered production in Europe in 2014, based on the MQB platform'
                },
                {
                    id: 4,
                    name: 'Arteon',
                    price: 30000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1CC1.jpg',
                    details: 'The Volkswagen Arteon is a four door fastback based on the Volkswagen Group MQB platform.[1] The Arteon was unveiled on 6 March 2017, at the Geneva Motor Show, and at the Chicago Auto Show for the market in North America.[2][3] The Arteon is a direct successor to the CC. Volkswagen claims that the Arteon will be more upmarket than the previous model'
                },
                {
                    id: 5,
                    name: 'Tiguan',
                    price: 25000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1BA6.jpg',
                    details : 'The Volkswagen Tiguan is a compact / mid–size crossover vehicle (CUV) manufactured by German automaker Volkswagen. Introduced in 2007, the first generation model uses the PQ46 platform of the B6 Generation Volkswagen Passat.[1] All first generation (5N) Tiguans featured two row seating and transverse mounted four-cylinder engines.\n' +
                        '\n' +
                        'The Tiguan debuted as a concept vehicle at the November 2006 LA Auto Show[2] and in production form at the 2007 International Motor Show Germany. Manufacture began in the winter of 2007, at Volkswagen\'s subsidiary Auto 5000 (an experimental company within a company from 2001 to 2009) in Wolfsburg and continued subsequently under the company\'s standard contract arrangements, at Wolfsburg and in Kaluga, Russia.[3][4]\n' +
                        '\n' +
                        'As of the spring of 2020, six million units had been sold worldwide, with 910,926 units manufactured in 2019 alone. This makes the Tiguan the best-selling car overall in the Volkswagen Group. It is also the best selling SUV in Europe.[5] The Euro NCAP gave the Tiguan a five-star safety rating.'
                    },
                {
                    id: 6,
                    name: 'Teramont',
                    price: 30000,
                    img: 'http://cdn.motorpage.ru/Photos/800/01d38.jpg',
                    details: 'The Volkswagen Atlas is a full-size crossover SUV manufactured by the German automaker Volkswagen at its Chattanooga plant in Chattanooga, Tennessee, United States.[6][7] The Atlas is the largest vehicle produced on the Volkswagen Group MQB platform, and features a transverse mounted inline-four or Volkswagen\'s narrow angle VR6.[3][8]\n' +
                        '\n' +
                        'The Atlas is marketed as the Volkswagen Teramont in the Middle East,[9] Left-hand traffic countries in Africa,[10] as well as in Mexico,[11] Russia,[12] and China, where production in Ningbo began in 2017.[13] In China, the Volkswagen Teramont is available with a turbocharged 2.0L or VR6 and DSG transmission.'
                },
                {
                    id: 7,
                    name: 'Touareg',
                    price: 30000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1E3B.jpg',
                    details: 'The Volkswagen Touareg (German pronunciation: [ˈtuːaʁɛk]) is a mid-size luxury sport-utility vehicle (SUV) produced by German automaker Volkswagen since 2002 at the Volkswagen Bratislava Plant. The vehicle was named after the nomadic Tuareg people, inhabitants of the Saharan interior in North Africa.[1]\n' +
                        '\n' +
                        'As of its first generation, the Touareg was developed together with the Porsche Cayenne and the Audi Q7, sharing platforms and much technology. The vehicles were developed from the start as modern unibody SUVs, with all around independent suspension, and with the ambition of excellent performance both on and off the road. The Touareg\'s third generation is in production since 2018.\n' +
                        'The initial generation (2002–2010) offered an exceptional choice of engine blocks, including five-, six-, eight-, ten- and twelve-cylinder engine choices.'
                },
                {
                    id: 8,
                    name: 'Golf R',
                    price: 15000,
                    img: 'http://cdn.motorpage.ru/Photos/800/DB2013AU0115.jpg',
                    details: 'The Volkswagen Golf (About this soundlisten (help·info)) is a compact car produced by the German automotive manufacturer Volkswagen since 1974, marketed worldwide across eight generations, in various body configurations and under various nameplates – such as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1).\n' +
                        '\n' +
                        'The original Golf Mk1 was a front-engined, front-wheel drive replacement for the air-cooled, rear-engined, rear-wheel drive Volkswagen Beetle. Historically, the Golf is Volkswagen\'s best-selling model and is among the world\'s top three best-selling models, with more than thirty million built as of June 2013.[1][2]'
                },
                {
                    id: 9,
                    name: 'Atlas',
                    price: 36000,
                    img: 'http://cdn.motorpage.ru/Photos/800/11773.jpg',
                    details: 'Rear View Camera System\n' +
                        'Benefit from the view of a wide lens when you want it. It can help you see obstacles when backing up, a feature so helpful you’ll wonder how you ever managed without it.'
                },
                {
                    id: 10,
                    name: 'Amarok',
                    price: 27000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1B73.jpg',
                    details: 'The BMW X1 is a line of subcompact luxury crossover SUV produced by BMW since 2009.'
                },
                {
                    id: 11,
                    name: 'Passat GTE',
                    price: 16000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1574.jpg',
                    details: 'The Volkswagen Amarok is a pickup truck produced by Volkswagen Commercial Vehicles since 2010. It is a traditional body-on-frame truck with double-wishbone suspension at the front and leaf springs at the rear.[5] The Amarok range consists of single cab and double cab, combined with either rear-wheel drive or 4motion four-wheel-drive, and is powered by turbocharged gasoline or turbocharged direct injection (TDI) diesel engines. Volkswagen considers the Toyota Hilux, Nissan Navara, Mitsubishi L200, Ford Ranger, Isuzu D-Max and Chevrolet/Holden Colorado/S-10 to be Amarok competitors.'
                },
                {
                    id: 12,
                    name: 'XL1',
                    price: 46000,
                    img: 'http://cdn.motorpage.ru/Photos/800/DB2013AU0115.jpg',
                    details: 'The XL1 is the third iteration of the Volkswagen 1-litre car, unveiled at the 2011 Qatar Motor Show. The diesel plug-in hybrid prototype is branded as a "Super Efficient Vehicle" (SEV).[13]\n' +
                        '\n' +
                        'According to Volkswagen, the XL1 can achieve a combined fuel consumption of 0.9 litres per 100 kilometres (310 mpg‑imp; 260 mpg‑US)[14] and CO\n' +
                        '2 emissions of 24 g/km. Like the L1, the XL1 uses a two-cylinder turbo-diesel. Displacing 800 cm3 (49 cu in), it is rated at 35 kW (47 hp) and 121 N⋅m (89 lb⋅ft) of torque and transmits power to the rear wheels through a seven-speed DSG transmission. The electric motor pitches in with 20 kW (27 hp) and 100 N⋅m (74 lb⋅ft) of torque, and can work in parallel with the diesel or drive the car independent of it. Fully charged, the XL1 can travel up to 35 km (22 mi) on electric power.'
                },
                {
                    id: 13,
                    name: 'T-CROSS',
                    price: 26000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1F1D.jpg',
                    details: 'The Volkswagen T-Cross is a subcompact crossover SUV manufactured by the German automaker Volkswagen. It is based on the MQB platform, and was officially launched in April 2019. The car is positioned below the T-Roc, making it the smallest SUV model from Volkswagen.'
                },
                {
                    id: 14,
                    name: 'Transporter',
                    price: 26000,
                    img: 'http://cdn.motorpage.ru/Photos/800/1B21.jpg',
                    details: 'The Volkswagen Transporter, based on the Volkswagen Group\'s T platform, now in its sixth generation, refers to a series of vans produced for over 60 years and marketed worldwide.\n' +
                        '\n' +
                        'The T series is now considered an official Volkswagen Group automotive platform.[1][2] and generations are sequentially named T1, T2, T3, T4, T5 and T6. Pre-dating the T platform designations, the first three generations were named Type 2, indicating their relative position to the Type 1, or Beetle. As part of the T platform, the first three generations are retroactively named T1, T2 and T3.'
                },
                {
                    id: 15,
                    name: 'Lavida',
                    price: 16000,
                    img: 'http://cdn.motorpage.ru/Photos/800/VW_Lavida_1.jpg',
                    details: 'The Volkswagen Lavida is a four-door compact sedan manufactured by the German automobile manufacturer Volkswagen. Originally launched at Auto China 2008 in Beijing, the Lavida is considered the first mass produced Volkswagen small family car to be mainly designed by its Chinese partner. In 2010, the car was the number one seller in China, with 251,615 vehicles delivered.[1]\n' +
                        '\n' +
                        'The model was significantly updated in 2012, with the launch of the "New Lavida" at the Beijing Auto Show and the additional Variant (estate) version was expected to be launched at the 2013 Shanghai Auto Show'
                }
            ]
            return setTimeout(()=> resolve(items), 1000)
        }))
    }
    getItem =  (id) => {
        return new Promise(async (resolve)  => {
            const items = await this.getItems()
            const res = items.find((item) => item.id === +id)
            return setTimeout(() => resolve(res), 500)
        })
    }
}