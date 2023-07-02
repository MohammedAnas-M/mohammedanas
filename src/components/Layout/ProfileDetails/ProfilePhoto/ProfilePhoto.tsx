import classes from './ProfilePhoto.module.scss';
import profileImage from '../../../../images/profilePhoto.jpg';

const ProfilePhoto = (props:{}) => {
    return(
        <div className={classes['photoSquare']}>
                <div>
                    <img src={profileImage} className={classes['profilePhoto']} alt='me' />
                </div>  
            </div>
    )
};

export default ProfilePhoto;