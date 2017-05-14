'use strict';

export default function () {
    return {
        template: require('../views/alert.pug'),
        restrict: 'A',
        controller: 'AlertController'
    };
}
