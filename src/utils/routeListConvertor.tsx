import { TRoute, TRouteAndNavItemList } from "../types/types";

const routeListConvertor = (rawList: TRouteAndNavItemList[]) => {

    const routeList = rawList.reduce((acc: TRoute[], item) => {
        if (item?.element && item?.path) {
            acc.push({
                path: item?.path,
                element: item?.element,
            });
        }
        if (item?.children) {
            item?.children.forEach((childItem) => {
                acc.push({
                    path: childItem.path,
                    element: childItem.element,
                });
            });
        }

        return acc;
    }, []);

    return routeList;
};

export default routeListConvertor;