import { InvitationsPage as InvitationsPageComponent } from '@sudobility/entity_pages';
import { SEO } from '@sudobility/seo_lib';
import { useEntityClient } from '../config/entityClient';
import { useQueryClient } from '@tanstack/react-query';
import { seoConfig } from '../config/seo';

function InvitationsPage() {
  const entityClient = useEntityClient();
  const queryClient = useQueryClient();

  const handleInvitationAccepted = () => {
    queryClient.invalidateQueries({ queryKey: ['entities'] });
  };

  return (
    <>
      <SEO config={seoConfig} title="Invitations" noIndex />
      <InvitationsPageComponent
        client={entityClient}
        onInvitationAccepted={handleInvitationAccepted}
      />
    </>
  );
}

export default InvitationsPage;
