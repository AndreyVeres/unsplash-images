import { AppTheme } from './providers/theme/app-theme';
import { AppRouter } from './providers/router/app-router';
import { AppQuery } from './providers/query/app-query';

export const App = () => {
  return (
    <AppTheme>
      <AppQuery>
        <AppRouter />
      </AppQuery>
    </AppTheme>
  );
};
