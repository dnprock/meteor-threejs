Package.describe({
  summary: "three.js package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/three.js'
    ]
    ,'client'
  );
});
