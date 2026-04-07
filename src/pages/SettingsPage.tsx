import { GlobalSettingsPage } from '@sudobility/building_blocks';
import { useTheme } from '@sudobility/components';
import { useSetPageConfig } from '../hooks/usePageConfig';

/** User settings page for theme and font size preferences. */
export default function SettingsPage() {
  const { theme, fontSize, setTheme, setFontSize } = useTheme();

  useSetPageConfig({ scrollable: false, contentPadding: 'sm', maxWidth: '7xl' });

  return (
    <GlobalSettingsPage
      theme={theme}
      fontSize={fontSize}
      onThemeChange={setTheme}
      onFontSizeChange={setFontSize}
    />
  );
}
