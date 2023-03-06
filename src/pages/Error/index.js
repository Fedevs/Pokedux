import { Link } from 'react-router-dom';
import errorImage from 'statics/angryPikachu.webp';
import { namedPaths } from 'router/namedPaths';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={errorImage} alt="error" width={200} height={200} />
      <p>
        <h1>
          <b>Oops! It seems you are lost</b>
        </h1>
      </p>
      <Link to={namedPaths.home} class="go-home">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
