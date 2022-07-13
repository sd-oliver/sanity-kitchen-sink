export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62cf2eed395325429ce54ad4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xz7kugdw',
                  apiId: '7a5b532e-16f7-452c-ac0a-e0826fbc950f'
                },
                {
                  buildHookId: '62cf2eeee731574223aa3eab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-i2wp5h9x',
                  apiId: '7e0ac58d-d1a9-4fa0-af87-ab83561f5782'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sd-oliver/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-i2wp5h9x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
