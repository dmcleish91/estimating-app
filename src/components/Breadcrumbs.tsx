import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

function Breadcrumbs() {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={currentLink}>
                {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index <
            location.pathname.split('/').filter((crumb) => crumb !== '').length - 1 && (
            <BreadcrumbSeparator />
          )}
        </Fragment>
      );
    });

  return (
    <Breadcrumb className='hidden md:flex'>
      <BreadcrumbList>{crumbs}</BreadcrumbList>
    </Breadcrumb>
  );
}
export default Breadcrumbs;
