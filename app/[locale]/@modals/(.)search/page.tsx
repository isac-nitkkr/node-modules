import Search from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export default function Page({
  params: { locale },
  searchParams: { q: query, c: category },
}: {
  params: { locale: string };
  searchParams: { q: string; c: string };
}) {
  return (
    <Dialog
      className="container mb-12 mt-20 overflow-y-auto"
      shouldCenter={false}
    >
      <Search query={query} category={category} locale={locale} />
    </Dialog>
  );
}
