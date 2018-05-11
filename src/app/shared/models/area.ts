import { AreaMap } from "@app/shared/models/Area-map";

export interface Area {
    name: string;
    achieved: number;
    currentTarget: number;
    map: AreaMap;
}
