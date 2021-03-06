// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import Button from './Button';
import type { TranslationType } from '../../types/Translation';

type Props = {|
  +title: TranslationType,
  +onPress: () => void,
  +disabled: boolean,
  +type: 'primary' | 'secondary',
  +testID?: string,
|};

/**
 * Button with custom translated title.
 */
export default function TextButton(props: Props) {
  return (
    <Button
      onPress={props.onPress}
      disabled={props.disabled}
      style={
        props.disabled &&
        (props.type === 'secondary'
          ? styleSheet.buttonSecondaryDisabled
          : styleSheet.buttonPrimaryDisabled)
      }
      type={props.type}
      testID={props.testID}
    >
      <ButtonTitle
        style={[
          props.type === 'secondary'
            ? styleSheet.buttonTextSecondary
            : styleSheet.buttonTextPrimary,
          props.disabled &&
            props.type === 'primary' &&
            styleSheet.buttonTextPrimaryDisabled,
        ]}
        text={props.title}
      />
    </Button>
  );
}

TextButton.defaultProps = {
  disabled: false,
  type: 'primary',
};

const styleSheet = StyleSheet.create({
  buttonTextPrimary: {
    color: defaultTokens.paletteWhite,
  },
  buttonTextSecondary: {
    color: defaultTokens.colorTextButtonSecondary,
  },
  buttonPrimaryDisabled: {
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  buttonSecondaryDisabled: {
    opacity: 0.3,
  },
  buttonTextPrimaryDisabled: {
    color: defaultTokens.paletteInkDark,
  },
});
