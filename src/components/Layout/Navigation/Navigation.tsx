import classes from './Navigation.module.scss';
import {NavigationItem} from './NavigationItem/NavigationItem';
import {NAV_ITEMS, BRAND} from '../../../Utils/Constants/Constants';
import { useRef } from 'react';

const Navigation = (props:{}) => {
const togglerMenu = useRef<HTMLDivElement>(null);

const togglerMenuHandler = () => {
  if(togglerMenu.current) {
    const className = classes["togglerHide"];
    togglerMenu.current.classList.toggle(className);
  }
};

    return (
      <>
          <div className={classes['navContainer']}>
            <span className={classes['brand']}>{BRAND.toUpperCase()}</span>
            <nav>
              <ul className={classes['navigation']}>
                  {NAV_ITEMS.map(item => <NavigationItem key={item.label} href={`#${item.href}`} name={item.label} />)}
              </ul>
            </nav>
            <span onClick={togglerMenuHandler} className={classes['toggler']}>
              <div className={classes['togglerLine']}></div>
              <div className={classes['togglerLine']}></div>
              <div className={classes['togglerLine']}></div>
            </span>
        </div>
        <div className={`${classes['togglerMenu']} ${classes['togglerHide']}`} ref={togglerMenu}>
          <ul className={classes['togglerMenuList']}>
          {NAV_ITEMS.map(item => <NavigationItem onClickHandler={togglerMenuHandler} key={item.label} href={`#${item.href}`} name={item.label} />)}
          </ul>
        </div>
      </>
    )
}

export default Navigation;