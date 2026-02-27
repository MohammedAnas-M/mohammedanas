import classes from "./NavigationItem.module.scss";

export const NavigationItem: any = (props: { name: string, href: string, onClickHandler: any }) => {
  return (
    <li key={props.name}>
      <a className={classes["nav-item"]} href={props.href} onClick={props.onClickHandler}>
        {props.name.toUpperCase()}
      </a>
    </li>
  );
};
