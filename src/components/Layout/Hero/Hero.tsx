import classes from './Hero.module.scss';

const Hero = (props:{}) => {
    return (
        <div className={classes['heroContainer']}>
            <h2>Welcome</h2>
            <span className={classes['heroText']}>
                I'm <strong className={classes['name']}>Mohammed Anas</strong> M
            </span>
            <br />   
            <button className={classes['jobNameBtn']}>Senior Front-End Developer</button>
        </div>
    )
}

export default Hero;