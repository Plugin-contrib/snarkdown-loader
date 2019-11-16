import { getOptions } from 'loader-utils';
import snarkdown from 'snarkdown';

import schema from './options.json';

export default function loader(source) {
  this.cacheable();
  const options = getOptions(this) || {};
  const result = snarkdown(source);
  return result;
}
