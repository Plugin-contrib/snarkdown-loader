import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import snarkdown from 'snarkdown';

import schema from './options.json';

export default function loader(source) {
  this.cacheable();
  const options = getOptions(this) || {};
  validateOptions(schema, options, 'snarkdown-loader');
  const result = snarkdown(source);
  return result;
}
