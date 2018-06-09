import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:concepts_naturalhistory': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/concept/domain/naturalhistory',
        },
      },
      associatedPerson: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.concepts_naturalhistory.associatedPerson.name',
              defaultMessage: 'Associated person',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local',
            },
          },
        },
      },
      associatedOrganization: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.concepts_naturalhistory.associatedOrganization.name',
              defaultMessage: 'Associated organization',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'organization/local',
            },
          },
        },
      },
    },
  };
};
