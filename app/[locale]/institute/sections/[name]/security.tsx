import WorkInProgress from '~/components/work-in-progress';
import { getTranslations } from '~/i18n/translations';

export default async function Security({ locale }: { locale: string }) {
  const text = (await getTranslations(locale)).Section.Security;

  return <WorkInProgress locale={locale} />;
}
