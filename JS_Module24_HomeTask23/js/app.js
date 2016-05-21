requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4.min',
        'template': 'template'
    },
    shim: {
        'jquery': {
            exports:'jQuery'
        },
        'template': {
			exports: 'template'
		}
    }
});


require(
    [
        'model',
        'view',
        'controller',
        'jquery',
        'template'
    ],
    function (model, view, controller, $, template) {
        var firstToDoList = ['Buy Meat', 'Learn JavaScript', 'Watch TV Show'];
        var newModel = new model(firstToDoList);
        var newView = new view(newModel);
        var newController = new controller(newModel, newView);
    }
);