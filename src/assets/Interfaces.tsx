export interface Services {
    img: string,
    title: string,
    desc: string
}


export interface nav  {
    title: string,
    link: string,
    sublinks?: Object[]
}


export interface button {
    text: string,
    navigateTo?: string,
    className?: string,
    icon?: JSX.Element,
    scrollTo?: string
}

export interface imageextras {
    iconBg: string,
    icon: JSX.Element, 
    topText:JSX.Element, 
    bottomText: JSX.Element
}


export interface ImageTextInterface {
    heading: string,
    span: string,
    desc: string,
    img: string,
    children: JSX.Element
}