import { GlobalSettingsPage } from '@sudobility/building_blocks';
import { SEO } from '@sudobility/seo_lib';
import { useTheme } from '@sudobility/components';
import { useSetPageConfig } from '../hooks/usePageConfig';
import { seoConfig } from '../config/seo';

/** User settings page for theme and font size preferences. */
export default function SettingsPage() {
  const { theme, fontSize, setTheme, setFontSize } = useTheme();

  useSetPageConfig({ scrollable: false, contentPadding: 'sm', maxWidth: '7xl' });

  return (
    <>
      <SEO config={seoConfig} title="Settings" noIndex />
      <GlobalSettingsPage
        theme={theme}
        fontSize={fontSize}
        onThemeChange={setTheme}
        onFontSizeChange={setFontSize}
      />
    </>
  );
}
