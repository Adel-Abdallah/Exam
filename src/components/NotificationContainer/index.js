import "./index.css";
import { RiNotification2Line } from "react-icons/ri";

function App(props) {
  console.log(props);
  return (
    <div className='container'>
      <div className='notification-card-wrapper'>
        {props.notifications.map(notification => (
          <div className='notification-container'>
            <div className='icons'>
              <RiNotification2Line />
            </div>
            <div className='noti'>
              <div className='not-title'>
                <span>{notification.title}</span>
              </div>
              <div className='not-descrcription'>
                <span>{notification.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
