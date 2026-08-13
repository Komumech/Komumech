const projects = [
  { name: 'Daily Crumb', type: 'Web experience', url: 'https://dailycrumb.netlify.app/' },
  { name: 'T-T Analytics', type: 'Data dashboard', url: 'https://t-tanalytics.vercel.app/' },
  { name: 'Integra Co-op', type: 'Collaboration platform', url: 'https://integraco-op.vercel.app/' },
  { name: 'Mission Safehouse', type: 'Front-end experience', url: 'https://missionsafehouse.vercel.app/' },
  { name: 'Sir Paul', type: 'Personal website', url: 'https://sirpaul.vercel.app/' },
  { name: 'Six Plus One', type: 'Interactive application', url: 'https://six-plus-one.vercel.app/' }
];

const projectList = document.querySelector('#project-list');
projects.forEach((project, index) => {
  const link = document.createElement('a');
  link.className = 'project-row';
  link.href = project.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  const preview = `https://image.thum.io/get/width/500/crop/320/noanimate/${project.url}`;
  link.innerHTML = `<span>${String(index + 5).padStart(2, '0')}</span><img src="${preview}" alt="${project.name} website preview"><div><h3>${project.name}</h3><p>${project.type}</p></div><b aria-hidden="true">↗</b>`;
  projectList.append(link);
});
