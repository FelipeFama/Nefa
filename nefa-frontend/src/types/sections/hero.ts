export interface Hero {
  title: {
    span: string;
    text1: string;
    text2: string;
  };
  subtitle: string;
  description: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  particles: {
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
  }[];
}
