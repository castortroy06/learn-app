/** @type { import('@storybook/react').Preview } */
import '../src/sass/fonts.scss';
import '../src/sass/bootstrap/bootstrap.critical.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
