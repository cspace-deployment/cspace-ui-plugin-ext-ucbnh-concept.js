import fields from './fields';

module.exports = () => configContext => ({
  extensions: {
    'ucbnh-concept': {
      fields: fields(configContext),
    },
  },
});
