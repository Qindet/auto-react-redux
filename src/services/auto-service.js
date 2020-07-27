export default class AutoService {


    getPreviewBmw = () => {
        return new Promise((resolve) => {
            const item = {
                    img: 'https://1gai.ru/uploads/posts/2014-09/1409578586_bmw-m4-cabrio-57.jpg',
                    text: 'BMW AG  — немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании до 2015 года был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, с 18 июля 2019 года — Оливер Ципсе. Главный дизайнер — Йозеф Кабан. Девиз компании — «Freude am Fahren», с нем. — «С удовольствием за рулём». ' +
                        'Для англоязычных стран был придуман также девиз «The Ultimate Driving Machine» (с англ. — «Идеальная машина для вождения»).'
            }
            return setTimeout(() => resolve(item), 500)
        })
    }

    getBmwItems = () => {
        return new Promise((resolve => {
            const items = [
                {
                    id: 1,
                    name: 'BMW X5',
                    price: '10000$',
                    img: 'https://avatars.mds.yandex.net/get-pdb/985144/28cdebf6-d2fe-4975-b476-f5aa9250cc41/s1200?webp=false',
                    details: ''
                },
                {
                    id: 2,
                    name: 'BMW I8',
                    price: '6000$',
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: ''
                },
                {
                    id: 3,
                    name: 'BMW X6',
                    price: '11000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X6.jpg',
                    details: ''
                },
                {
                    id: 4,
                    name: 'BMW X3',
                    price: '7000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X3-car-model.jpg',
                    details: ''
                },
                {
                    id: 5,
                    name: 'BMW 6 Series',
                    price: '12000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-6-Series.jpg',
                    details: ''
                },
                {
                    id: 6,
                    name: 'BMW Z4 Roadster',
                    price: '6000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-Z4-Roadster-car-model.jpg',
                    details: ''
                },
                {
                    id: 7,
                    name: 'BMW 7 Series',
                    price: '14000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-7-Series-Sedan-car-model.jpg',
                    details: ''
                },
                {
                    id: 8,
                    name: 'BMW X2',
                    price: '8000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-x2-car-model.jpg',
                    details: ''
                },
                {
                    id: 9,
                    name: 'BMW I8',
                    price: '6000$',
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: ''
                },
                {
                    id: 10,
                    name: 'BMW X1',
                    price: '7000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2012/04/BMW-X1.jpg',
                    details: ''
                },
                {
                    id: 11,
                    name: 'BMW I8',
                    price: '6000$',
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: ''
                },
                {
                    id: 12,
                    name: 'BMW Concept 4',
                    price: '16000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-Concept-4.jpg',
                    details: ''
                },
                {
                    id: 13,
                    name: 'BMW I8',
                    price: '6000$',
                    img: 'https://s1.cdn.autoevolution.com/images/news/gallery/bmw-i8-roadster-first-edition-begins-rolling-out-of-leipzig_118.jpg',
                    details: ''
                },
                {
                    id: 14,
                    name: 'BMW i Next',
                    price: '26000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-i-Next.jpg',
                    details: ''
                },
                {
                    id: 15,
                    name: 'BMW iX3',
                    price: '16000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-iX3.jpg',
                    details: ''
                },
                {
                    id: 16,
                    name: 'BMW i Vision Dynamics',
                    price: '36000$',
                    img: 'https://www.carmodelslist.com/wp-content/uploads/2019/08/BMW-i-Vision-Dynamics.jpg',
                    details: ''
                }
            ]
            return setTimeout(()=> resolve(items), 1000)
        }))
    }
    getItem =  (id) => {
        return new Promise(async (resolve)  => {
            const items = await this.getBmwItems()
            const res = items.find((item) => item.id === id)
            return setTimeout(() => resolve(res), 500)
        })
    }
}