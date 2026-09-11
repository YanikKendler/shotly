import {ReactNode, useEffect, useRef} from "react"
import "./dashboardDialogFloater.scss"

export default function DashboardDialogFloater({
    children,
    visible
}:{
    children: ReactNode
    visible: boolean
}){
    if(visible)
        return (
            <div className={"dashboardDialogFloater floating"}>
                {children}
            </div>
        )
}