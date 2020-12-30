import * as rie from 'react-instagram-embed';

interface Window {
  instaembed: any
}
declare var window: Window

window.instaembed = rie;

