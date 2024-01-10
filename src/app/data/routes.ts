import {Metadata} from 'next';

interface RouteData {
    name: string;
    name_fa: string;
    path: string;
    meta: Metadata;
}

export const routesData: RouteData[] = [
    {
        name: 'home',
        name_fa: 'خانه',
        path: '/',
        meta: {
            title: 'دکتر نغمه مالکی',
            description: 'خدمات تخصصی دندانپزکشی دکتر نغمه مالکی',
        }
    },
    {
        name: 'about me',
        name_fa: 'درباره‌من',
        path: 'about_me',
        meta: {
            title: 'دکتر نغمه مالکی',
            description: 'خدمات تخصصی دندانپزکشی دکتر نغمه مالکی',
        }
    },
    {
        name: 'contact me',
        name_fa: 'تماس با من',
        path: 'contact_me',
        meta: {
            title: 'دکتر نغمه مالکی',
            description: 'خدمات تخصصی دندانپزکشی دکتر نغمه مالکی',
        }
    }

]
