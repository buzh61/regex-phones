import Validator from '../src/js/app';

const phonesRU = [
  '8 (927) 000-00-00',
  '7 (927) 000-00-00',
  '+7 (927) 000-00-00',
];

const phonesCH = [
  '+86 000 000 0000',
];

test.each(phonesRU)('testing Validator on Russian numbers', (i) => {
  const phone = new Validator(i);
  expect(phone.validatePhone()).toEqual('+79270000000');
});

test.each(phonesCH)('testing Validator on Chinese numbers', (i) => {
  const phone = new Validator(i);
  expect(phone.validatePhone()).toEqual('+860000000000');
});
