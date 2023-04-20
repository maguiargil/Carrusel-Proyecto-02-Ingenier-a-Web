interface CarouselDataProps {
    id_index: number,
    img: string;
    price: string;
    discount: string;
    message: string;
    value: boolean;
}

const CarouselData: CarouselDataProps[] = [
    {
        id_index: 0,
        img: './img/offer-img/silla.svg',
        price: '210.900',
        discount: '32',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 1,
        img: './img/offer-img/soporte-micro.svg',
        price: '74.990',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 2,
        img: './img/offer-img/afeitadora.svg',
        price: '134.950',
        discount: '50',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 3,
        img: './img/offer-img/closet.svg',
        price: '149.900',
        discount: '30',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 4,
        img: './img/offer-img/cortina.svg',
        price: '69.990',
        discount: '17',
        message: 'Envío gratis',
        value: false
    },
    {
        id_index: 5,
        img: './img/offer-img/producto4.svg',
        price: '24.900',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 6,
        img: './img/offer-img/producto5.svg',
        price: '47.990',
        discount: '15',
        message: 'Envío gratis',
        value: false
    },
    {
        id_index: 7,
        img: './img/offer-img/producto6.svg',
        price: '55.990',
        discount: '20',
        message: 'Envío gratis',
        value: false
    },
    {
        id_index: 8,
        img: './img/offer-img/producto7.svg',
        price: '90.990',
        discount: '25',
        message: 'Envío gratis',
        value: true
    },
    {
        id_index: 9,
        img: './img/offer-img/producto8.svg',
        price: '75.990',
        discount: '15',
        message: 'Envío gratis',
        value: true
    }
]

export { CarouselData }