import {SkillItemType} from "./SkillItemType";
import {ReactNode} from "react";

export interface SkillCategoryType {
    label:string,
    items: Array<SkillItemType>,
    icon: ReactNode
}