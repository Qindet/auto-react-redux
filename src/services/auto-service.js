export default class AutoService {


    getPreviewBmw = () => {
        return new Promise((resolve) => {
            const item = {
                    img: 'https://1gai.ru/uploads/posts/2014-09/1409578586_bmw-m4-cabrio-57.jpg',
                    text: 'BMW AG  — немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании до 2015 года был Норберт Райтхофер, с мая 2015 года — Харальд Крюгер, с 18 июля 2019 года — Оливер Ципсе. Главный дизайнер — Йозеф Кабан. Девиз компании — «Freude am Fahren», с нем. — «С удовольствием за рулём». ' +
                        'Для англоязычных стран был придуман также девиз «The Ultimate Driving Machine» (с англ. — «Идеальная машина для вождения»).'
            }
            return setTimeout(() => resolve(item), 1000)
        })
    }
}