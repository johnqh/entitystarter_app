import { MembersManagementPage } from '@sudobility/entity_pages';
import { SEO } from '@sudobility/seo_lib';
import { useEntityClient } from '../config/entityClient';
import { useAuthStatus } from '@sudobility/auth-components';
import { useCurrentEntity } from '@sudobility/entity_client';
import { Section } from '@sudobility/components';
import { variants } from '@sudobility/design';
import { seoConfig } from '../config/seo';

function MembersPage() {
  const entityClient = useEntityClient();
  const { currentEntity, isLoading } = useCurrentEntity();
  const { user } = useAuthStatus();

  if (isLoading || !currentEntity) {
    return (
      <Section spacing="xl">
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
      <SEO config={seoConfig} title="Members" noIndex />
      <MembersManagementPage
        client={entityClient}
        entity={currentEntity}
        currentUserId={user.uid}
      />
    </>
  );
}

export default MembersPage;
