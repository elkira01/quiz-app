export const enum BreakPoint {
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
}

export const getIsMobile = () => window.innerWidth <= BreakPoint.SM;

export const getIsTablet = () => window.innerWidth <= BreakPoint.MD && window.innerWidth > BreakPoint.SM;

export const getIsDesktop = () => window.innerWidth > BreakPoint.MD && window.innerWidth <= BreakPoint.LG;

export const getIsLargerScreen = () => window.innerWidth > BreakPoint.LG;
