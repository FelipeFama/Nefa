export interface Trading {
  title: {
    text1: string;
    span: string;
  };
  articles: {
    title: string;
    description: string;
  }[];
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}
