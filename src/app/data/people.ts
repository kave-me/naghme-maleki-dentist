interface Person {
    name: string;
    email?: string;
    number?: string[];
    address?:string[];
    address_gps?:string;
    occupation?: string;
    profile_picture?: string;
    social_media?: { name: string; link: string; icon: string }[];
}

export const ownerData: Person = {
    name: '',
    email: '',
    number: ['1234', '5678'],
    social_media: [{name: 's1', link: '', icon: 'icon'}]
}
export const staffData: Person[] = [
    {
        name: 'امیر محمدزاده',
        occupation: 'جراح - دندانپزشک',
        profile_picture:'/path/to/image.png'
    },
    {
        name: 'سحر ملک‌زاده',
        occupation: 'دستیار ',
        profile_picture:'/path/to/image.png'
    },
    {
        name: 'رضا ناصری',
        occupation: 'ایمپلنت و لمینت',
        profile_picture:'/path/to/image.png'


    },
    {
        name: 'مریم محمدی',
        occupation: 'ارتودنسی',
        profile_picture:'/path/to/image.png'


    }
]

