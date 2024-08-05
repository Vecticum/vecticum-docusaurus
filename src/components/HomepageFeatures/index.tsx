import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link?: string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User guide',
    Svg: require('@site/static/img/vecticum.svg').default,
    description: (
      <>
        If you want to learn, how to use Vecticum, read user guide.
      </>
    ),
    link: 'docs/category/user-guide'
  },
  {
    title: 'Administration guide',
    Svg: require('@site/static/img/vecticum.svg').default,
    description: (
      <>
        If you are vecticum administator and want to learn, how to configure Vecticum, read administration guide.
      </>
    ),
    link: 'docs/category/administration'
  }
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
