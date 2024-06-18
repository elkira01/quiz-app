'use client'

import {IconCircle} from "@/app/shared/icons/IconCircle";

type AppIconProps = {
    icon?: any
    img?: any
    shape?: 'circle'|'squared'
    onClick: any
    theme?: any
}

export const AppIcon = ({icon, shape, onClick, img, theme}: AppIconProps) => {

    return<>
        {shape !== "circle" ?
            <span onClick={onClick}>
                {icon}
            </span>
            :
            <IconCircle onClick={onClick}>
                {img ?? icon}
            </IconCircle>
        }
    </>
}