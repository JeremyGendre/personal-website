import {ProjectTagType} from "./ProjectTagType";

export interface ProjectItemType {
    path: string,
    href: string,
    tags: Array<ProjectTagType>
    title: string
}