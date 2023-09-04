export interface Step {
  title: {
    text1: string;
  };
  article: {
    title: string;
    content: string;
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
  }[];
  arrowImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}
