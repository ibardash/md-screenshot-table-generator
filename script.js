const fs = require("fs");

const INPUT_FILE_PATH = "./mr-table-input.md";
const OUTPUT_FILE_PATH = "./mr-table-output.md";
const IMAGE_SIZE = 500;
const MD_URL_REGEX =
  /^\!?\[([\w\s\d-_]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#-_]+)\)$/;
const HEADER = `| Description | Before | After |\n| ----------- | ------ | ----- |\n`;

function readInput() {
  return fs
    .readFileSync(INPUT_FILE_PATH)
    .toString()
    .split("\n")
    .filter(Boolean);
}

function writeOutput(string) {
  fs.writeFile(OUTPUT_FILE_PATH, string, (err) => {
    if (err) throw err;
    console.log("❤️ ❤️ ❤️ Table generated! ❤️ ❤️ ❤️");
  });
}

function generateTable() {
  const screenshots = readInput().map(processMdUrl);
  const screenshotGroups = screenshots.reduce((acc, item) => {
    const { state, url, ...screenshotAttributes } = item;
    const id = JSON.stringify(screenshotAttributes);

    if (!acc[id]) {
      acc[id] = screenshotAttributes;
    }

    acc[id][state] = url;

    return acc;
  }, {});

  return `${HEADER}${Object.values(screenshotGroups)
    .map(generateTableRow)
    .join("\n")}`;
}

function generateTableRow(screenshot) {
  const { brand, platform, description, before, after } = screenshot;
  return `|**[${brand}, ${platform}]**: ${description}|${
    before ? `<img src="${before}" height=${IMAGE_SIZE}>` : ""
  }|${after ? `<img src="${after}" height=${IMAGE_SIZE}>` : ""}|`;
}

function processMdUrl(string) {
  const [_full, text, url] = string.match(MD_URL_REGEX);
  const [state, brand, platform, description = ''] = text.split("-");

  return {
    state,
    brand: capitalise(brand),
    platform: formatPlatformName(platform.replace(/_/g, " ")),
    description: capitalise(description.replace(/_/g, " ")),
    url,
  };
}

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatPlatformName(name) {
  if (name.toLowerCase() === "ios") return "iOS";
  return capitalise(name);
}

writeOutput(generateTable());
