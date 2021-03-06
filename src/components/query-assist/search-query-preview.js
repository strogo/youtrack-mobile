/* @flow */

import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';

import {COLOR_PLACEHOLDER} from '../variables/variables';
import {IconSearch} from '../icon/icon';

import styles from './query-assist.styles';
import {iconClearText} from '../icon/icon-clear-text';

type Props = {
  query: string,
  onFocus: (clear?: boolean) => void,
  onClearText: () => void
};


export default class SearchQueryPreview extends PureComponent<Props, void> {
  static defaultProps = {
    onFocus: () => {},
    onClearText: () => {}
  };

  focusAndClear = () => {
    this.props.onFocus(true);
  }

  focus = () => {
    this.props.onFocus(false);
  }

  render() {
    const {query} = this.props;

    return (
      <View style={styles.placeHolder}>
        <View style={styles.inputWrapper}>
          <IconSearch style={styles.searchIcon} size={20} color={COLOR_PLACEHOLDER}/>

          <Text
            onPress={this.focus}
            testID="query-assist-input"
            style={[
              styles.searchInput,
              styles.searchInputPlaceholder,
              query ? styles.searchInputHasText : null
            ]}
          >
            {query ? query : 'Enter search request'}
          </Text>

          {!!query && iconClearText(this.focusAndClear)}

        </View>
      </View>
    );
  }
}

