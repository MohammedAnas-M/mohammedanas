import classes from './ProfileIntro.module.scss';
import {PROFILE_NAME, JOB_NAME, INTRO_PARA, FROM_PLACE, LIVING_PLACE, AGE, GENDER} from '../../../../Utils/Constants/Constants'

const ProfileIntro = (props:{}) => {
    return (
        <div className={classes['intro']}>
                <div className={classes['name']}>{PROFILE_NAME}</div>
                <div className={classes['job_desc']}>{JOB_NAME}</div>
                <p className={classes['introPara']}>{INTRO_PARA}</p>
                <ul className={classes['list']}>
                    <li><strong>From: </strong>{FROM_PLACE}</li>
                    <li><strong>Lives in: </strong>{LIVING_PLACE}</li>   
                    <li><strong>Age: </strong>{AGE}</li>   
                    <li><strong>Gender: </strong>{GENDER}</li>   
                </ul>
                <button className={classes['downloadCv']}>Download CV</button>
            </div>
    )
};

export default ProfileIntro;