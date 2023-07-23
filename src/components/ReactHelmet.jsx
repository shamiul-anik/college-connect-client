import { Helmet } from 'react-helmet-async';

const ReactHelmet = ({ documentTitle, metaDescription }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={documentTitle} />
    </Helmet>
  );
};

export default ReactHelmet;