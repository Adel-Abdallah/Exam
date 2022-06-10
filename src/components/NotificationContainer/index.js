import "./index.css";
import { RiNotification2Line } from "react-icons/ri";

function App(props) {
  console.log("notificationProps", props);
  return (
    <div className='container'>
      <div className='notification-card-wrapper'>
        {props.notifications.map(notification => (
          <div className='notification-container'>
            <div className='icons'>
              <RiNotification2Line />
            </div>

            <div className='notification-title'>
              <span className='title'>{notification.title}</span>
              <span className='description'>{notification.description}</span>
            </div>
            <div className='x'>X</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
