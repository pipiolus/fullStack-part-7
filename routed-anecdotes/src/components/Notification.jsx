const Notification = ({ notification }) => {
  if (notification === "") return null;

  return (
    <div>
      <h4>{notification}</h4>
    </div>
  );
};

export default Notification;
