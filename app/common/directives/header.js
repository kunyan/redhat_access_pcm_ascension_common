'use strict';

export default function () {
    return {
        template: require('../views/header.pug'),
        restrict: 'A',
        scope: {page: '@'},
        controller: 'HeaderController'
    };
}
