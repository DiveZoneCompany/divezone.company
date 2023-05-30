const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

const md = (content = "") => {
  return markdownIt({ html: true }).render(content);
};

const zonify = (value) => {
  let parts = value.split(' ');
  let response = `<span class="formatted-name-first">${parts[0]}</span><span class="formatted-name-second">${parts[1]}</span>`;
  if (parts.length == 3) {
    response += ` ${parts[2]}`;
  }
  return `<span class="formatted-name">${response}</span>`;
};

exports.zonify = zonify;

module.exports = {
  htmlDateString,
  md,
  zonify,
};
