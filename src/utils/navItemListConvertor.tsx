import { NavLink } from "react-router-dom";
import { TNavItem, TRouteAndNavItemList } from "../types/types";

const navItemListConvertor = (rawList: TRouteAndNavItemList[], rootPath: string) => {

  const navItemList = rawList.reduce((acc: TNavItem[], item) => {
    if ('path' in item &&  'name' in item) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${rootPath}/${item.path}`}> {item.name} </NavLink>,
      });
    }
    if ('children' in item) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((childItem) => ({
          key: childItem.name,
          label: (
            <NavLink to={`/${rootPath}/${childItem.path}`}>
              {" "}
              {childItem.name}{" "}
            </NavLink>
          ),
        })),
      });
    }

    return acc;
    
  }, []);

  return navItemList;
};

export default navItemListConvertor;
