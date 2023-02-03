import { useRouteError } from 'react-router-dom';
import errorImage from 'statics/temporaryError.png';
import './ErrorPage.css';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <img src={errorImage} alt="error" />
      <p>
        <b>{error.statusText || error.message}</b>
      </p>
    </div>
  );
};

export default ErrorPage;
