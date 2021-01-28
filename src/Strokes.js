import {
  css
} from 'lit-element';

export const Strokes = css `
  [class^="stroke--"]{
    border-width: 1px;
    border-style: solid;
  }
  .stroke--primary-sea{
    border-color: var(--bpwc-theme-primary-sea);
  }
  .stroke--primary-noir-20{
    border-color: var(--bpwc-theme-primary-noir-20);
  }
  .stroke--primary-noir-10{
    border-color: var(--bpwc-theme-primary-noir-10);
  }
  .stroke--signal-error{
    border-color: var(--bpwc-theme-signal-error);
  }
  .stroke--signal-warning{
    border-color: var(--bpwc-theme-signal-warning);
  }
  .stroke--signal-success{
    border-color: var(--bpwc-theme-signal-success);
  }
`;
