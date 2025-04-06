import { TRoute, TRouteAndNavItemList } from "../types/routeNavigationTypes";

const routeListConvertor = (rawList: TRouteAndNavItemList[]) => {

  const routeList = rawList.reduce((acc: TRoute[], item) => {

    if ("element" in item && "path" in item) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if ("children" in item) {
      item.children.forEach((childItem) => {
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
