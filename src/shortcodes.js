const logo = (name) => {
  let postTitle = '';
  if (name.postTitle) {
    for (var i = 0; i < name.postTitle.length; i++) {
      postTitle += `<span>${name.postTitle.charAt(i)}</span>`;
    }
  }
  return `
<div class="name-logo">
    <div class="name-logo-pretitle">${name.preTitle ?? ''}</div>
    <div></div>
    <div class="name-logo-dive">
        ${name.titlePart1 ?? 'DIVE'}
    </div>
    <div class="name-logo-zone">
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
