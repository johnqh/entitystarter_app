import { MembersManagementPage } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useAuthStatus } from '@sudobility/auth-components';
import { useCurrentEntity } from '@sudobility/entity_client';
import ScreenContainer from '../components/layout/ScreenContainer';

function MembersPage() {
  const entityClient = useEntityClient();
  const { currentEntity, isLoading } = useCurrentEntity();
  const { user } = useAuthStatus();

  if (isLoading || !currentEntity) {
    return (
      <ScreenContainer>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      </ScreenContainer>
    );
  }

  if (!user?.uid) {
    return null;
  }

  return (
    <ScreenContainer>
      <MembersManagementPage
        client={entityClient}
        entity={currentEntity}
        currentUserId={user.uid}
      />
    </ScreenContainer>
  );
}

export default MembersPage;
