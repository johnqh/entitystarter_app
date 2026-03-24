import { EntityListPage } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useLocalizedNavigate } from '../hooks/useLocalizedNavigate';
import type { EntityWithRole } from '@sudobility/entity_client';
import ScreenContainer from '../components/layout/ScreenContainer';

const LAST_ENTITY_KEY = 'entitystarter_last_entity';

function WorkspacesPage() {
  const { navigate } = useLocalizedNavigate();
  const entityClient = useEntityClient();

  const handleSelectEntity = (entity: EntityWithRole) => {
    localStorage.setItem(LAST_ENTITY_KEY, entity.entitySlug);
    navigate(`/dashboard/${entity.entitySlug}`);
  };

  return (
    <ScreenContainer>
      <EntityListPage client={entityClient} onSelectEntity={handleSelectEntity} />
    </ScreenContainer>
  );
}

export default WorkspacesPage;
