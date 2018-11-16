import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { injectIntl, FormattedMessage } from 'react-intl';
import SettingToggle from '../../notifications/components/setting_toggle';

export default @injectIntl
class ColumnSettings extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    columnId: PropTypes.string,
    highlight_keywords: ImmutablePropTypes.map.isRequired,
  };

  render () {
    const { settings, onChange, highlight_keywords } = this.props;

    return (
      <div>

        <div className='column-settings__section'>
          <span><FormattedMessage id='home.column_settings.highlight_keywords' defaultMessage='Highlight Keywords' /></span>
          <a href='/settings/highlight_keywords' className='setting-highlight_keyword__icon'>
            <i className='fa fa-gear' />
          </a>
        </div>
        <div className='column-settings__row setting-highlight_keyword__body'>
          {highlight_keywords.get('keywords').map(keyword => {
            return <span key={keyword.get('id')} className='setting-highlight_keyword__section'>{keyword.get('word')}</span>;
          })}
        </div>

        <span className='column-settings__section'><FormattedMessage id='home.column_settings.advanced' defaultMessage='Advanced' /></span>

>>>>>>> e8f7b6275... highlight_function
        <div className='column-settings__row'>
          <SettingToggle settings={settings} settingPath={['other', 'onlyMedia']} onChange={onChange} label={<FormattedMessage id='community.column_settings.media_only' defaultMessage='Media Only' />} />
        </div>
      </div>
    );
  }

}
