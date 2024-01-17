import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Person {
    firstname: string;
    lastname: string;
    email?: string;
    number?: string[];
    address?: string[];
    address_gps?: string;
    occupation?: string;
    profile_picture?: string;
    social_media?: { name: string; link: string; icon: string }[];
}

export const ownerData: Person = {
    firstname: 'نغمه', lastname: 'مالکی',
    email: '',
    number: ['1234', '5678'],
    social_media: [{name: 's1', link: '', icon: 'icon'}]
}
export const staffData: Person[] = [
    {
        firstname: 'امیر', lastname: 'محمدزاده',
        occupation: 'جراح - دندانپزشک',
        profile_picture: '/image/staffimg/1.png'
    },
    {
        firstname: 'سحر', lastname: 'ملک‌زاده',
        occupation: 'دستیار ',
        profile_picture: '/image/staffimg/2.png'
    },
    {
        firstname: 'رضا', lastname: 'ناصری',
        occupation: 'ایمپلنت و لمینت',
        profile_picture: '/image/staffimg/4.png'


    },
    {
        firstname: 'مریم', lastname: 'محمدی',
        occupation: 'ارتودنسی',
        profile_picture: '/image/staffimg/5.png'


    }
]

interface Testimony {
    author: Person;
    rate: number;
    comment: string;
    profile_picture?:string,
}


export const comments:Testimony[] = [
    {
        author: {
            firstname:'امین',
            lastname:'امینی',
            profile_picture: '/image/clientimg/23.png'
        },
        rate:4,
        comment: 'محیط عالی و پرسنل بسیار خوش برخوردی دارن، هر کسی که نیاز به مراقبت دندان داره پیشنهاد میکنم.',
       
    },
    {
        author: {
            firstname:'هستی',
            lastname:'امینی',
            profile_picture: '/image/clientimg/22.png'
        },
        rate:3,
        comment: 'خیلی راضی هستم، ایشون بسیار حرفه ای و مهربان هستن... خیلی ممنونم دکتر مالکی',
        
    },
    {
        
        author: {
            firstname:'آرین',
            lastname:'امینی',
            profile_picture: '/image/clientimg/24.png'
        },
        rate:5,
        comment: 'با دندونای جدیدم خیلی بیشتر لبخند میزنم.',
        

    },
    {
        
        author: {
            firstname:'امین',
            lastname:'امینی',
            profile_picture: '/image/staffimg/1.png'
        },
        rate:5,
        comment: 'محیط عالی و پرسنل بسیار خوش برخوردی دارن، هر کسی که نیاز به مراقبت دندان داره پیشنهاد میکنم.',
        

    }
]