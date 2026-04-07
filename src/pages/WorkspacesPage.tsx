import { EntityListPage } from '@sudobility/entity_pages';
import { useEntityClient } from '../config/entityClient';
import { useLocalizedNavigate } from '../hooks/useLocalizedNavigate';
import type { EntityWithRole } from '@sudobility/entity_client';
import { useSetPageConfig } from '../hooks/usePageConfig';

const LAST_ENTITY_KEY = 'entitystarter_last_entity';

function WorkspacesPage() {
  const { navigate } = useLocalizedNavigate();
  const entityClient = useEntityClient();

  useSetPageConfig({ scrollable: false, contentPadding: 'sm', maxWidth: '7xl' });

  const handleSelectEntity = (entity: EntityWithRole) => {
    localStorage.setItem(LAST_ENTITY_KEY, entity.entitySlug);
    navigate(`/dashboard/${entity.entitySlug}`);
  };

  return <EntityListPage client={entityClient} onSelectEntity={handleSelectEntity} />;
}

export default WorkspacesPage;
