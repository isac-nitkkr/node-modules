import Search, { type searchCategory } from '~/app/search/search';
import { Dialog } from '~/components/dialog';

export default function Page({
  params: { locale },
  searchParams: { query, category },
}: {
  params: { locale: string };
  searchParams: {
    query: string;
    category: searchCategory;
  };
}) {
  return (
    <Dialog
      className="container mb-10 mt-24 overflow-y-auto xl:max-w-screen-xl"
      shouldCenter={false}
    >
      <Search query={query} selectedCategory={category} locale={locale} />
    </Dialog>
  );
}
