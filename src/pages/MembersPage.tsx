import { MembersManagementPage } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useAuthStatus } from '@sudobility/auth-components';
import { useCurrentEntity } from '@sudobility/entity_client';
import { Section } from '@sudobility/components';

function MembersPage() {
  const entityClient = useEntityClient();
  const { currentEntity, isLoading } = useCurrentEntity();
  const { user } = useAuthStatus();

  if (isLoading || !currentEntity) {
    return (
      <Section spacing="xl">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      </Section>
    );
  }

  if (!user?.uid) {
    return null;
  }

  return (
    <MembersManagementPage client={entityClient} entity={currentEntity} currentUserId={user.uid} />
  );
}

export default MembersPage;
