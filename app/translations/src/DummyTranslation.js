// @flow

import * as React from 'react';
import { Text } from '@kiwicom/react-native-app-shared';

type Props = {|
  id: ?string | ?number,
|};

/**
 * This translation component only returns the ID back without translating
 * it. It should therefore used in tests and other places where we don't
 * want to deal with translations but the Flow requires `Translation`.
 */
export default class DummyTranslation extends React.Component<Props> {
  // use this property to highlight translations for screenshoting or debugging
  highlightTranslations = false;

  render = () => (
    <Text
      style={
        this.highlightTranslations
          ? {
              backgroundColor: 'pink',
            }
          : undefined
      }
    >
      {this.props.id}
    </Text>
  );
}