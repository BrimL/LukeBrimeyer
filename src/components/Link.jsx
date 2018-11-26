// Vendor
import { h, Component, render } from 'preact';

// Local
import GoogleAnalyticsService from '../services/GoogleAnalyticsService.jsx';

// Styles
import styles from './Link.css';

/**
 * In this component we'll overlay a link so we have a selectable navigation area
 * without the unwanted styling. This will allow us to do other fun stuff in the
 * future like have multiple selectable linked nested inside one another.
 */
export default class Link extends Component {
  onClickHandler = () => GoogleAnalyticsService.trackEvent(['contact', this.props.title]);

  render(props) {
    return (
      <div class={styles.LinkWrapper}>
        <a
          aria-label={props.title}
          class={styles.LinkAnchor}
          href={props.url}
          onClick={this.onClickHandler}
          tabIndex={1}
          role='button'
          target='_blank'
        />
        <div class={styles.Link}>
          {props.title}
        </div>
      </div>
    );
  }
}
