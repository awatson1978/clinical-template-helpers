Package.describe({
  summary: "Template Helpers for the ClinicalFramework.",
  version: "0.1.0",
  git: "http://github.com/awatson1978/clinical-template-helpers.git",
  name: "clinical:template-helpers"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use('ui');
  api.use('templating');

  api.add_files('template.helpers.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('helpers-tests.js');
});
