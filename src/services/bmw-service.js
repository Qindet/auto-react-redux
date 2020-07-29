export default class BmwService {


    getPreview = () => {
        return new Promise((resolve) => {
            const item = {
                    img: 'https://1gai.ru/uploads/posts/2014-09/1409578586_bmw-m4-cabrio-57.jpg',
                    text: "Bayerische Motoren Werke AG, commonly referred to as BMW (German pronunciation: [beːʔɛmˈveː] (About this soundlisten)), is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2015, BMW was the worlds twelfth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[2] The company has significant motorsport history, especially in touring cars, Formula 1, sports cars and the Isle of Man TT.",
                    name: 'BMW'
            }
            return setTimeout(() => resolve(item), 500)
        })
    }

    getItems = () => {
        return new Promise((resolve => {
            const items = [
                {
                    id: 1,
                    name: 'BMW X5',
                    price: 10000,
                    img: 'https://avatars.mds.yandex.net/get-pdb/985144/28cdebf6-d2fe-4975-b476-f5aa9250cc41/s1200?webp=false',
                    details: 'The X5 made its debut in 1999. It was BMW\'s first SUV and it also featured all-wheel drive and was available with either manual or automatic transmission. In 2006, the second generation X5 was launched, known internally as the E70. Introduced in the facelift version of the E53, the E70 also featured the torque-split capable xDrive all-wheel drive system mated to an automatic transmission. In 2009, the X5 M performance variant was released as a 2010 model.[1]\n' +
                        '\n' +
                        'BMW branded the X5 as a Sport Activity Vehicle (SAV) rather than an SUV, to emphasize its on-road ability despite its size. Like the Lexus RX 300, the X5 heralded the shift from light truck-based body-on-frame SUVs to crossovers underpinned by unibody car platforms that would come to fruition in the late 2000s. Among German luxury automakers, while the Mercedes-Benz M-Class had beaten the X5 to the market by a year, the X5 was the first to use a unibody chassis whereas the M-Class used a light truck platform until its second generation. While the Lexus RX is based on the Toyota Camry mass market sedan, the X5 shares its underpinnings with the BMW 5 Series performance luxury sedan.'
                },
                {
                    id: 2,
                    name: 'BMW I8',
                    price: 6000,
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW\'s electrified fleet and is marketed under the BMW i sub-brand. The production version of the BMW i8 was unveiled at the 2013 Frankfurt Motor Show, and was released in Germany in June 2014.[10] Deliveries to retail customers in the U.S. began in August 2014.[11] A roadster variant was launched May 2018.[12] Production ended in June 2020.[13]\n' +
                        '\n' +
                        'The 2015 BMW i8 accelerates from 0 to 100 km/h (62 mph) in 4.4 seconds[14][15] and has an electronic limited top speed of 250 km/h (155 mph).[5] The 2015 model year i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the U.S. EPA cycle, the range in EV mode is 24 km (15 mi).[7] The battery capacity of both, BMW i8 Roadster and the i8 Coupé, was increased to 11.6 kWh in 2018, allowing the NEDC electric range to rise to 55 km (34 mi) for the coupé and to 53 km (33 mi) for the roadster'
                },
                {
                    id: 3,
                    name: 'BMW X6',
                    price: 11000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X6.jpg',
                    details: 'The BMW X6 is a mid-size luxury crossover by German automaker BMW.\n' +
                        '\n' +
                        'The first generation (E71) was released for sale in April 2008 for the 2008 model year. The X6 was marketed as a sports activity coupé (SAC) by BMW. It combines the attributes of an SUV (high ground clearance, all-wheel drive and all-weather ability, large wheels and tires) with the stance of a coupé (styling featuring a sloping roof). It was based on the previous generation BMW 5 and 6 Series. E71 development began in 2003 under Peter Tuennermann, after start of E70 X5 development in 2001. Design work by E70 X5 designer Pierre Leclercq was frozen in 2005, with test mules being run from the summer of 2005 and prototypes being tested from late 2006. Production began on December 3, 2007'
                },
                {
                    id: 4,
                    name: 'BMW X3',
                    price: 7000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X3-car-model.jpg',
                    details: ''
                },
                {
                    id: 5,
                    name: 'BMW 6 Series',
                    price: 12000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-6-Series.jpg',
                    details: 'The BMW X3 is a compact luxury crossover SUV manufactured by German automaker BMW since 2003. Based on the BMW 5 Series platform (G01), and now in its third generation, BMW markets the crossover as a Sports Activity Vehicle, the company\'s proprietary descriptor for its X-line of vehicles. The first generation X3 was designed by BMW in conjunction with Magna Steyr of Graz, Austria—who also manufactured all X3s under contract to BMW. BMW manufactures the second generation X3 at their Spartanburg plant in South Carolina, United States. The third generation of the BMW X3 is also manufactured at BMW South Africa\'s Rosslyn plant, a facility that recently underwent a major upgrade to prepare for the X3 production. About 76,000 units will be manufactured there annually'
                },
                {
                    id: 6,
                    name: 'BMW Z4 Roadster',
                    price: 6000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-Z4-Roadster-car-model.jpg',
                    details: 'The first generation of the BMW Z4 consists of the BMW E85 (roadster version) and BMW E86 (coupe version) sports cars. The E85/E86 generation was produced from 2002 to 2008.\n' +
                        '\n' +
                        'The E85/E86 replaced the Z3 and is the third model in the BMW Z Series. Initial models were in the roadster (E85) body style, with the coupé (E86) body style being added in 2006.\n' +
                        '\n' +
                        'As per the Z3, the E85/E86 was manufactured solely in Greer, South Carolina.\n' +
                        '\n' +
                        'The M model - the Z4 M - is powered by the S54 straight-six engine.'
                },
                {
                    id: 7,
                    name: 'BMW 7 Series',
                    price: 14000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-7-Series-Sedan-car-model.jpg',
                    details: 'The BMW 7 Series is a full-size luxury sedan produced by the German automaker BMW since 1977. It is the successor to the BMW E3 "New Six" sedan and is currently in its sixth generation.\n' +
                        '\n' +
                        'The 7 Series is BMW\'s flagship car and is only available in a sedan bodystyle (including long wheelbase and limousine models). It traditionally introduces technologies and exterior design themes before they trickle down to other models in BMW\'s lineup.[1]\n' +
                        '\n' +
                        'The first generation of the 7 Series was powered by straight-6 petrol engines, and following generations have been powered by inline-4, straight-6, V8 and V12 engines with both natural aspiration and turbocharging. Since 1995, diesel engines have been optional in the 7 Series.'
                },
                {
                    id: 8,
                    name: 'BMW X2',
                    price: 8000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-x2-car-model.jpg',
                    details: ''
                },
                {
                    id: 9,
                    name: 'BMW I8',
                    price: 6000,
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: 'The BMW X2 is a subcompact luxury crossover SUV manufactured by BMW since 2017.'
                },
                {
                    id: 10,
                    name: 'BMW X1',
                    price: 7000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X1.jpg',
                    details: 'The BMW X1 is a line of subcompact luxury crossover SUV produced by BMW since 2009.'
                },
                {
                    id: 11,
                    name: 'BMW I8',
                    price: 6000,
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: 'The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 is part of BMW\'s electrified fleet and is marketed under the BMW i sub-brand. The production version of the BMW i8 was unveiled at the 2013 Frankfurt Motor Show, and was released in Germany in June 2014.[10] Deliveries to retail customers in the U.S. began in August 2014.[11] A roadster variant was launched May 2018.[12] Production ended in June 2020.[13]\n' +
                        '\n' +
                        'The 2015 BMW i8 accelerates from 0 to 100 km/h (62 mph) in 4.4 seconds[14][15] and has an electronic limited top speed of 250 km/h (155 mph).[5] The 2015 model year i8 has a 7.1 kWh lithium-ion battery pack that delivers an all-electric range of 37 km (23 mi) under the New European Driving Cycle. Under the U.S. EPA cycle, the range in EV mode is 24 km (15 mi).[7] The battery capacity of both, BMW i8 Roadster and the i8 Coupé, was increased to 11.6 kWh in 2018, allowing the NEDC electric range to rise to 55 km (34 mi) for the coupé and to 53 km (33 mi) for the roadster.'
                },
                {
                    id: 12,
                    name: 'BMW Concept 4',
                    price: 16000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-Concept-4.jpg',
                    details: ''
                },
                {
                    id: 13,
                    name: 'BMW i Next',
                    price: 26000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-i-Next.jpg',
                    details: 'The BMW iNext is a high-end electric SUV marketed by the German car manufacturer BMW from 2021.[1]\n' +
                        '\n' +
                        'The iNext is a large family electric SUV that joins the BMW SUV range, two years after the huge X7. It is the fourth model BMW i sub-brand, after the BMW i3 produced since 2013, the 2-door sports car i8 and the iX3 SUV.[2]\n' +
                        '\n' +
                        'The iNext receives digital instrumentation composed of curved screens and an octagonal steering wheel'
                },
                {
                    id: 14,
                    name: 'BMW iX3',
                    price: 16000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-iX3.jpg',
                    details: 'The production version of the BMW iX3 was unveiled in July 2020. It has an 80 kWh battery pack with 74 kWh usable capacity, which delivers up to 460 km (290 mi) of range based on the WLTP. The iX3 is powered by a single electric motor on the rear axle that produces 210 kW (286 hp) and accelerate from 0-100 km/h (0-62 mph) in 6.8 seconds. It has an electronically limited top speed of 180 km/h (112 mph).[57]\n' +
                        '\n' +
                        'The electric powertrain is BMW\'s fifth-generation scalable electric drivetrain that is distinguished by a more compact design than that used by the existing BMW i3 with the electric motor, transmission and power electrics grouped together in a single component. It does not feature rare-earth materials in its construction and allows BMW to significantly reduce production costs over the old model.'
                },
                {
                    id: 15,
                    name: 'BMW i Vision',
                    price: 36000,
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-i-Vision-Dynamics.jpg',
                    details: 'The Vision ConnectedDrive is a two-seater sports car concept built by BMW featuring new advanced driver assistance aids. It had its world premiere at the 2011 Geneva Motor Show.[2] Unlike previously named Vision concept cars, BMW has no intention to build this vehicle, but to show off its latest design and technology developments.'
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