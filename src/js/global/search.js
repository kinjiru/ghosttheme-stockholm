export function search() {
  let ghostSearch = new GhostSearch({
    key: '2ba06e23c3fb2a866de96402f0',
    host: 'https://hackersandslackers.com',
    input: '#my-custom-input',
    results: '#my-custom-results',
    options: {
      limit: 5,
      keys: ['title', 'plaintext', 'slug']
    },
    api: {
      resource: 'posts',
      parameters: {
        fields: [
          'title', 'slug', 'plaintext', 'image', 'feature_image'
        ],
        formats: 'plaintext',
        include: 'tags'
      }
    },
    template: function(result) {
      let tag = result.tags[0];
      let url = [location.protocol, '//', location.host].join('');
      return '<li> \n' + '<img src="' + result.feature_image + '" alt="' + result.title + '"> \n ' + '<div><a href="' + result.url + '">' + result.title + '</a> \n' + '<span class="tag "> <span class="' + tag.slug + '"><i class="fas fa-tags"></i> ' + tag.name + '</span></span></div> \n ' + '</li>';
    }
  });
}
