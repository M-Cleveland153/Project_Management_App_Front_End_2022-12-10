import Card from './Card';
import classes from './Announcements.module.css'

function AnnouncementItem(props){
    return (
        <li className={classes.li}>
            <Card>
                <p className={classes.user}>{props.user}</p>
               
                <p className={classes.date}>{props.date}</p>
                
                <p className={classes.message}>{props.message}</p>
            </Card>
        </li>
    )
}

export default AnnouncementItem;