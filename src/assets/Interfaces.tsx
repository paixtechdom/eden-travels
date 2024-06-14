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
    heading?: string,
    span?: string,
    desc?: string,
    img: string,
    children?: JSX.Element
}




export interface CardParentInterface {
    data?: cardObject[],
    heading: string,
    description: string
}


export interface CardInterface {
    data?: cardObject
}

export interface cardObject {
    title?: string,
    img?: string,
    desc?: string
    sub?: subFirstLayer[],
}

export interface subFirstLayer{
    title?: string,
    img?: string,
    sub?: sub[] | string[]
}

export interface sub {
    title?: string,
    img?: string,
    sub?: string[]
}









export interface FooterLinksInterface {
    header: string,
    links: string[]
}
export interface ContactInfoInterface {
    icon: JSX.Element,
    contact: string
}


export interface InputFieldInterface {
    label: string,
    type: string,
    name: string,
    className?: string
    handleChange: Function,
    value: string,
    placeholder?: string
}
