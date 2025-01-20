import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Footer from '../FooterComponent.vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages: {
    en: {
      socialNetworks: 'Social Networks',
      myRentBook: 'My Rent Book',
    },
  },
});

describe('Footer Component', () => {
  it('should render the correct current year in the footer', () => {
    const wrapper = mount(Footer, {
      global: {
        plugins: [i18n],
      },
    });

    const currentYear = new Date().getFullYear();
    const copyrightText = wrapper.find('span').text();

    expect(copyrightText).toContain(currentYear.toString());
  });

  it('should render social network logos correctly', () => {
    const wrapper = mount(Footer, {
      global: {
        plugins: [i18n],
      },
    });

    const instagramLogo = wrapper.find('img[alt="Logo Instagram"]');
    const facebookLogo = wrapper.find('img[alt="Logo Facebook"]');
    const xLogo = wrapper.find('img[alt="Logo X"]');

    expect(instagramLogo.exists()).toBe(true);
    expect(facebookLogo.exists()).toBe(true);
    expect(xLogo.exists()).toBe(true);
  });
});
