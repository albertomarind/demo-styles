import {
  css
} from 'lit-element';

export const Strokes = css `
  .stroke {
    border-width: 1px;
    border-style: solid;
  }
  .stroke[color="primary-sea"]{
    border-color: var(--bpwc-theme-primary-sea);
  }

  .stroke[color="primary-noir-20"]{
    border-color: var(--bpwc-theme-primary-noir-20);
  }
  .stroke[color="primary-noir-10"]{
    border-color: var(--bpwc-theme-primary-noir-10);
  }

  .stroke[color="signal-error"]{
    border-color: var(--bpwc-theme-signal-error);
  }

  .stroke[color="signal-warning"]{
    border-color: var(--bpwc-theme-signal-warning);
  }

  .stroke[color="signal-success"]{
    border-color: var(--bpwc-theme-signal-success);
  }

`;
