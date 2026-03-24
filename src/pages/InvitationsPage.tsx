import { InvitationsPage as InvitationsPageComponent } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../components/layout/ScreenContainer';

function InvitationsPage() {
  const entityClient = useEntityClient();
  const queryClient = useQueryClient();

  const handleInvitationAccepted = () => {
    queryClient.invalidateQueries({ queryKey: ['entities'] });
  };

  return (
    <ScreenContainer>
      <InvitationsPageComponent
        client={entityClient}
        onInvitationAccepted={handleInvitationAccepted}
      />
    </ScreenContainer>
  );
}

export default InvitationsPage;
