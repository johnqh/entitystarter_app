import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useCurrentEntity } from '@sudobility/entity_client';

/**
 * Redirects from /:lang/dashboard to /:lang/dashboard/:entitySlug
 * Uses the current entity from the shared entity context.
 */
function EntityRedirect() {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const [searchParams] = useSearchParams();
  const { currentEntity, isLoading, isInitialized } = useCurrentEntity();

  useEffect(() => {
    if (isLoading || !isInitialized) return;

    if (!currentEntity) {
      console.error('No entities available for user');
      return;
    }

    const redirectPath = searchParams.get('redirect') || '';
    navigate(`/${lang}/dashboard/${currentEntity.entitySlug}${redirectPath}`, {
      replace: true,
    });
  }, [currentEntity, isLoading, isInitialized, navigate, lang, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
      <div
        role="status"
        aria-label="Loading"
        className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
      />
    </div>
  );
}

export default EntityRedirect;
