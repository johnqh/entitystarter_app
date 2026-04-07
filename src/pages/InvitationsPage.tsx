import { InvitationsPage as InvitationsPageComponent } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useQueryClient } from '@tanstack/react-query';

function InvitationsPage() {
  const entityClient = useEntityClient();
  const queryClient = useQueryClient();

  const handleInvitationAccepted = () => {
    queryClient.invalidateQueries({ queryKey: ['entities'] });
  };

  return (
    <InvitationsPageComponent
      client={entityClient}
      onInvitationAccepted={handleInvitationAccepted}
    />
  );
}

export default InvitationsPage;
