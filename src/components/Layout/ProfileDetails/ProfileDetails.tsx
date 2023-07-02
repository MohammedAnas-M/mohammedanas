import classes from './ProfileDetails.module.scss';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import ProfileIntro from './ProfileIntro/ProfileIntro';
import SkillsHeading from './Skills/SkillsHeading/SkillsHeading';
import SkillsDetails from './Skills/SkillsDetails/SkillsDetails';
const ProfileDetails = (props:{}) => {
    return (
        <>
            <div className={classes['profileDetailsContainer']}>
              <ProfilePhoto />
              <ProfileIntro />
            </div>
            <div className={classes['skillsContainer']}>
              <SkillsHeading />
              <SkillsDetails />
            </div>
        </>
        
    )
};

export default ProfileDetails;