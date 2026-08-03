/*
|--------------------------------------------------------------------------
| BRIQONA OS - Role Guard
|--------------------------------------------------------------------------
|
| This component will protect routes based on user roles.
| Permission logic will be integrated after backend development.
|
*/

export default function RoleGuard({
  children,
  allowedRoles = [],
}) {
  // TODO:
  // Get current user role
  // Compare with allowedRoles
  // Redirect if access is denied

  return children;
}
