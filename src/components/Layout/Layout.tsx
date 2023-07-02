import classes from './Layout.module.scss';
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import AcademicsAndExperience from './ProfileDetails/AcademicsAndExperience/AcademicsAndExperience';

export const Layout = (props:{}) => {
    return (
        <>
          <div className={classes['container']}>
            <Navigation />
            <Hero />
          </div>
          <ProfileDetails />
          <AcademicsAndExperience />
        </>
    )
}