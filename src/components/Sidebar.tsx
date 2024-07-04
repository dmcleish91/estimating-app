import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Package2, Home, Package, Users2, LineChart, Settings } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='flex min-h-screen flex-col bg-muted/40'>
      <TooltipProvider>
        <aside className='hidden w-14 flex-col h-full border-r bg-background sm:flex'>
          <nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
            <Link
              to='login'
              className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'>
              <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='/'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <Home className='h-5 w-5' />
                  <span className='sr-only'>Dashboard</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='create/client'
                  className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <Users2 className='h-5 w-5' />
                  <span className='sr-only'>Clients</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Clients</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='create/proposal'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <Package className='h-5 w-5' />
                  <span className='sr-only'>Proposals</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Proposals</TooltipContent>
            </Tooltip>
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <Users2 className='h-5 w-5' />
                  <span className='sr-only'>Customers</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Customers</TooltipContent>
            </Tooltip> */}
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <LineChart className='h-5 w-5' />
                  <span className='sr-only'>Analytics</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Analytics</TooltipContent>
            </Tooltip>
          </nav>
          <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-4'>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink
                  to='settings'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
                  <Settings className='h-5 w-5' />
                  <span className='sr-only'>Settings</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right'>Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
      </TooltipProvider>
    </div>
  );
}

export default Sidebar;
