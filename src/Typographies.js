import {
  css
} from 'lit-element';

export const Typographies = css `
    @font-face {
        font-family: Roboto;
        src: url("../assets/fonts/Roboto/Roboto-Regular.ttf");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: Roboto;
        src: url("../assets/fonts/Roboto/Roboto-Bold.ttf");
        font-weight: bold;
        font-style: normal;
    }

    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    .h7,
    .ph1,
    .ph2,
    .ph3,
    .ph4,
    .ph5,
    .ph6,
    .ph7 {
        font-family: Roboto;
    }

    .h1-bold,
    .h2-bold,
    .h3-bold,
    .h4-bold,
    .h5-bold,
    .h6-bold,
    .h7-bold,
    .ph1-bold,
    .ph2-bold,
    .ph3-bold,
    .ph4-bold,
    .ph5-bold {
        font-weight: bold;
    }

    .h1-regular,
    .h2-regular,
    .h3-regular,
    .h4-regular,
    .h5-regular,
    .h6-regular,
    .h7-regular,
    .ph1-regular,
    .ph2-regular,
    .ph3-regular,
    .ph4-regular,
    .ph5-regular {
        font-weight: normal;
    }

    .h1 {
        font-size: 32px;
        line-height: 36px;
    }

    .h2 {
        font-size: 28px;
        line-height: 32px;
    }

    .h3 {
        font-size: 24px;
        line-height: 28px;
    }

    .h4 {
        font-size: 20px;
        line-height: 24px;
    }

    .h5 {
        font-size: 18px;
        line-height: 22px;
    }

    .h6 {
        font-size: 16px;
        line-height: 20px;
    }

    .h7 {
        font-size: 14px;
        line-height: 18px;
    }

    .ph1 {
        font-size: 18px;
        line-height: 24px;
    }

    .ph2 {
        font-size: 16px;
        line-height: 24px;
    }

    .ph3 {
        font-size: 14px;
        line-height: 20px;
    }

    .ph4 {
        font-size: 12px;
        line-height: 16px;
    }

    .ph5 {
        font-size: 10px;
        line-height: 16px;
    }
  `;
