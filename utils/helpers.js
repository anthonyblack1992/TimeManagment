module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  getZodiacSign: (date) => {
    const month = date.getMonth() + 1; // getMonth() is zero-based
    const day = date.getDate();

    let sign = '';
    let description = '';

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      sign = 'Aquarius';
      description =
        'Aquarius. Aquarius is known for being independent and imaginative';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      sign = 'Pisces';
      description = 'Pisces. Pisces is known for being empathetic and artistic';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      sign = 'Aries';
      description = 'Aries. Aries is known for being bold and ambitious';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      sign = 'Taurus';
      description = 'Taurus. Taurus is known for being reliable and patient';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      sign = 'Gemini';
      description = 'Gemini. Gemini is known for being adaptable and outgoing';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      console.log('Cancer');
      sign = 'Cancer';
      description =
        'Cancer. Cancer is known for being nurturing and protective';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      sign = 'Leo';
      description = 'Leo. Leo is known for being charismatic and confident';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      sign = 'Virgo';
      description = 'Virgo. Virgo is known for being analytical and meticulous';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      sign = 'Libra';
      description =
        'Libra. Libra is known for being diplomatic and fair-minded';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      sign = 'Scorpio';
      description =
        'Scorpio. Scorpio is known for being passionate and resourceful';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      sign = 'Sagittarius';
      description =
        'Sagittarius. Sagittarius is known for being adventurous and optimistic';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      sign = 'Capricorn';
      description =
        'Capricorn. Capricorn is known for being disciplined and responsible';
    }
    return description;
  },
};
