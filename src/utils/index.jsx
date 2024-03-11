//function to get the time left duration from a particular timestamp
export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};
export function sortAddress(add) {
  const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}
//function to generate unique avatar of the registered user
export function generateUniqueAvatar(value) {
  return `https://avatars.dicebear.com/api/identicon/${value}.svg`;
}
export function isValidFacebookUrl(value) {
  const re = /^(https?:\/\/)?(www\.)?facebook\.com(?:\/[a-zA-Z0-9_\-\.]+)?$/;
  return re.test(value);
}
export function isValidTwitterUrl(value) {
  const re = /^(https?:\/\/)?(www\.)?twitter\.com(?:\/[a-zA-Z0-9_]+)?$/;
  return re.test(value);
}
export function isValidInstagramUrl(value) {
  const re = /^(https?:\/\/)?(www\.)?instagram\.com(?:\/[a-zA-Z0-9_]+)?$/;
  return re.test(value);
}
export function isValidDiscordUrl(value) {
  const re = /^(https?:\/\/)?(www\.)?discord\.gg(?:\/[a-zA-Z0-9_]+)?$/;
  return re.test(value);
}


export const currencyFormatter = (value) => {
  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(value);
};
