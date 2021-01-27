import {
  html,
  css,
  LitElement
} from 'lit-element';
import {
  Colors
} from './Colors';
import {
  Strokes
} from './Strokes';
import {
  Elevations
} from './Elevations';
import {
  Typographies
} from './Typographies';

export class BpwcStyles extends LitElement {
  static get styles() {
    return [
      Colors,
      Strokes,
      Elevations,
      Typographies
    ];
  }
}
