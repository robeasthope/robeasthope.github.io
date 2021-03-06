function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    // Home page
    .state('home', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    })

    // Holding page
    .state('holding-page', {
      url: '/holding-page',
      views: {
        'content': {
          templateUrl: 'app/holding-page/holding-page.html'
        }
      }
    })

    // *

    // Projects
    .state('arup', {
      url: '/arup',
      views: {
        'content': {
          templateUrl: 'app/projects/arup/arup.html'
        }
      }
    })
    .state('pladis', {
      url: '/pladis',
      views: {
        'content': {
          templateUrl: 'app/projects/pladis/pladis.html'
        }
      }
    })
    .state('eon-homebuyers', {
      url: '/eon-homebuyers',
      views: {
        'content': {
          templateUrl: 'app/projects/eon-homebuyers/eon-homebuyers.html'
        }
      }
    })
    .state('trail-link', {
      url: '/trail-link',
      views: {
        'content': {
          templateUrl: 'app/projects/trail-link/trail-link.html'
        }
      }
    })
    .state('sapient-banners', {
      url: '/sapient-banners',
      views: {
        'content': {
          templateUrl: 'app/projects/sapient-banners/sapient-banners.html'
        }
      }
    })
    .state('sony-wheel', {
      url: '/sony-wheel',
      views: {
        'content': {
          templateUrl: 'app/projects/sony-wheel/sony-wheel.html'
        }
      }
    })
    .state('haygarth-digital-room', {
      url: '/haygarth-digital-room',
      views: {
        'content': {
          templateUrl: 'app/projects/haygarth-digital-room/haygarth-digital-room.html'
        }
      }
    })
    .state('ysl-rock-chick', {
      url: '/ysl-rock-chick',
      views: {
        'content': {
          templateUrl: 'app/projects/ysl-rock-chick/ysl-rock-chick.html'
        }
      }
    })
    .state('haygarth', {
      url: '/haygarth',
      views: {
        'content': {
          templateUrl: 'app/projects/haygarth/haygarth.html'
        }
      }
    })
    .state('sony-demo-bay', {
      url: '/sony-demo-bay',
      views: {
        'content': {
          templateUrl: 'app/projects/sony-demo-bay/sony-demo-bay.html'
        }
      }
    })
    .state('louise-and-daniel', {
      url: '/louise-and-daniel',
      views: {
        'content': {
          templateUrl: 'app/projects/louise-and-daniel/louise-and-daniel.html'
        }
      }
    })
    .state('giles-deacon', {
      url: '/giles-deacon',
      views: {
        'content': {
          templateUrl: 'app/projects/giles-deacon/giles-deacon.html'
        }
      }
    })
    .state('eufn', {
      url: '/eufn',
      views: {
        'content': {
          templateUrl: 'app/projects/eufn/eufn.html'
        }
      }
    })
    .state('lancastrians', {
      url: '/lancastrians',
      views: {
        'content': {
          templateUrl: 'app/projects/lancastrians/lancastrians.html'
        }
      }
    })
    .state('layla-moran', {
      url: '/layla-moran',
      views: {
        'content': {
          templateUrl: 'app/projects/layla/layla.html'
        }
      }
    })
    .state('ambr', {
      url: '/ambr',
      views: {
        'content': {
          templateUrl: 'app/projects/ambr/ambr.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
