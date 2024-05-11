import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-2xl'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='font-bold mt-6'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
