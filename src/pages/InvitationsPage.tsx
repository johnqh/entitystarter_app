import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { InvitationsPage as InvitationsPageComponent } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useQueryClient } from '@tanstack/react-query';
import { SEOHead } from '@sudobility/seo_lib';
import { analyticsService } from '../config/analytics';

function InvitationsPage() {
  const { t } = useTranslation('common');
  const entityClient = useEntityClient();
  const queryClient = useQueryClient();

  useEffect(() => {
    analyticsService.trackPageView('/invitations', 'Invitations');
  }, []);

  const handleInvitationAccepted = () => {
    analyticsService.trackEvent('invitation_accepted');
    queryClient.invalidateQueries({ queryKey: ['entities'] });
  };

  return (
    <>
      <SEOHead title={t('nav.home')} description="" noIndex />
      <InvitationsPageComponent
        client={entityClient}
        onInvitationAccepted={handleInvitationAccepted}
      />
    </>
  );
}

export default InvitationsPage;
