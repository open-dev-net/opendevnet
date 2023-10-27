import { Metadata } from 'next';

import { DocumentContent } from '@components';
import { getDocFromSlug } from '@utils/mdxApi';

const fileName = 'accessibility';
const fileDir = 'src/markdown/policies';

export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await getDocFromSlug(fileName, fileDir);
  return {
    title: `${meta.title} | Open Dev Net`,
  };
};

const Page = async (): Promise<JSX.Element> => {
  const doc = await getDocFromSlug(fileName, fileDir);

  return (
    <div className="mt-10 lg:mt-20 mb-20 lg:mb-28 xl:mb-52 max-w-3xl mx-auto w-11/12">
      <DocumentContent doc={{ source: doc.source, title: doc.meta.title }} />
    </div>
  );
};

export default Page;