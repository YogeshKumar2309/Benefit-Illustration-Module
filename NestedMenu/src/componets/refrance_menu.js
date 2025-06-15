// import React, { useEffect, useState } from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import "./sidebar.css";

const Menu = (props) => {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;
  let company = localStorage.getItem("companyName");
  const [val, setVal] = useState(props.data);
  const [currentRoute, setCurrentRoute] = useState('');
  console.log(currentRoute)
  const [subMenuDetailBox, setSubMenuDetailBox] = useState(
    val.SubMenus && val.SubMenus.length > 0
      ? Array(val.SubMenus.length).fill(false)
      : []
  );

  const [subMenu, setSubMenu] = useState("");

  const handleSubMenu = (title) => {
    setSubMenu((prev) => (prev === title ? "" : title));
  };

  const [subSubMenuTitle, setSubSubMenuTitle] = useState("");

  const handleSubSubMenu = (title) => {
    setSubSubMenuTitle((prev) => (prev === title ? "title" : title));
  };

  const handleSubMenuDetailBox = (id) => {
    setSubMenuDetailBox((prev) =>
      prev.map((item, i) => (val.SubMenus[i].id === id ? !item : item))
    );
  };

  const isSectionActive = val.id === path;
  const isSubMenuActive = subMenu === val.Title;
  const isSubSubMenuActive = subSubMenuTitle === val.title;
  useEffect(() => {
    const routeName = location.pathname;
    setCurrentRoute(routeName);
    
  }, [location.pathname]);
  
  return (
    <li className={nav-item} key={val.id}>
      <Link
        className={`${val.ClassIcon} nav-link  nav-link-bg ${
          props.activeMenu
        } ${isSectionActive ? "active" : ""}`}
        to={val.Link}
        style={{
          paddingLeft:
            val.id === "m1email"
              ? "51px"
              : val.Title === "Reports"
              ? "54px"
              : "50px",
        }}
        onClick={() => props.onToggle(val.id)}
      >
        {val.Title}
      </Link>
      {val.SubMenus && val.SubMenus.length > 0 && (
        <ul
          className={`nav nav-treeview ${
            subMenuDetailBox ? "display-detailBox" : "hide-detailBox"
          }`}
          style={{
            display:
              company != "Admin"
                ? subMenu === ""
                  ? "block"
                  : "none"
                : subMenu === val.Title
                ? "block"
                : "none",
          }}
        >
          {val.SubMenus.map((menu) => (
            <li
              className={`nav-item submenu-link
                     ${
                       (isSubMenuActive && val.Title === "Reports") ||
                       (isSubMenuActive && val.Title === "Policies")
                         ? "active-line2 menu-open"
                         : isSubMenuActive
                         ? "active-line menu-open"
                         : currentRoute==menu.Link?'active-line3 menu-open': ''
                     }`}
                  
              key={menu.id}
              style={{
                marginLeft:
                
                  val.Title === "Reports"
                    ? "1rem"
                    : val.Title === "Policies"
                    
                    ? "2.5rem"
                    : "1.5rem",
                    
                    
              }}
            >
              <Link
                // data-widget='pushmenu'
                to={menu.Link}
                className={${menu.ClassIcon} nav-link  nav-link-bg}
                style={{
                  paddingLeft:
                    val.Title === "Policies"
                      ? "30px"
                      : val.Title === "Reports"
                      ? "56px"
                      : "44px",
                }}
                onClick={() => {
                  if (company === "Admin") {
                    handleSubMenu(menu.Title);
                    props.toggle();
                    props.setOpen(false);
                  }
                }}
              >
                {menu.Title}
              </Link>
              {menu.SubMenus && menu.SubMenus.length > 0 && (
                <ul
                  className={`nav nav-treeview ${
                    subMenuDetailBox[val.SubMenus.indexOf(menu)]
                      ? "display-detailBox"
                      : "hide-detailBox"
                      
                  }
                
                  `}

                  style={{
                    display:
                      company != "Admin"
                        ? subSubMenuTitle === ""
                          ? "block"
                          : "none"
                        : subSubMenuTitle === val.Title
                        ? "block"
                        : "none",
                        
                  }}
                >
                  {menu.SubMenus.map((subMenu) => (
                    <li className={nav-item} key={subMenu.id}>
                      <Link
                        // data-widget='pushmenu'
                        to={subMenu.Link}
                        className={`${
                          subMenu.ClassIcon
                        } nav-link  nav-link-bg ${
                          isSubSubMenuActive &&
                          subMenu.Title === subSubMenuTitle
                            ? "active"
                            : currentRoute==subMenu.Link?'active-line3 menu-open': ''
                            
                        }`}
                        style={{ marginLeft: "1rem", paddingLeft: "32px" }}
                        onClick={() => {
                          handleSubMenuDetailBox(subMenu.id);
                          // handleSubSubMenu(subMenu.Title);
                        }}
                      >
                        {subMenu.Title}
                      </Link>
                      {subMenu.subSubMenus &&
                        subMenu.subSubMenus.length > 0 && (
                          <ul
                            className={`nav nav-treeview ${
                              subMenuDetailBox[
                                subMenu.subSubMenus.indexOf(subMenu)
                              ]
                                ? "display-detailBox"
                                : "hide-detailBox"
                            }`}
                            style={{
                              display:
                                company != "Admin"
                                  ? subSubMenuTitle === ""
                                    ? "none"
                                    : "none"
                                  : subSubMenuTitle === val.Title
                                  ? "block"
                                  : "none",
                            }}
                          >
                            {subMenu.subSubMenus.map((subSubMenu) => (
                              <li className={nav-item} key={subSubMenu.id}>
                                <Link
                                  // data-widget='pushmenu'
                                  to={subSubMenu.Link}
                                  className={`${
                                    subSubMenu.ClassIcon
                                  } nav-link  nav-link-bg
                                 ${
                                   isSubSubMenuActive &&
                                   subSubMenu.Title === subSubMenuTitle
                                     ? "active"
                                     : currentRoute==subSubMenu.Link?'active-line3 menu-open': ''
                                 }
                                `}
                                  style={{
                                    marginLeft: "1rem",
                                    paddingLeft: "32px",
                                  }}
                                  onClick={() => {
                                    if (company === "Admin") {
                                      handleSubMenuDetailBox(subSubMenu.id);
                                      handleSubSubMenu(subSubMenu.Title);
                                      props.toggle();
                                      props.setOpen(false);
                                    }
                                  }}
                                >
                                  {subSubMenu.Title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Menu;