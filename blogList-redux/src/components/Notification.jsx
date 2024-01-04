import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  if (notification.message) {
    return (
      <div
        className={
          notification.type === "success" ? "success" : "error"
        }
      >
        <p>{notification.message}</p>
      </div>
    );
  }

  return null;
};

export default Notification;
