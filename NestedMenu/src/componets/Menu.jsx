import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = ({ val }) => {
  const [openMenus, setOpneMenus] = useState({});

  const toggleMenu = (id) => {
    setOpneMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <ul>
        {val?.map((item, index) => (
          <li key={index}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                toggleMenu(item.id);
              }}
              to={item.Link}
              className={item.ClassIcon}
            >
              {item.Title}
            </Link>
            {/* first-lable */}
            {item.SubMenus && item.SubMenus.length > 0 && (
              <ul
                className={`${openMenus[item.id] ? styles.show : styles.hide}`}
              >
                {item.SubMenus?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMenu(subItem.id);
                      }}
                      to={subItem.Link}
                      className={subItem.ClassIcon}
                    >
                      {subItem.Title}
                    </Link>
                    {/* second label */}
                    {subItem.SubMenus && subItem.SubMenus.length > 0 && (
                      <ul
                        className={
                          openMenus[subItem.id] ? styles.show : styles.hide
                        }
                      >
                        {subItem.SubMenus?.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              to={subSubItem.Link}
                              className={subSubItem.ClassIcon}
                              onClick={(e) => {
                                e.preventDefault();
                                toggleMenu(subSubItem.id);
                              }}
                            >
                              {subSubItem.Title}
                            </Link>
                            {/* third label */}
                            {subSubItem.subSubMenus &&
                              subSubItem.subSubMenus.length > 0 && (
                                <ul
                                  className={
                                    openMenus[subSubItem.id]
                                      ? styles.show
                                      : styles.hide
                                  }
                                >
                                  {subSubItem.subSubMenus?.map(
                                    (subSubSubItem, subSubSubIndex) => (
                                      <li key={subSubSubIndex}>
                                        <Link
                                          to={subSubSubItem.Link}
                                          className={subSubSubItem.ClassIcon}
                                        >
                                          {subSubSubItem.Title}
                                        </Link>
                                      </li>
                                    )
                                  )}
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
        ))}
      </ul>
    </>
  );
};

export default Menu;
