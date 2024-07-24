export const enum ScreenBrkPt {
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
}

export const getIsMobile = () => window.innerWidth <= ScreenBrkPt.SM;

export const getIsTablet = () => window.innerWidth <= ScreenBrkPt.MD && window.innerWidth > ScreenBrkPt.SM;

export const getIsDesktop = () => window.innerWidth > ScreenBrkPt.MD;

export const getIsLargeDesktop = () => window.innerWidth > ScreenBrkPt.LG;