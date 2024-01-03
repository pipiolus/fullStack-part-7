import { Alert } from "react-bootstrap";

const Notification = ({ notification }) => {
  return (
    <div>
      {notification && (
        <Alert variant="success">{notification}</Alert>
      )}
    </div>
  );
};

export default Notification;
