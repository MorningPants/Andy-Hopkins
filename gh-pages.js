var ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MorningPants/Andy-Hopkins', 
        user: {
            name: 'Andy Hopkins',
            email: 'andyghopkins@gmail.com' 
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)