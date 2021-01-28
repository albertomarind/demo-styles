import {
  css
} from 'lit-element';

export const Elevations = css `

    [class^="elevation--"]{
        border-radius: 8px;
    }

    .elevation--noir-sm{
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation--noir-md{
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation--noir-lg{
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.16);
    }

    .elevation--noir-el{
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-noir-100-rgb), 0.12);
    }

    .elevation--bleu-sm{
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.16);
    }

    .elevation--bleu-md {
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation--bleu-lg {
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation--bleu-el {
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-bleu-rgb), 0.12);
    }

    .elevation--fresh-berry-sm {
        box-shadow: 0px 2px 4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.16);
    }

    .elevation--fresh-berry-md {
        box-shadow: 0px 4px 4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }

    .elevation--fresh-berry-lg {
        box-shadow: 0px 6px 10px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }
    .elevation--fresh-berry-el {
        box-shadow: 0px 32px 32px -4px rgba(var(--bpwc-theme-primary-fresh-berry-rgb), 0.12);
    }
  `;
