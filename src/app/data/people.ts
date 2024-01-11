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
        profile_picture: '/path/to/image.png'
    },
    {
        firstname: 'سحر', lastname: 'ملک‌زاده',
        occupation: 'دستیار ',
        profile_picture: '/path/to/image.png'
    },
    {
        firstname: 'رضا', lastname: 'ناصری',
        occupation: 'ایمپلنت و لمینت',
        profile_picture: '/path/to/image.png'


    },
    {
        firstname: 'مریم', lastname: 'محمدی',
        occupation: 'ارتودنسی',
        profile_picture: '/path/to/image.png'


    }
]

interface Testimony {
    author: Person;
    rate: number;
    comment: string;
}

export const testimonials: Testimony[] = [
    {
        author: {
            firstname: '',
            lastname: '',
        },
        rate: 5,
        comment: 'comment'
    }
]
