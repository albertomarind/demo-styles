import {
  css
} from 'lit-element';

export const Elevations = css `
    .elevation {
        border-radius: 8px;
    }

    .elevation[color="noir-sm"]{
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation[color="noir-md"]{
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation[color="noir-lg"]{
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation[color="noir-el"]{
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.12);
    }

    .elevation[color="bleu-sm"]{
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.16);
    }

    .elevation[color="bleu-md"] {
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation[color="bleu-lg"] {
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation[color="bleu-el"] {
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation[color="fresh-berry-sm"] {
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.16);
    }

    .elevation[color="fresh-berry-md"] {
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }

    .elevation[color="fresh-berry-lg"] {
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }
    .elevation[color="fresh-berry-el"] {
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }
  `;
