/*
|--------------------------------------------------------------------------
| BRIQONA OS - Authentication Guard
|--------------------------------------------------------------------------
|
| This component will protect authenticated routes.
| Backend authentication will be integrated later.
|
*/

export default function AuthGuard({ children }) {
  // TODO:
  // Check authentication token
  // Check session
  // Validate tenant
  // Redirect if unauthorized

  return children;
}
