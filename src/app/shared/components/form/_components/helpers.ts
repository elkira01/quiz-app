import {getIsDesktop, getIsMobile, getIsTablet} from "@/app/shared/helpers/screenHelpers";

const resolveColumnSize = (props: any, colSize?: any, defaultValue: any = 100) : any => {
    const precedence =  {
        xl: props?.xl ?? props?.lg ?? props?.md ?? props?.sm ?? props?.xs ?? defaultValue,
        lg: props?.lg ?? props?.md ?? props?.sm ?? props?.xs ?? defaultValue,
        md: props?.md ?? props?.sm ?? props?.xs ?? defaultValue,
        sm: props?.sm ?? props?.xs ?? defaultValue,
        xs: props?.xs ?? defaultValue
    }

    if (getIsMobile()){
        return precedence['xs']
    }
    else if(getIsTablet()){
        return precedence['sm']
    }
    else if (getIsDesktop()){
        return precedence['md']
    }
    else {
        return precedence['lg']
    }

    // return Object.entries(precedence).find(([key] : any) => key === colSize)?.at(1)
}

export {
    resolveColumnSize
}