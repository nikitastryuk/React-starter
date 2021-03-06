import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as styledComponents from 'styled-components';
import { THEMES, ThemeProvider } from 'app/AppProviders/ThemeProvider/ThemeProvider';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

const mockedSetTheme = jest.fn();

describe('<ThemeSwitcher />', () => {
  beforeAll(() => {
    jest.spyOn(styledComponents, 'useTheme').mockImplementation(() => ({
      setTheme: mockedSetTheme,
    }));
  });
  it('should change theme to light', async () => {
    render(<ThemeSwitcher />, { wrapper: ThemeProvider });
    const button = screen.getByTestId('light-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.LIGHT);
  });
  it('should change theme to dark', async () => {
    render(<ThemeSwitcher />, { wrapper: ThemeProvider });
    const button = screen.getByTestId('dark-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.DARK);
  });
});
