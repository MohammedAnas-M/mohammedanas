import classes from './NavigationItem.module.scss';

export const NavigationItem:any = (props:{name:string}) => {
    return (
        <a className={classes['nav-item']} href="">
            <li key={props.name}>
                {props.name.toUpperCase()}
            </li>
        </a>
        
    )
}