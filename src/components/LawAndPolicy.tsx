import * as Styled from "@styledComponents/Page";

const publications = [
  {
    title:
      'book chapter - "trapped between administrative detention, imprisonment, and freedom-in-limbo"',
    link: "https://lawcat.berkeley.edu/record/664232",
  },
  {
    title:
      'qualitative research study - "l\'effet de la rétention administrative sur les parcours migratoires : une illusion ?"',
    link: "https://www.france-terre-asile.org/images/CDS36_web.compressed.pdf",
  },
  {
    title:
      'doctoral thesis - "limbo spaces between illegal and legal stay resulting from eu management of non-removable third country nationals"',
    link: "https://theses.hal.science/tel-03510589/document",
  },
  {
    title:
      "journal article - \"les limbes de l'inéloignabilité : la nouvelle condition juridique de l'étranger\"",
    link: "https://www.cairn.info/revue-critique-de-droit-international-prive-2015-1-page-43.htm",
  },
  {
    title:
      'journal article - "does karl marx have a normative conception of justice ?"',
    link: "https://heinonline.org/HOL/LandingPage?handle=hein.journals/ucljurev16&div=3&id=&page=",
  },
];

const LawAndPolicy = () => {
  return (
      <Styled.Container>
      <Styled.Title>Law and Policy</Styled.Title>
        {publications.map((publication) => {
          return <Styled.Anchor href={publication.link}>{publication.title.toLocaleUpperCase()}</Styled.Anchor>;
        })}
      </Styled.Container>
  );
};

export default LawAndPolicy;
