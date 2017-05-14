'use strict';

export default function () {
    return {
        template: require('../views/404.pug'),
        restrict: 'A',
        controller: '404'
    };
}
