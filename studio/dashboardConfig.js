export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ee9dc8a05dc836445594e66',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8tkh6cpu',
                  apiId: '0345cf4a-ca03-4116-8298-535acc82bb31'
                },
                {
                  buildHookId: '5ee9dc8bd065b1bfd8c5e659',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-syq32p1d',
                  apiId: 'ba31f1e8-17b0-4852-b55f-56b321f39bae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JingLi1998/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-syq32p1d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
