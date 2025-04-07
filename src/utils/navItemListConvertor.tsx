import { NavLink } from "react-router-dom";
import { TNavItem, TRouteAndNavItemList } from "../types";

const navItemListConvertor = (rawList: TRouteAndNavItemList[], role: string) => {

  const navItemList = rawList.reduce((acc: TNavItem[], item) => {
    if ('path' in item &&  'name' in item) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
      });
    }
    if ('children' in item) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((childItem) => ({
          key: childItem.name,
          label: (
            <NavLink to={`/${role}/${childItem.path}`}>
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
