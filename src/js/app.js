export default class Validator {
  constructor(phone) {
    this.phone = phone;
  }

  validatePhone() {
    const spaces = /\s*[-\(\)]*/g;
    const ru = /^[78](?=\d{10}$)/;

    const clearPhone = this.phone.replace(spaces, '');

    if (clearPhone.search(ru) !== -1) {
      return clearPhone.replace(ru, '+7');
    }
    return clearPhone;
  }
}
