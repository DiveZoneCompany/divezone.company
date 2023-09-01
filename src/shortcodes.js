const logo = (name) => {
  let rootClass = 'name-logo-dive';
  if (name.titlePart1 === 'DEV') {
    rootClass = 'name-logo-dev';
  }
  let postTitle = '';
  if (name.postTitle) {
    for (var i = 0; i < name.postTitle.length; i++) {
      postTitle += `<span>${name.postTitle.charAt(i)}</span>`;
    }
  }
  return `
<div class="${rootClass}">
    <div class="name-logo-pretitle">${name.preTitle ?? ''}</div>
    <div></div>
    <div class="name-logo-titlePart1">
        ${name.titlePart1 ?? 'DIVE'}
    </div>
    <div class="name-logo-titlePart2">
        ${name.titlePart2 ?? 'ZONE'}
    </div>
    <div></div>
    <div class="name-logo-posttitle">
        ${postTitle}
    </div>
</div>
    `;
};

const year = () => `${new Date().getFullYear()}`;

module.exports = {
  logo,
  year,
};
