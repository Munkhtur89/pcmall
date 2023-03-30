import * as React from 'react';

import SplitView from '../../components/SplitView';
import DetailsMessageStack from './DetailsMessageStack';
import MasterMessageStack from './MasterMessageStack';

const MessageScreenSplit = props => {
  return (
    <SplitView
      master={<MasterMessageStack {...props} />}
      detail={<DetailsMessageStack />}
    />
  );
};

export default MessageScreenSplit;
