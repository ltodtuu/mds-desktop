import { Route, Routes } from '@angular/router';
import { HomeLayoutComponent } from '../components/home-layout/home-layout.component';
import { ManageLayoutComponent } from '../../features/management/manage-layout/manage-layout.component';
import { UserManagementView } from '../../features/management/user-management-view/user-management-view.component';
import { MailboxLayoutComponent } from '../../features/mailbox/mailbox-layout/mailbox-layout.component';
import { LandingLayoutComponent } from '../components/landing-layout/landing-layout.component';
import { SetServerURLView } from '../../features/auth/set-server-url-view/set-server-url-view.component';
import { LoginView } from '../../features/auth/login-view/login-view.component';
import { clearRoutesFor } from './testutil';

describe('clearRoutesFor', () => {
  it('should clear correctly', () => {
    const routes: Routes = [
      {
        path: '',
        component: HomeLayoutComponent,
        children: [
          {
            path: 'manage',
            component: ManageLayoutComponent,
            children: [
              {
                path: 'users',
                component: UserManagementView,
                children: [
                  {
                    path: 'wales',
                    component: UserManagementView,
                  },
                ],
              },
            ],
          },
          {
            path: 'mailbox',
            component: MailboxLayoutComponent,
          },
        ],
      },
      {
        path: '',
        component: LandingLayoutComponent,
        children: [
          {
            path: 'set-server-url',
            component: SetServerURLView,
          },
          {
            path: 'login',
            component: LoginView,
          },
        ],
      },
    ];
    const expectCleared: Route[] = [
      {
        path: '',
        component: undefined,
        children: [
          {
            path: 'manage',
            component: undefined,
            children: [
              {
                path: 'users',
                component: undefined,
                children: [
                  {
                    path: 'wales',
                    component: UserManagementView,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            path: 'mailbox',
            component: MailboxLayoutComponent,
            children: [],
          },
        ],
      },
      {
        path: '',
        component: undefined,
        children: [
          {
            path: 'set-server-url',
            component: SetServerURLView,
            children: [],
          },
          {
            path: 'login',
            component: LoginView,
            children: [],
          },
        ],
      },
    ];
    const got = clearRoutesFor(routes, '/manage/users');
    expect(got).toEqual(expectCleared);
  });
});
