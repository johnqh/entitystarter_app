import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MembersManagementPage } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useAuthStatus } from '@sudobility/auth-components';
import { useCurrentEntity } from '@sudobility/entity_client';
import { Section } from '@sudobility/components';
import { variants } from '@sudobility/design';
import { SEOHead } from '@sudobility/seo_lib';
import { analyticsService } from '../config/analytics';

function MembersPage() {
  const { t } = useTranslation('common');
  const entityClient = useEntityClient();
  const { currentEntity, isLoading } = useCurrentEntity();
  const { user } = useAuthStatus();

  useEffect(() => {
    analyticsService.trackPageView('/members', 'Members');
  }, []);

  if (isLoading || !currentEntity) {
    return (
      <Section spacing="xl">
        <SEOHead title={t('nav.home')} description="" noIndex />
        <div className="flex items-center justify-center">
          <div className={variants.loading.spinner.default()} />
        </div>
      </Section>
    );
  }

  if (!user?.uid) {
    return null;
  }

  return (
    <>
      <SEOHead title={t('nav.home')} description="" noIndex />
      <MembersManagementPage
        client={entityClient}
        entity={currentEntity}
        currentUserId={user.uid}
      />
    </>
  );
}

export default MembersPage;
