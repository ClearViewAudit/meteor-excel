Package.describe({
  name: 'clearview:excel',
  summary: 'Parse excel worksheets for your meteor app.',
  version: '0.0.1',
  git: 'https://github.com/netanelgilad/meteor-excel'
});

Npm.depends({
  'xlsx' : '0.9.3',
  'xlsjs' : '0.7.6'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0.1');

  api.addFiles('lib/utils.js', 'server');
  api.addFiles('lib/workbook.js', 'server');
  api.addFiles('lib/worksheet.js', 'server');
  api.addFiles('excel.js', 'server');

  api.export('Excel');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clearview:excel');
  api.addFiles('excel-tests.js');
});
