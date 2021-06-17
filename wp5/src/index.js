import _ from 'lodash';

import { WALLET_BACKUP_STATE_KEY } from '@gnu-taler/taler-wallet-core'
// import { OperationFailedError } from "@gnu-taler/taler-wallet-core";

function component() {
  const element = document.createElement('div');

  // const error = new OperationFailedError('message')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

