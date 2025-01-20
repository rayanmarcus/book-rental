import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Header from '../HeaderComponent.vue';
import { createI18n } from 'vue-i18n';

// Configuração do i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  messages: {
    en: {
      myRentBook: 'My Rent Book',
    },
  },
});

describe('Header Component', () => {
  it('should render the logo image correctly', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [i18n],
      },
    });

    const logoImage = wrapper.find('img[alt="Logo"]');
    expect(logoImage.exists()).toBe(true);
  });

  it('should render the correct title with translation', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [i18n],
      },
    });

    const titleText = wrapper.find('h1').text();
    expect(titleText).toBe('My Rent Book');
  });
});
