import snarkdown from 'snarkdown';

export default function loader(source) {
  this.cacheable();
  const result = snarkdown(source);
  return result;
}
