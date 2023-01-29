import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      error<p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
