// Vendor
import { h, Component, render } from 'preact';

// Local
import GoogleAnalyticsService from '../services/GoogleAnalyticsService.jsx';

// Stylesheets
import styles from './app.css';

const SocialMediaLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/BrimL',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lukebrimeyer/',
  },
];

/**
 * This is a logical 'container' that renders the contents of a Landing Page.
 *
 * Extremely simple for the time being but will still fire off an analytics pageview on mount.
 */
class LandingPage extends Component {
  componentDidMount() {
    GoogleAnalyticsService.trackPageView();
  }

  render() {
    return (
      <div class={styles.Wrapper}>
        <Blurb />
        <Footer />
      </div>
    );
  }
}

const Blurb = () => (
  <section>
    <hgroup>
      <h2 class={styles.Heading}>Hey there!</h2>
      <h4 class={styles.SubHeading}>My name is Luke.</h4>
    </hgroup>
    <p class={styles.Content}>I'm a full-stack developer based in Detroit, and I enjoy building cool things for the Internet.</p>
    <p class={styles.Content}>This site is very much an active work in progress. Feel free to reach out through the links below if you need to get in touch.</p>
  </section>
);

const Footer = () => (
  <div class={styles.Footer}>
    { SocialMediaLinks.map(socialLink => <SocialLink { ...socialLink } />) }
  </div>
);

class SocialLink extends Component {
  onClickHandler = () => GoogleAnalyticsService.trackEvent(['contact', this.props.title]);

  render(props) {
    return (
      <a
        class={styles.Link}
        href={props.url}
        onClick={this.onClickHandler}
        target='_blank'
      >
        {props.title}
      </a>
    );
  }
}

export default LandingPage;
